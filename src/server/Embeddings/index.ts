import { HttpClient } from "@effect/platform";
import { SqlClient } from "@effect/sql";
import { Array, Config, Context, Effect, Layer, pipe } from "effect";
import {
  UnableToGetSurveyPapers,
  UnableToAddPreprints,
  type Doi,
  type Embedding,
  type Paper,
} from "./Shared";
import { getEmbeddingsGeneratingAsNeeded } from "./ResearchAreaWorks";
import { getRelatedDois } from "./Preprints";

export class Embeddings extends Context.Tag("Embeddings")<
  Embeddings,
  {
    getSurveyPapers: (
      input: Array.NonEmptyReadonlyArray<Paper>,
    ) => Effect.Effect<Array.NonEmptyReadonlyArray<Doi>, UnableToGetSurveyPapers>;
    addPreprints: (input: ReadonlyArray<Paper>) => Effect.Effect<void, UnableToAddPreprints>;
  }
>() {}

const calcMean = (embeddings: ReadonlyArray<Embedding>): Embedding => {
  const len = embeddings[0].length;
  const sum = new Float32Array(len);
  for (const emb of embeddings) {
    for (let i = 0; i < len; i++) {
      sum[i] += emb[i];
    }
  }
  for (let i = 0; i < len; i++) {
    sum[i] /= embeddings.length;
  }
  return sum;
};

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
    const sql = yield* SqlClient.SqlClient;
    const httpClient = yield* HttpClient.HttpClient;
    const apiKey = yield* Config.redacted("OPENROUTER_API_KEY");

    return {
      getSurveyPapers: Effect.fnUntraced(function* (inputPapers) {
        const result = yield* pipe(
          inputPapers,
          getEmbeddingsGeneratingAsNeeded(apiKey, httpClient, sql),
          Effect.andThen(calcMean),
          Effect.andThen(getRelatedDois(500, sql)),
          Effect.andThen(getTopMidRandom),
        );

        if (!Array.isNonEmptyReadonlyArray(result)) {
          return yield* new UnableToGetSurveyPapers({
            cause: "no candidates found",
          });
        }

        return result;
      }),
      addPreprints: () => new UnableToAddPreprints({ cause: "not implemented" }),
    };
  }),
);
