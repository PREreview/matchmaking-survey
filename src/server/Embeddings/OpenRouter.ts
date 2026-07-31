import { HttpClientRequest, HttpClientResponse, type HttpClient } from "@effect/platform";
import { Array, Effect, pipe, Redacted, Schema } from "effect";
import { UnableToGetSurveyPapers, type Embedding, type Paper } from "./Shared";

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

export const generateEmbeddings = (
  papers: ReadonlyArray<Paper>,
  apiKey: Redacted.Redacted,
  httpClient: HttpClient.HttpClient,
): Effect.Effect<ReadonlyArray<Paper & { embedding: Embedding }>, UnableToGetSurveyPapers> =>
  Effect.gen(function* () {
    const inputGroups = pipe(papers, Array.chunksOf(50));

    return yield* Effect.forEach(
      inputGroups,
      Effect.fnUntraced(function* (papers) {
        const request = yield* pipe(
          HttpClientRequest.post("https://openrouter.ai/api/v1/embeddings"),
          HttpClientRequest.bearerToken(apiKey),
          HttpClientRequest.bodyJson({
            model: "thenlper/gte-large",
            input: Array.map(papers, (paper) => `${paper.title}\n\n${paper.abstract}`)
          }),
        );

        const response = yield* httpClient.execute(request);
        yield* HttpClientResponse.filterStatusOk(response);

        const parsed = yield* HttpClientResponse.schemaBodyJson(EmbeddingResponse)(response);

        return parsed.data.map((item) => ({
          ...papers[item.index],
          embedding: new Float32Array(item.embedding),
        }));
      }),
    ).pipe(Effect.andThen(Array.flatten));
  }).pipe(Effect.mapError((cause) => new UnableToGetSurveyPapers({ cause })));
