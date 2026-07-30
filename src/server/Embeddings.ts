import { Array, Context, Data, Effect, Layer } from "effect";

export class UnableToGetSurveyPapers extends Data.TaggedError(
  "UnableToGetSurveyPapers",
)<{
  cause?: unknown;
}> {}

type Doi = string;

export class Embeddings extends Context.Tag("Embeddings")<
  Embeddings,
  {
    getSurveyPapers: (
      input: Array.NonEmptyReadonlyArray<Paper>,
    ) => Effect.Effect<
      Array.NonEmptyReadonlyArray<Doi>,
      UnableToGetSurveyPapers
    >;
  }
>() {}

type Paper = { doi: Doi; title: string; abstract: string };

type Embedding = Float32Array;

// oxlint-disable-next-line no-unused-vars
const getEmbedding = (
  // oxlint-disable-next-line no-unused-vars
  paper: Paper,
): Effect.Effect<Embedding, UnableToGetSurveyPapers> => {
  return new UnableToGetSurveyPapers({ cause: "not implemented" });
};

export const embeddingsLayer = Layer.succeed(Embeddings, {
  // oxlint-disable-next-line no-unused-vars
  getSurveyPapers: Effect.fnUntraced(function* (input) {
    // dependencies: postgres, openrouter

    // get embedding for each paper (generating where needed)
    // derive mean
    // get top 500
    // return 7 top, 4 mid and 4 random

    return yield* new UnableToGetSurveyPapers({ cause: "not implemented" });
  }),
});
