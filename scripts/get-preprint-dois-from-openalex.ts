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
  String,
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
  MutableHashMap,
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
  doi: Schema.NullOr(
    Schema.transform(
      Schema.TemplateLiteralParser("https://doi.org/", Schema.NonEmptyString),
      Schema.NonEmptyString,
      {
        strict: true,
        decode: Tuple.at(1),
        encode: (doi) => Tuple.make("https://doi.org/" as const, doi),
      },
    ),
  ),
});

const DoiFromWorkSchema = Schema.transform(WorkSchema, Schema.NullOr(Schema.NonEmptyString), {
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
    Stream.filter(String.isString),
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
  // "arxiv-computer-science": [
  //   "locations.source.id:S4306400194",
  //   "from_publication_date:2026-07-01",
  //   "primary_topic.field.id:17",
  // ],
  // "arxiv-engineering": [
  //   "locations.source.id:S4306400194",
  //   "from_publication_date:2026-05-01",
  //   "primary_topic.field.id:22",
  // ],
  // "arxiv-mathematics": [
  //   "locations.source.id:S4306400194",
  //   "from_publication_date:2026-05-01",
  //   "primary_topic.field.id:26",
  // ],
  // "arxiv-physics-astronomy": [
  //   "locations.source.id:S4306400194",
  //   "from_publication_date:2026-06-01",
  //   "primary_topic.field.id:31",
  // ],
  // "arxiv-other": [
  //   "locations.source.id:S4306400194",
  //   "from_publication_date:2026-05-01",
  //   "primary_topic.field.id:!17",
  //   "primary_topic.field.id:!22",
  //   "primary_topic.field.id:!26",
  //   "primary_topic.field.id:!31",
  // ],
  // biorxiv: ["locations.source.id:S4306402567", "from_publication_date:2026-02-01"],
  // chemrxiv: ["locations.source.id:s4393918830", "from_publication_date:2026-01-01"],
  // eartharxiv: ["doi_starts_with:10.31223/", "from_publication_date:2026-01-01"],
  // ecoevorxiv: ["doi_starts_with:10.32942/", "from_publication_date:2026-01-01"],
  // edarxiv: ["doi_starts_with:10.35542/osf.io/", "from_publication_date:2026-01-01"],
  // engrxiv: ["doi_starts_with:10.31224/", "from_publication_date:2026-01-01"],
  // // medrxiv: ["locations.source.id:s3005729997", "from_publication_date:2026-01-01"],
  metaarxiv: ["doi_starts_with:10.31222/osf.io/", "from_publication_date:2026-01-01"],
  // // preprintsorg: ["locations.source.id:s6309402219", "from_publication_date:2026-01-01"],
  // psyarxiv: ["locations.source.id:s4306401687", "from_publication_date:2026-01-01"],
  // psycharchives: ["doi_starts_with:10.23668/psycharchives.", "from_publication_date:2026-01-01"],
  // scielo: ["doi_starts_with:10.1590/scielopreprints.", "from_publication_date:2026-01-01"],
  // socarxiv: ["locations.source.id:s4306401238", "from_publication_date:2026-01-01"],
  // techrxiv: ["doi_starts_with:10.36227/techrxiv.", "from_publication_date:2026-01-01"],
} satisfies Record.ReadonlyRecord<string, Array.NonEmptyReadonlyArray<string>>;

const OnlyUseLatestVersions = (dois: Chunk.Chunk<Doi>): Chunk.Chunk<Doi> => {
  const mapToVersions = Chunk.reduce(dois, MutableHashMap.empty<string, Doi>(), (map, doi) => {
    const [, main] = doi.match(/^([\s\S]+?)([/_.]v[1-9])?$/) as [
      string,
      string,
      string | undefined,
    ];

    return MutableHashMap.set(map, main, doi);
  });

  return Chunk.fromIterable(MutableHashMap.values(mapToVersions));
};

const Program = Effect.gen(function* () {
  yield* Effect.forEach(Record.toEntries(PreprintGroups), ([name, filter]) =>
    pipe(
      GetWorkDois({ filter: Array.join([...filter, "has_abstract:true", "type:preprint"], ",") }),
      Effect.andThen(OnlyUseLatestVersions),
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
