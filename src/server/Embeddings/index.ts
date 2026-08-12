import { HttpClient } from "@effect/platform";
import { Array, Config, Context, Effect, Layer, pipe, Struct } from "effect";
import {
  UnableToGetSurveyPapers,
  UnableToAddPreprints,
  type Doi,
  type Paper,
  Tokenizer,
} from "./Shared";
import { ensureResearchAreaWorksTable, getEmbeddingsGeneratingAsNeeded } from "./ResearchAreaWorks";
import { createMissingEmbeddings, ensurePreprintsTable, getRelatedDois } from "./Preprints";
import { PgClient } from "@effect/sql-pg";
import { calcFloat32ArrayMean } from "../../Float32Array";
import type { LanguageCode } from "iso-639-1";

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
      inputOrcidId: string,
      languages: Array.NonEmptyReadonlyArray<LanguageCode>,
    ) => Effect.Effect<
      Array.NonEmptyReadonlyArray<{ doi: Doi; distance: number }>,
      UnableToGetSurveyPapers
    >;
    addPreprints: (input: ReadonlyArray<Paper>) => Effect.Effect<void, UnableToAddPreprints>;
  }
>() {}

const getTopMidRandom = (
  candidates: ReadonlyArray<{ doi: Doi; distance: number }>,
): ReadonlyArray<{ doi: Doi; distance: number }> => {
  const top7 = candidates.slice(0, 7);

  const mid4 = candidates
    .slice(20, 30)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  const topAndMidDois = new Set(Array.map([...top7, ...mid4], Struct.get("doi")));
  const random4 = candidates
    .slice(7)
    .filter(({ doi }) => !topAndMidDois.has(doi))
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
    const tokenizer = yield* Tokenizer;

    yield* Effect.all([ensurePreprintsTable(sql), ensureResearchAreaWorksTable(sql)], {
      concurrency: "inherit",
    });

    return {
      getSurveyPapers: Effect.fnUntraced(function* (inputPapers, inputOrcidId, languages) {
        const result = yield* pipe(
          inputPapers,
          getEmbeddingsGeneratingAsNeeded(apiKey, httpClient, sql, tokenizer),
          Effect.andThen(calcFloat32ArrayMean),
          Effect.andThen(
            getRelatedDois(
              500,
              sql,
              languages,
              inputOrcidId,
              Array.map(inputPapers, Struct.get("doi")),
            ),
          ),
          Effect.catchTag("UnableToQuery", ({ cause }) => new UnableToGetSurveyPapers({ cause })),
          Effect.andThen(getTopMidRandom),
        );

        if (!Array.isNonEmptyReadonlyArray(result)) {
          return yield* new UnableToGetSurveyPapers({
            cause: "no candidates found",
          });
        }

        return result;
      }),
      addPreprints: createMissingEmbeddings(apiKey, httpClient, sql, tokenizer),
    };
  }),
);
