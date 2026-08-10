import { HttpClientRequest, HttpClientResponse, type HttpClient } from "@effect/platform";
import { Array, Effect, pipe, Redacted, Schema } from "effect";
import { UnableToGetSurveyPapers, type Embedding, type Paper } from "./Shared";
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
            input: Array.map(papers, (paper) =>
              truncateToModelLimit(`${paper.title}\n\n${paper.abstract}`, 512),
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
  }).pipe(Effect.mapError((cause) => new UnableToGetSurveyPapers({ cause })));

// Conservative local token estimate (no external tokenizer):
// Using 3 chars/token is stricter than the common ~4 chars/token rule of thumb.
const estimateTokens = (text: string): number => Math.ceil(text.length / 3);

const truncateToModelLimit = (text: string, maxTokens: number): string => {
  if (estimateTokens(text) <= maxTokens) return text;

  // Binary search longest prefix within estimated token budget
  let lo = 0;
  let hi = text.length;

  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    const candidate = text.slice(0, mid);
    if (estimateTokens(candidate) <= maxTokens) lo = mid;
    else hi = mid - 1;
  }

  // Trim to a word boundary when possible
  const cut = text.slice(0, lo);
  const boundary = cut.lastIndexOf(" ");
  return (boundary > 0 ? cut.slice(0, boundary) : cut).trimEnd();
};
