import { HttpClient } from "@effect/platform";
import { Array, Chunk, Config, Context, Effect, Layer, Option, pipe, Random, Struct } from "effect";
import {
  UnableToGetSurveyPapers,
  UnableToAddPreprints,
  type Doi,
  type Paper,
  Tokenizer,
} from "./Shared";
import { ensureResearchAreaWorksTable, getEmbeddingsGeneratingAsNeeded } from "./ResearchAreaWorks";
import {
  createMissingEmbeddings,
  ensurePreprintsTable,
  findExistingDois,
  getRelatedDois,
} from "./Preprints";
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

type SurveyPick = {
  doi: Doi;
  distance: number;
};

export class Embeddings extends Context.Tag("Embeddings")<
  Embeddings,
  {
    getSurveyPapers: (
      input: Array.NonEmptyReadonlyArray<Paper>,
      inputOrcidId: string,
      languages: Array.NonEmptyReadonlyArray<LanguageCode>,
    ) => Effect.Effect<Array.NonEmptyReadonlyArray<SurveyPick>, UnableToGetSurveyPapers>;
    addPreprints: (input: ReadonlyArray<Paper>) => Effect.Effect<void, UnableToAddPreprints>;
    existingDois: (input: ReadonlyArray<Doi>) => Effect.Effect<Set<Doi>, UnableToAddPreprints>;
  }
>() {}

const DEPTH_WINDOWS: ReadonlyArray<readonly [number, number]> = [
  [7, 17],
  [17, 39],
  [39, 88],
  [88, 199],
  [199, 446],
  [446, 999],
  [999, 2235],
  [2235, 5000],
];

const sampleOne = <A>(items: ReadonlyArray<A>): Effect.Effect<Option.Option<A>> =>
  pipe(Random.shuffle(items), Effect.map(Chunk.head));

export const pickSurveyPapers = Effect.fnUntraced(function* (
  candidates: ReadonlyArray<{ doi: Doi; distance: number }>,
) {
  const top7 = candidates.slice(0, 7);

  const depthPicks = yield* pipe(
    DEPTH_WINDOWS,
    Effect.forEach(([start, end]) => sampleOne(candidates.slice(start, end))),
    Effect.map(Array.getSomes),
  );

  yield* Effect.logInfo("Selected survey papers").pipe(
    Effect.annotateLogs({
      candidates: candidates.length,
      top: top7.length,
      depth: depthPicks.length,
    }),
  );

  return [...top7, ...depthPicks];
});

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
              5000,
              sql,
              languages,
              inputOrcidId,
              Array.map(inputPapers, Struct.get("doi")),
            ),
          ),
          Effect.catchTag("UnableToQuery", ({ cause }) => new UnableToGetSurveyPapers({ cause })),
          Effect.andThen(pickSurveyPapers),
        );

        if (!Array.isNonEmptyReadonlyArray(result)) {
          return yield* new UnableToGetSurveyPapers({
            cause: "no candidates found",
          });
        }

        return result;
      }),
      addPreprints: createMissingEmbeddings(apiKey, httpClient, sql, tokenizer),
      existingDois: (dois) => findExistingDois(dois, sql),
    };
  }),
);
