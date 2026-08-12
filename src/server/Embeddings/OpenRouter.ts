import { HttpClientRequest, HttpClientResponse, type HttpClient } from "@effect/platform";
import { Array, Effect, pipe, Redacted, Schema } from "effect";
import { UnableToGetSurveyPapers, Tokenizer, type Embedding, type Paper } from "./Shared";
import { Float32ArraySchema } from "../../Float32Array";

const EmbeddingResponse = Schema.Struct({
  data: Schema.Array(
    Schema.Struct({
      embedding: Float32ArraySchema,
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
  tokenizer: typeof Tokenizer.Service,
): Effect.Effect<ReadonlyArray<Paper & { embedding: Embedding }>, UnableToGetSurveyPapers> =>
  Effect.gen(function* () {
    const inputGroups = pipe(papers, Array.chunksOf(200));

    return yield* Effect.forEach(
      inputGroups,
      Effect.fnUntraced(function* (papers) {
        const request = yield* pipe(
          HttpClientRequest.post("https://openrouter.ai/api/v1/embeddings"),
          HttpClientRequest.bearerToken(apiKey),
          HttpClientRequest.bodyJson({
            model: "thenlper/gte-large",
            input: papers.map((paper) =>
              truncateToModelLimit(`${paper.title}\n\n${paper.abstract}`, 512, tokenizer),
            ),
          }),
        );

        const response = yield* httpClient.execute(request);
        yield* HttpClientResponse.filterStatusOk(response);

        const parsed = yield* HttpClientResponse.schemaBodyJson(EmbeddingResponse)(response);

        return parsed.data.map((item) => ({
          ...papers[item.index],
          embedding: item.embedding,
        }));
      }),
    ).pipe(Effect.andThen(Array.flatten));
  }).pipe(
    Effect.tapError(
      Effect.fnUntraced(function* (error) {
        yield* Effect.annotateLogsScoped({ error });

        if (error._tag === "ResponseError" && error.reason === "StatusCode") {
          yield* Effect.ignore(
            Effect.andThen(error.response.json, (responseBody) =>
              Effect.annotateLogsScoped({ responseBody }),
            ),
          );
        }

        yield* Effect.logError("Failed to generate embeddings");
      }, Effect.scoped),
    ),
    Effect.mapError((cause) => new UnableToGetSurveyPapers({ cause })),
  );

const truncateToModelLimit = (
  text: string,
  maxTokens: number,
  tokenizer: typeof Tokenizer.Service,
  reservedTokens = 2,
): string => {
  const tokens = tokenizer.encode(text).ids;
  const usableTokens = Math.max(0, maxTokens - reservedTokens);
  const truncatedTokens = Array.take(tokens, usableTokens);

  return tokenizer.decode(truncatedTokens);
};
