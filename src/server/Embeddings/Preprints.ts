import { Array, Effect, pipe, Redacted, Schema } from "effect";
import {
  PgVector,
  Tokenizer,
  UnableToAddPreprints,
  UnableToQuery,
  type Doi,
  type Embedding,
  type OrcidId,
  type Paper,
} from "./Shared";
import type { SqlClient, SqlError } from "@effect/sql";
import type { HttpClient } from "@effect/platform";
import { generateEmbeddings } from "./OpenRouter";
import type { LanguageCode } from "iso-639-1";
import { detectLanguage } from "./Cld";

export const findExistingDois = (
  dois: ReadonlyArray<Doi>,
  sql: SqlClient.SqlClient,
): Effect.Effect<Set<Doi>, UnableToAddPreprints> =>
  Effect.gen(function* () {
    if (dois.length === 0) return new Set<Doi>();

    const normalized = dois.map((doi) => doi.toLowerCase());
    const rows = yield* sql<{ doi: string }>`
      SELECT doi FROM preprints WHERE ${sql.in("doi", normalized)}
    `.pipe(Effect.mapError((cause) => new UnableToAddPreprints({ cause })));

    return new Set(rows.map((row) => row.doi.toLowerCase()));
  });

export const storeEmbeddings = (
  rows: ReadonlyArray<{
    doi: Doi;
    language: LanguageCode;
    authors: ReadonlyArray<OrcidId>;
    embedding: Embedding;
  }>,
  sql: SqlClient.SqlClient,
): Effect.Effect<void, UnableToAddPreprints> =>
  Effect.gen(function* () {
    if (rows.length === 0) return;

    const values = rows.map((row) => {
      const encoded = Schema.encodeSync(PgVector)(row.embedding);
      return sql`(${row.doi.toLowerCase()}, ${row.language}, ${row.authors}, ${encoded}::halfvec)`;
    });

    yield* sql`
      INSERT INTO preprints (doi, language, authors, embedding)
      VALUES ${sql.join(",", false)(values)}
      ON CONFLICT (doi) DO NOTHING
    `;
  }).pipe(Effect.mapError((cause) => new UnableToAddPreprints({ cause })));

export const ensurePreprintsTable = (
  sql: SqlClient.SqlClient,
): Effect.Effect<void, SqlError.SqlError> =>
  sql`
    CREATE TABLE IF NOT EXISTS preprints (
      doi VARCHAR PRIMARY KEY,
      language CHAR(2) NOT NULL,
      authors CHAR(19)[] NOT NULL,
      embedding HALFVEC(1024)
    );
    CREATE INDEX IF NOT EXISTS preprints_embedding_idx ON preprints USING hnsw (embedding halfvec_cosine_ops)
  `;

export const getRelatedDois =
  (
    limit: number,
    sql: SqlClient.SqlClient,
    languages: ReadonlyArray<LanguageCode>,
    inputOrcidId: OrcidId,
    inputDois: Array.NonEmptyReadonlyArray<Doi>,
  ) =>
  (mean: Embedding): Effect.Effect<ReadonlyArray<{ doi: Doi; distance: number }>, UnableToQuery> =>
    sql
      .withTransaction(
        Effect.gen(function* () {
          // The HNSW index only searches an ef_search-sized candidate list per
          // query; without raising it to at least `limit`, it silently returns
          // fewer rows than requested once the planner uses the index.
          yield* sql`SET LOCAL hnsw.ef_search = ${sql.literal(String(limit))}`;

          const encoded = Schema.encodeSync(PgVector)(mean);
          return yield* sql`
            SELECT doi, embedding <=> ${encoded}::halfvec AS distance FROM preprints
            WHERE ${sql.in("language", languages)}
              AND NOT (${inputOrcidId} = ANY(authors))
              AND NOT ${sql.in("doi", inputDois)}
            ORDER BY embedding <=> ${encoded}::halfvec
            LIMIT ${limit}
          `;
        }),
      )
      .pipe(
        Effect.map((rows) => rows.map((row) => row as unknown as { doi: Doi; distance: number })),
        Effect.mapError((cause) => new UnableToQuery({ cause })),
      );

export const createMissingEmbeddings =
  (
    apiKey: Redacted.Redacted,
    httpClient: HttpClient.HttpClient,
    sql: SqlClient.SqlClient,
    tokenizer: typeof Tokenizer.Service,
  ) =>
  (inputPapers: ReadonlyArray<Paper>) =>
    Effect.gen(function* () {
      const existing = yield* findExistingDois(
        inputPapers.map((paper) => paper.doi),
        sql,
      );

      const papersWithoutEmbeddings = inputPapers.filter(
        (paper) => !existing.has(paper.doi.toLowerCase()),
      );

      const generated: ReadonlyArray<Paper & { embedding: Embedding }> =
        papersWithoutEmbeddings.length > 0
          ? yield* generateEmbeddings(papersWithoutEmbeddings, apiKey, httpClient, tokenizer).pipe(
              Effect.catchTag(
                "UnableToGetSurveyPapers",
                ({ cause }) => new UnableToAddPreprints({ cause }),
              ),
            )
          : [];

      const generatedWithLanguage = yield* pipe(
        generated,
        Effect.forEach(
          (w) => detectLanguage(w.title).pipe(Effect.map((language) => ({ ...w, language }))),
          { concurrency: 4 },
        ),
        Effect.catchTag(
          "UnableToDetectLanguage",
          ({ cause }) => new UnableToAddPreprints({ cause }),
        ),
      );

      yield* storeEmbeddings(generatedWithLanguage, sql);
    });
