import { Effect, pipe, Redacted, Schema } from "effect";
import { PgVector, UnableToAddPreprints, type Doi, type Embedding, type Paper } from "./Shared";
import type { SqlClient, SqlError } from "@effect/sql";
import type { HttpClient } from "@effect/platform";
import { generateEmbeddings } from "./OpenRouter";

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
  embedding: Embedding,
  sql: SqlClient.SqlClient,
): Effect.Effect<void, UnableToAddPreprints> =>
  Effect.gen(function* () {
    const encoded = Schema.encodeSync(PgVector)(embedding);
    yield* sql`
      INSERT INTO preprints (doi, embedding)
      VALUES (${doi}, ${encoded}::halfvec)
    `;
  }).pipe(Effect.mapError((cause) => new UnableToAddPreprints({ cause })));

export const dropThenCreatePreprintsTable = (
  sql: SqlClient.SqlClient,
): Effect.Effect<void, SqlError.SqlError> =>
  sql`
    DROP TABLE IF EXISTS preprints;
    CREATE TABLE preprints (
      doi VARCHAR PRIMARY KEY,
      embedding HALFVEC(1024)
    );
    CREATE INDEX ON preprints USING hnsw (embedding halfvec_cosine_ops)
  `;

export const getRelatedDois =
  (limit: number, sql: SqlClient.SqlClient) =>
  (mean: Embedding): Effect.Effect<ReadonlyArray<Doi>, UnableToAddPreprints> =>
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
            ORDER BY embedding <=> ${encoded}::halfvec
            LIMIT ${limit}
          `;
        }),
      )
      .pipe(
        Effect.map((rows) => rows.map((row) => (row as unknown as { doi: string }).doi as Doi)),
        Effect.mapError((cause) => new UnableToAddPreprints({ cause })),
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

      yield* Effect.forEach(generated, (p) => storeEmbedding(p.doi, p.embedding, sql));
    });
