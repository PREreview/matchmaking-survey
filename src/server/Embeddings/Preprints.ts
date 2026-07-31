import { Effect, Schema } from "effect";
import { PgVector, UnableToGetSurveyPapers, type Doi, type Embedding } from "./Shared";
import type { SqlClient } from "@effect/sql";

export const getRelatedDois =
  (limit: number, sql: SqlClient.SqlClient) =>
  (mean: Embedding): Effect.Effect<ReadonlyArray<Doi>, UnableToGetSurveyPapers> =>
    Effect.gen(function* () {
      const encoded = Schema.encodeSync(PgVector)(mean);
      const rows = yield* sql`
      SELECT doi FROM documents
      ORDER BY embedding <=> ${encoded}::vector
      LIMIT ${limit}
    `;
      return rows.map((row) => (row as unknown as { doi: string }).doi as Doi);
    }).pipe(Effect.mapError((cause) => new UnableToGetSurveyPapers({ cause })));
