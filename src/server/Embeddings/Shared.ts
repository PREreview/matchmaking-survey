import { Data, Schema } from "effect";

export class UnableToGetSurveyPapers extends Data.TaggedError("UnableToGetSurveyPapers")<{
  cause?: unknown;
}> {}

export class UnableToAddPreprints extends Data.TaggedError("UnableToAddPreprints")<{
  cause?: unknown;
}> {}

export type Doi = string;

export type Paper = { doi: Doi; title: string; abstract: string };

export const PgVector = Schema.transform(
  Schema.String,
  Schema.declare((u): u is Float32Array => u instanceof Float32Array, {
    identifier: "Float32Array",
    description: "A Float32Array of embedding dimensions",
  }),
  {
    decode: (raw: string): Float32Array =>
      new Float32Array(raw.slice(1, -1).split(",").map(Number)),
    encode: (arr: Float32Array): string => `[${[...arr].join(",")}]`,
  },
);

export type Embedding = Schema.Schema.Type<typeof PgVector>;
