import { Array, Context, Data, Effect, Layer } from "effect";

export class UnableToGetWorks extends Data.TaggedError("UnableToGetWorks")<{
  cause?: unknown;
}> {}

type Doi = string;

type Work = {
  doi: Doi;
  title: string;
  abstract: string;
};

export class OpenAlex extends Context.Tag("OpenAlex")<
  OpenAlex,
  {
    getWorks: (
      input: Array.NonEmptyReadonlyArray<Doi>,
    ) => Effect.Effect<Array.NonEmptyReadonlyArray<Work>, UnableToGetWorks>;
  }
>() {}

export const openAlexLayer = Layer.succeed(OpenAlex, {
  getWorks: () => new UnableToGetWorks({ cause: "not implemented" }),
});
