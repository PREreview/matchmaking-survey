import { HttpClient } from "@effect/platform";
import { SqlClient } from "@effect/sql";
import { Array, Config, Context, Effect, Layer, Option, pipe, Redacted, Schema } from "effect";
import { generateEmbeddings } from "./OpenRouter";
import { PgVector, UnableToGetSurveyPapers, type Doi, type Embedding, type Paper } from "./Shared";

export class Embeddings extends Context.Tag("Embeddings")<
  Embeddings,
  {
    getSurveyPapers: (
      input: Array.NonEmptyReadonlyArray<Paper>,
    ) => Effect.Effect<Array.NonEmptyReadonlyArray<Doi>, UnableToGetSurveyPapers>;
  }
>() {}

const EmbeddingRow = Schema.Struct({
  doi: Schema.String,
  embedding: PgVector,
});

const getStoredEmbedding = (
  doi: Doi,
  sql: SqlClient.SqlClient,
): Effect.Effect<Option.Option<Embedding>, UnableToGetSurveyPapers> =>
  Effect.gen(function* () {
    const rows = yield* sql`SELECT embedding FROM documents WHERE doi = ${doi}`.pipe(
      Effect.mapError((cause) => new UnableToGetSurveyPapers({ cause })),
    );

    if (rows.length === 0) return Option.none();

    const decoded = yield* Schema.decodeUnknown(EmbeddingRow)(rows[0]);

    return Option.some(decoded.embedding);
  }).pipe(Effect.mapError((cause) => new UnableToGetSurveyPapers({ cause })));

const calcMean = (embeddings: ReadonlyArray<Embedding>): Embedding => {
  const len = embeddings[0].length;
  const sum = new Float32Array(len);
  for (const emb of embeddings) {
    for (let i = 0; i < len; i++) {
      sum[i] += emb[i];
    }
  }
  for (let i = 0; i < len; i++) {
    sum[i] /= embeddings.length;
  }
  return sum;
};

const storeEmbedding = (
  doi: Doi,
  embedding: Embedding,
  sql: SqlClient.SqlClient,
): Effect.Effect<void, UnableToGetSurveyPapers> =>
  Effect.gen(function* () {
    const encoded = Schema.encodeSync(PgVector)(embedding);
    yield* sql`
      INSERT INTO documents (doi, embedding)
      VALUES (${doi}, ${encoded}::vector)
    `;
  }).pipe(Effect.mapError((cause) => new UnableToGetSurveyPapers({ cause })));

const getRelatedDois =
  (limit: number, sql: SqlClient.SqlClient) =>
  (mean: Embedding): Effect.Effect<ReadonlyArray<Doi>, UnableToGetSurveyPapers> =>
    Effect.gen(function* () {
      const encoded = Schema.encodeSync(PgVector)(mean);
      const rows = yield* sql`
      SELECT doi FROM documents
      ORDER BY embedding <=> ${encoded}::vector
      LIMIT ${limit}
    `;
      return rows.map((row) => (row as unknown as { doi: string }).doi as Doi);
    }).pipe(Effect.mapError((cause) => new UnableToGetSurveyPapers({ cause })));

const getEmbeddingsGeneratingAsNeeded =
  (apiKey: Redacted.Redacted, httpClient: HttpClient.HttpClient, sql: SqlClient.SqlClient) =>
  (inputPapers: ReadonlyArray<Paper>) =>
    Effect.gen(function* () {
      const papersWithExistingEmbeddings = yield* pipe(
        inputPapers,
        Effect.forEach((paper) =>
          getStoredEmbedding(paper.doi, sql).pipe(
            Effect.map((embedding) => ({ paper, embedding })),
          ),
        ),
      );

      const papersWithoutEmbeddings = papersWithExistingEmbeddings.flatMap(({ paper, embedding }) =>
        Option.isNone(embedding) ? [paper] : [],
      );

      const generated: ReadonlyArray<Paper & { embedding: Embedding }> =
        papersWithoutEmbeddings.length > 0
          ? yield* generateEmbeddings(papersWithoutEmbeddings, apiKey, httpClient)
          : [];

      yield* Effect.forEach(generated, (p) => storeEmbedding(p.doi, p.embedding, sql));

      const generatedByDoi = new Map(generated.map((p) => [p.doi, p.embedding]));
      const allEmbeddings = papersWithExistingEmbeddings.flatMap(({ paper, embedding }) => {
        if (Option.isSome(embedding)) return [embedding.value];
        const e = generatedByDoi.get(paper.doi);
        return e !== undefined ? [e] : [];
      });

      return allEmbeddings;
    });

const getTopMidRandom = (candidates: ReadonlyArray<Doi>): ReadonlyArray<Doi> => {
  const top7 = candidates.slice(0, 7);

  const mid4 = candidates
    .slice(20, 30)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  const topAndMidDois = new Set([...top7, ...mid4]);
  const random4 = candidates
    .slice(7)
    .filter((doi) => !topAndMidDois.has(doi))
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return [...top7, ...mid4, ...random4];
};

export const embeddingsLayer = Layer.effect(
  Embeddings,
  Effect.gen(function* () {
    const sql = yield* SqlClient.SqlClient;
    const httpClient = yield* HttpClient.HttpClient;
    const apiKey = yield* Config.redacted("OPENROUTER_API_KEY");

    return {
      getSurveyPapers: Effect.fnUntraced(function* (inputPapers) {
        const result = yield* pipe(
          inputPapers,
          getEmbeddingsGeneratingAsNeeded(apiKey, httpClient, sql),
          Effect.andThen(calcMean),
          Effect.andThen(getRelatedDois(500, sql)),
          Effect.andThen(getTopMidRandom),
        );

        if (!Array.isNonEmptyReadonlyArray(result)) {
          return yield* new UnableToGetSurveyPapers({
            cause: "no candidates found",
          });
        }

        return result;
      }),
    };
  }),
);
