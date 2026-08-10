import { Schema } from "effect";

export const Float32ArrayFromSelfSchema = Schema.declare(
  (input): input is Float32Array => input instanceof Float32Array,
  {
    identifier: "Float32Array",
  },
);

export const Float32ArraySchema = Schema.transform(
  Schema.Array(Schema.Number),
  Float32ArrayFromSelfSchema,
  {
    strict: true,
    decode: (elements) => new Float32Array(elements),
    encode: (array) => [...array],
  },
);
