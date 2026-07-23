import { Array, Context, Data, Effect, Layer } from "effect";

export class UnableToGetSurveyPapers extends Data.TaggedError("UnableToGetSurveyPapers")<{
  cause?: unknown;
}> {}

type Doi = string;

export class Embeddings extends Context.Tag("Embeddings")<
  Embeddings,
  {
    getSurveyPapers: (
      input: Array.NonEmptyReadonlyArray<{ doi: Doi; title: string; abstract: string }>,
    ) => Effect.Effect<Array.NonEmptyReadonlyArray<Doi>, UnableToGetSurveyPapers>;
  }
>() {}

export const embeddingsLayer = Layer.succeed(Embeddings, {
  getSurveyPapers: () => new UnableToGetSurveyPapers({ cause: "not implemented" }),
});
