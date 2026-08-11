import {
  FileSystem,
  HttpClient,
  type HttpClientError,
  HttpClientRequest,
  HttpClientResponse,
  UrlParams,
} from "@effect/platform";
import { NodeFileSystem, NodeHttpClient, NodeRuntime } from "@effect/platform-node";
import {
  Chunk,
  Effect,
  flow,
  Array,
  Layer,
  Logger,
  LogLevel,
  Order,
  ParseResult,
  pipe,
  Record,
  Schema,
  Stream,
  Tuple,
} from "effect";
import path from "path";

const ListResponse = <A, I, R>(resultSchema: Schema.Schema<A, I, R>) =>
  Schema.Struct({
    meta: Schema.Struct({
      next_cursor: Schema.optionalWith(Schema.String, { as: "Option", nullable: true }),
    }),
    results: Schema.Chunk(resultSchema),
  });

type Doi = string;

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
});

const DoiFromWorkSchema = Schema.transform(WorkSchema, Schema.NonEmptyString, {
  strict: true,
  decode: (work) => work.doi,
  encode: (doi) => ({ doi }),
});

const GetWorkDois = (
  query: UrlParams.Input,
): Effect.Effect<
  Chunk.Chunk<Doi>,
  HttpClientError.HttpClientError | ParseResult.ParseError,
  HttpClient.HttpClient
> =>
  pipe(
    Stream.paginateChunkEffect(
      "*",
      flow(
        (cursor) =>
          HttpClient.get("https://api.openalex.org/works", {
            urlParams: UrlParams.setAll(UrlParams.fromInput(query), {
              select: "doi",
              "per-page": 200,
              cursor,
            }),
          }),
        Effect.andThen(HttpClientResponse.schemaBodyJson(ListResponse(DoiFromWorkSchema))),
        Effect.scoped,
        Effect.andThen((response) => [response.results, response.meta.next_cursor]),
      ),
    ),
    Stream.runCollect,
    Effect.andThen(Chunk.sort(Order.string)),
  );

const WriteToFile = (filePath: string) => (content: string) =>
  Effect.andThen(FileSystem.FileSystem, (fileSystem) =>
    fileSystem.writeFileString(path.resolve(import.meta.dirname, "..", filePath), content),
  );

const DoisToFile = (name: string) =>
  flow(Chunk.join("\n"), WriteToFile(`data/preprint-dois-${name}.txt`));

const PreprintGroups = {
  metaarxiv: ["doi_starts_with:10.31222/osf.io/", "from_publication_date:2026-01-01"],
} satisfies Record.ReadonlyRecord<string, Array.NonEmptyReadonlyArray<string>>;

const Program = Effect.gen(function* () {
  yield* Effect.forEach(Record.toEntries(PreprintGroups), ([name, filter]) =>
    pipe(
      GetWorkDois({ filter: Array.join([...filter, "has_abstract:true", "type:preprint"], ",") }),
      Effect.andThen(DoisToFile(name)),
    ),
  );
});

pipe(
  Program,
  Effect.provide(
    pipe(
      Layer.effect(
        HttpClient.HttpClient,
        Effect.andThen(
          HttpClient.HttpClient,
          flow(
            HttpClient.mapRequest(
              HttpClientRequest.setHeaders({
                "User-Agent":
                  "PREreview (https://prereview.org/; mailto:engineering@prereview.org)",
              }),
            ),
            HttpClient.tapRequest((request) =>
              Effect.logDebug("Sending HTTP request").pipe(
                Effect.annotateLogs({
                  url: `${request.url}?${UrlParams.toString(request.urlParams)}`,
                  method: request.method,
                }),
              ),
            ),
          ),
        ),
      ),
      Layer.provideMerge(Layer.mergeAll(NodeHttpClient.layer, NodeFileSystem.layer)),
      Layer.provideMerge(Logger.pretty),
    ),
  ),
  Logger.withMinimumLogLevel(LogLevel.Debug),
  NodeRuntime.runMain({ disablePrettyLogger: true }),
);
