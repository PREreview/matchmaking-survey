import { Effect, pipe, Redacted, Schema } from "effect";
import { PgVector, UnableToAddPreprints, type Doi, type Embedding, type Paper } from "./Shared";
import type { SqlClient } from "@effect/sql";
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
      VALUES (${doi}, ${encoded}::vector)
    `;
  }).pipe(Effect.mapError((cause) => new UnableToAddPreprints({ cause })));

export const getRelatedDois =
  (limit: number, sql: SqlClient.SqlClient) =>
  (mean: Embedding): Effect.Effect<ReadonlyArray<Doi>, UnableToAddPreprints> =>
    Effect.gen(function* () {
      const encoded = Schema.encodeSync(PgVector)(mean);
      const rows = yield* sql`
      SELECT doi FROM preprints
      ORDER BY embedding <=> ${encoded}::vector
      LIMIT ${limit}
    `;
      return rows.map((row) => (row as unknown as { doi: string }).doi as Doi);
    }).pipe(Effect.mapError((cause) => new UnableToAddPreprints({ cause })));

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
