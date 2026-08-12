import { Context, Data, Schema, Tuple } from "effect";
import { Float32ArraySchema } from "../../Float32Array";
import { Tokenizer as HuggingFaceTokenizer } from "@huggingface/tokenizers";

export class UnableToGetSurveyPapers extends Data.TaggedError("UnableToGetSurveyPapers")<{
  cause?: unknown;
}> {}

export class UnableToAddPreprints extends Data.TaggedError("UnableToAddPreprints")<{
  cause?: unknown;
}> {}

export class UnableToDetectLanguage extends Data.TaggedError("UnableToDetectLanguage")<{
  cause?: unknown;
}> {}

export class UnableToQuery extends Schema.TaggedError<UnableToQuery>()("UnableToQuery", {
  cause: Schema.optional(Schema.Defect),
}) {}

export type Doi = string;

export type OrcidId = string;

export type Paper = { doi: Doi; title: string; abstract: string; authors: ReadonlyArray<OrcidId> };

export class Tokenizer extends Context.Tag("Tokenizer")<Tokenizer, HuggingFaceTokenizer>() {}

export const PgVector = Schema.transform(
  Schema.TemplateLiteralParser(
    "[",
    Schema.compose(Schema.split(","), Schema.Array(Schema.NumberFromString)),
    "]",
  ),
  Float32ArraySchema,
  {
    strict: true,
    decode: Tuple.at(1),
    encode: (dimensions) => ["[", dimensions, "]"] as const,
  },
);

export type Embedding = Schema.Schema.Type<typeof PgVector>;
