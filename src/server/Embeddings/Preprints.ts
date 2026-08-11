import { Effect, pipe, Redacted, Schema } from "effect";
import {
  PgVector,
  UnableToAddPreprints,
  UnableToQuery,
  type Doi,
  type Embedding,
  type Paper,
} from "./Shared";
import type { SqlClient, SqlError } from "@effect/sql";
import type { HttpClient } from "@effect/platform";
import { generateEmbeddings } from "./OpenRouter";
import type { LanguageCode } from "iso-639-1";
import { detectLanguage } from "./Cld";

const hasStoredEmbedding = (
  doi: Doi,
  sql: SqlClient.SqlClient,
): Effect.Effect<boolean, UnableToAddPreprints> =>
  Effect.gen(function* () {
    const rows = yield* sql`SELECT embedding FROM preprints WHERE doi = ${doi}`.pipe(
      Effect.mapError((cause) => new UnableToAddPreprints({ cause })),
    );

    if (rows.length === 0) return false;

    return true;
  }).pipe(Effect.mapError((cause) => new UnableToAddPreprints({ cause })));

const storeEmbedding = (
  doi: Doi,
  language: LanguageCode,
  embedding: Embedding,
  sql: SqlClient.SqlClient,
): Effect.Effect<void, UnableToAddPreprints> =>
  Effect.gen(function* () {
    const encoded = Schema.encodeSync(PgVector)(embedding);
    yield* sql`
      INSERT INTO preprints (doi, language, embedding)
      VALUES (${doi}, ${language}, ${encoded}::halfvec)
    `;
  }).pipe(Effect.mapError((cause) => new UnableToAddPreprints({ cause })));

export const ensurePreprintsTable = (
  sql: SqlClient.SqlClient,
): Effect.Effect<void, SqlError.SqlError> =>
  sql`
    CREATE TABLE IF NOT EXISTS preprints (
      doi VARCHAR PRIMARY KEY,
      language CHAR(2) NOT NULL,
      embedding HALFVEC(1024)
    );
    CREATE INDEX IF NOT EXISTS preprints_embedding_idx ON preprints USING hnsw (embedding halfvec_cosine_ops)
  `;

export const getRelatedDois =
  (limit: number, sql: SqlClient.SqlClient, languages: ReadonlyArray<LanguageCode>) =>
  (mean: Embedding): Effect.Effect<ReadonlyArray<Doi>, UnableToQuery> =>
    sql
      .withTransaction(
        Effect.gen(function* () {
          // The HNSW index only searches an ef_search-sized candidate list per
          // query; without raising it to at least `limit`, it silently returns
          // fewer rows than requested once the planner uses the index.
          yield* sql`SET LOCAL hnsw.ef_search = ${sql.literal(String(limit))}`;

          const encoded = Schema.encodeSync(PgVector)(mean);
          return yield* sql`
            SELECT doi FROM preprints
            WHERE ${sql.in("language", languages)}
            ORDER BY embedding <=> ${encoded}::halfvec
            LIMIT ${limit}
          `;
        }),
      )
      .pipe(
        Effect.map((rows) => rows.map((row) => (row as unknown as { doi: string }).doi as Doi)),
        Effect.mapError((cause) => new UnableToQuery({ cause })),
      );

export const createMissingEmbeddings =
  (apiKey: Redacted.Redacted, httpClient: HttpClient.HttpClient, sql: SqlClient.SqlClient) =>
  (inputPapers: ReadonlyArray<Paper>) =>
    Effect.gen(function* () {
      const papersWithExistingEmbeddings = yield* pipe(
        inputPapers,
        Effect.forEach((paper) =>
          hasStoredEmbedding(paper.doi, sql).pipe(
            Effect.map((hasEmbedding) => ({ paper, hasEmbedding })),
          ),
        ),
      );

      const papersWithoutEmbeddings = papersWithExistingEmbeddings.flatMap(
        ({ paper, hasEmbedding }) => (!hasEmbedding ? [paper] : []),
      );

      const generated: ReadonlyArray<Paper & { embedding: Embedding }> =
        papersWithoutEmbeddings.length > 0
          ? yield* generateEmbeddings(papersWithoutEmbeddings, apiKey, httpClient).pipe(
              Effect.catchTag(
                "UnableToGetSurveyPapers",
                ({ cause }) => new UnableToAddPreprints({ cause }),
              ),
            )
          : [];

      const generatedWithLanguage = yield* pipe(
        generated,
        Effect.forEach((w) =>
          detectLanguage(w.title).pipe(Effect.map((language) => ({ ...w, language }))),
        ),
        Effect.catchTag(
          "UnableToDetectLanguage",
          ({ cause }) => new UnableToAddPreprints({ cause }),
        ),
      );

      yield* Effect.forEach(generatedWithLanguage, (p) =>
        storeEmbedding(p.doi, p.language, p.embedding, sql),
      );
    });
