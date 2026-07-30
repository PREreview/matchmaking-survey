import { HttpClientRequest, HttpClientResponse, type HttpClient } from "@effect/platform";
import { SqlClient } from "@effect/sql";
import { Array, Context, Data, Effect, Layer, Option, pipe, Schema } from "effect";

export class UnableToGetSurveyPapers extends Data.TaggedError("UnableToGetSurveyPapers")<{
  cause?: unknown;
}> {}

type Doi = string;

export class Embeddings extends Context.Tag("Embeddings")<
  Embeddings,
  {
    getSurveyPapers: (
      input: Array.NonEmptyReadonlyArray<Paper>,
    ) => Effect.Effect<Array.NonEmptyReadonlyArray<Doi>, UnableToGetSurveyPapers>;
  }
>() {}

type Paper = { doi: Doi; title: string; abstract: string };

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

type Embedding = Schema.Schema.Type<typeof PgVector>;

const EmbeddingRow = Schema.Struct({
  doi: Schema.String,
  embedding: PgVector,
  requestTimestamp: Schema.optional(Schema.DateTimeUtc),
  frontmatterHash: Schema.String,
  language: Schema.String,
});

// oxlint-disable-next-line no-unused-vars
const getStoredEmbedding = (
  doi: Doi,
): Effect.Effect<Option.Option<Embedding>, UnableToGetSurveyPapers, SqlClient.SqlClient> =>
  Effect.gen(function* () {
    const sql = yield* SqlClient.SqlClient;

    const rows = yield* sql`SELECT embedding FROM documents WHERE doi = ${doi}`.pipe(
      Effect.mapError((cause) => new UnableToGetSurveyPapers({ cause })),
    );

    if (rows.length === 0) return Option.none();

    const decoded = yield* Schema.decodeUnknown(EmbeddingRow)(rows[0]);

    return Option.some(decoded.embedding);
  }).pipe(Effect.mapError((cause) => new UnableToGetSurveyPapers({ cause })));

const EmbeddingResponse = Schema.Struct({
  data: Schema.Array(
    Schema.Struct({
      embedding: Schema.Array(Schema.Number),
      index: Schema.Number,
      object: Schema.Literal("embedding"),
    }),
  ),
  model: Schema.String,
  object: Schema.Literal("list"),
  usage: Schema.Struct({
    prompt_tokens: Schema.Number,
    total_tokens: Schema.Number,
  }),
});

// oxlint-disable-next-line no-unused-vars
const generateEmbeddings = (
  papers: ReadonlyArray<Paper>,
  apiKey: string,
  httpClient: HttpClient.HttpClient,
): Effect.Effect<ReadonlyArray<Paper & { embedding: Embedding }>, UnableToGetSurveyPapers> =>
  Effect.gen(function* () {
    const input = pipe(
      papers,
      Array.map((paper) => `${paper.title}\n\n${paper.abstract}`),
    );

    const request = yield* pipe(
      HttpClientRequest.post("https://openrouter.ai/api/v1/embeddings"),
      HttpClientRequest.setHeader("Authorization", `Bearer ${apiKey}`),
      HttpClientRequest.bodyJson({ model: "thenlper/gte-large", input }),
    );

    const response = yield* httpClient.execute(request);

    const parsed = yield* HttpClientResponse.schemaBodyJson(EmbeddingResponse)(response);

    return parsed.data.map((item) => ({
      ...papers[item.index],
      embedding: new Float32Array(item.embedding),
    }));
  }).pipe(Effect.mapError((cause) => new UnableToGetSurveyPapers({ cause })));

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
