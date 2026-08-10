import { HttpClient } from "@effect/platform";
import { Array, Config, Context, Effect, Layer, pipe } from "effect";
import { UnableToGetSurveyPapers, UnableToAddPreprints, type Doi, type Paper } from "./Shared";
import {
  dropThenCreateResearchAreaWorks,
  getEmbeddingsGeneratingAsNeeded,
} from "./ResearchAreaWorks";
import { createMissingEmbeddings, dropThenCreatePreprintsTable, getRelatedDois } from "./Preprints";
import { PgClient } from "@effect/sql-pg";
import { calcFloat32ArrayMean } from "../../Float32Array";

export class EmbeddingsClient extends Context.Tag("EmbeddingsClient")<
  EmbeddingsClient,
  PgClient.PgClient
>() {
  static readonly layer = Layer.effect(
    this,
    Effect.gen(function* () {
      const sql = yield* PgClient.PgClient;

      yield* sql`CREATE EXTENSION IF NOT EXISTS vector`;

      return sql;
    }),
  );
}

export class Embeddings extends Context.Tag("Embeddings")<
  Embeddings,
  {
    getSurveyPapers: (
      input: Array.NonEmptyReadonlyArray<Paper>,
    ) => Effect.Effect<Array.NonEmptyReadonlyArray<Doi>, UnableToGetSurveyPapers>;
    addPreprints: (input: ReadonlyArray<Paper>) => Effect.Effect<void, UnableToAddPreprints>;
  }
>() {}

const getTopMidRandom = (candidates: ReadonlyArray<Doi>): ReadonlyArray<Doi> => {
  const top7 = candidates.slice(0, 7);

  const mid4 = candidates
    .slice(20, 30)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  const topAndMidDois = new Set([...top7, ...mid4]);
  const random4 = candidates
    .slice(7)
    .filter((doi) => !topAndMidDois.has(doi))
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return [...top7, ...mid4, ...random4];
};

export const embeddingsLayer = Layer.effect(
  Embeddings,
  Effect.gen(function* () {
    const sql = yield* EmbeddingsClient;
    const httpClient = yield* HttpClient.HttpClient;
    const apiKey = yield* Config.redacted("OPENROUTER_API_KEY");

    yield* Effect.all([dropThenCreatePreprintsTable(sql), dropThenCreateResearchAreaWorks(sql)], {
      concurrency: "inherit",
    });

    return {
      getSurveyPapers: Effect.fnUntraced(function* (inputPapers) {
        const result = yield* pipe(
          inputPapers,
          getEmbeddingsGeneratingAsNeeded(apiKey, httpClient, sql),
          Effect.andThen(calcFloat32ArrayMean),
          Effect.andThen(getRelatedDois(500, sql)),
          Effect.catchTag(
            "UnableToAddPreprints",
            ({ cause }) => new UnableToGetSurveyPapers({ cause }),
          ),
          Effect.andThen(getTopMidRandom),
        );

        if (!Array.isNonEmptyReadonlyArray(result)) {
          return yield* new UnableToGetSurveyPapers({
            cause: "no candidates found",
          });
        }

        return result;
      }),
      addPreprints: createMissingEmbeddings(apiKey, httpClient, sql),
    };
  }),
);
