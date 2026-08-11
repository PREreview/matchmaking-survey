import { HttpClient, HttpClientRequest, HttpClientResponse } from "@effect/platform";
import {
  Array,
  Config,
  Number,
  Context,
  Data,
  Effect,
  flow,
  Layer,
  ParseResult,
  pipe,
  Record,
  Redacted,
  Schema,
  Struct,
  Tuple,
  Option,
} from "effect";

export class UnableToGetWorks extends Data.TaggedError("UnableToGetWorks")<{
  cause?: unknown;
}> {}

type Doi = string;

type OrcidId = string;

type Work = {
  doi: Doi;
  title: string;
  abstract: string;
  authors: ReadonlyArray<OrcidId>;
};

export class OpenAlex extends Context.Tag("OpenAlex")<
  OpenAlex,
  {
    getWorks: (
      input: Array.NonEmptyReadonlyArray<Doi>,
    ) => Effect.Effect<Array.NonEmptyReadonlyArray<Work>, UnableToGetWorks>;
  }
>() {}

export const openAlexLayer = Layer.effect(
  OpenAlex,
  Effect.gen(function* () {
    const httpClient = yield* HttpClient.HttpClient;
    const apiKey = yield* Config.redacted("OPENALEX_API_KEY");

    return {
      getWorks: getWorks(apiKey, httpClient),
    };
  }),
);

const getWorks = (
  apiKey: Redacted.Redacted,
  httpClient: HttpClient.HttpClient,
): ((
  input: Array.NonEmptyReadonlyArray<Doi>,
) => Effect.Effect<Array.NonEmptyReadonlyArray<Work>, UnableToGetWorks>) =>
  Effect.fnUntraced(
    function* (dois) {
      const doiGroups = Array.chunksOf(dois, 100);

      return yield* Effect.forEach(
        doiGroups,
        Effect.fnUntraced(function* (dois) {
          const request = pipe(
            HttpClientRequest.get("https://api.openalex.org/works"),
            HttpClientRequest.appendUrlParams({
              filter: `doi:${Array.join(
                Array.map(dois, (doi) => doi.toLowerCase()),
                "|",
              )}`,
              "per-page": dois.length.toString(),
            }),
            HttpClientRequest.bearerToken(apiKey),
          );

          const response = yield* httpClient.execute(request);
          yield* HttpClientResponse.filterStatusOk(response);

          const parsed = yield* HttpClientResponse.schemaBodyJson(ListOfWorksSchema)(response);

          return Array.filter(
            parsed.results,
            (work): work is Work =>
              typeof work.title === "string" && work.title !== "" && work.abstract !== null,
          );
        }),
        { concurrency: "inherit" },
      ).pipe(Effect.andThen(Array.flatten));
    },
    Effect.filterOrElse(
      (works) => Array.isNonEmptyReadonlyArray(works),
      () => new UnableToGetWorks({ cause: "no works found" }),
    ),
    Effect.mapError((cause) => new UnableToGetWorks({ cause })),
  );

const WorkSchema = Schema.Struct({
  doi: Schema.transform(
    Schema.TemplateLiteralParser("https://doi.org/", Schema.NonEmptyString),
    Schema.NonEmptyString,
    {
      strict: true,
      decode: Tuple.at(1),
      encode: (doi) => Tuple.make("https://doi.org/" as const, doi),
    },
  ),
  title: Schema.NullOr(Schema.Trim),
  abstract: Schema.propertySignature(
    Schema.NullOr(
      Schema.transformOrFail(
        Schema.Record({
          key: Schema.NonEmptyTrimmedString,
          value: Schema.NonEmptyArray(Schema.Int),
        }),
        Schema.NonEmptyTrimmedString,
        {
          strict: true,
          decode: (invertedAbstract) => ParseResult.succeed(invertAbstract(invertedAbstract)),
          encode: (value, _, ast) =>
            ParseResult.fail(
              new ParseResult.Forbidden(ast, value, "Encoding an abstract is forbidden."),
            ),
        },
      ),
    ),
  ).pipe(Schema.fromKey("abstract_inverted_index")),
  authors: Schema.propertySignature(
    Schema.transform(
      Schema.Array(
        Schema.Struct({
          author: Schema.Struct({
            orcid: Schema.NullOr(
              Schema.transform(
                Schema.TemplateLiteralParser("https://orcid.org/", Schema.NonEmptyString),
                Schema.NonEmptyString,
                {
                  strict: true,
                  decode: Tuple.at(1),
                  encode: (orcidId) => Tuple.make("https://orcid.org/" as const, orcidId),
                },
              ),
            ),
          }),
        }),
      ),
      Schema.Array(Schema.NonEmptyTrimmedString),
      {
        strict: true,
        decode: Array.filterMap((author) => Option.fromNullable(author.author.orcid)),
        encode: Array.map((orcidId) => ({ author: { orcid: orcidId } })),
      },
    ),
  ).pipe(Schema.fromKey("authorships")),
});

const invertAbstract: (abstract: Record<string, Array.NonEmptyReadonlyArray<number>>) => string =
  flow(
    Record.reduce(
      Array.empty<{ word: string; position: number }>(),
      (accumulator, positions, word) =>
        Array.appendAll(
          accumulator,
          Array.map(positions, (position) => ({ word, position })),
        ),
    ),
    Array.sortWith(Struct.get("position"), Number.Order),
    Array.map(Struct.get("word")),
    Array.join(" "),
  );

const ListOfWorksSchema = Schema.Struct({
  results: Schema.Array(WorkSchema),
});
