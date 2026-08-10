import { Data, pipe, Schema } from "effect";
import { Float32ArraySchema } from "../../Float32Array";

export class UnableToGetSurveyPapers extends Data.TaggedError("UnableToGetSurveyPapers")<{
  cause?: unknown;
}> {}

export class UnableToAddPreprints extends Data.TaggedError("UnableToAddPreprints")<{
  cause?: unknown;
}> {}

export class UnableToDetectLanguage extends Data.TaggedError("UnableToDetectLanguage")<{
  cause?: unknown;
}> {}

export type Doi = string;

export type Paper = { doi: Doi; title: string; abstract: string };

export const PgVector = Schema.transform(
  Schema.String,
  pipe(
    Schema.split(","),
    Schema.compose(Schema.Array(Schema.NumberFromString)),
    Schema.compose(Float32ArraySchema),
  ),
  {
    strict: true,
    decode: (raw) => raw.slice(1, -1),
    encode: (dimensions) => `[${dimensions}]`,
  },
);

export type Embedding = Schema.Schema.Type<typeof PgVector>;
