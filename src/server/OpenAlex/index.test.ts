import { HttpClient, HttpClientResponse, UrlParams } from "@effect/platform";
import { Array, ConfigProvider, Effect, Layer } from "effect";
import { describe, expect, it } from "vitest";
import { OpenAlex, openAlexLayer } from "./index.js";

const makeOpenAlexLayer = (body: unknown) => {
  let capturedUrl = "";
  let capturedParams: URLSearchParams | null = null;

  const client = HttpClient.make((request) => {
    capturedUrl = request.url;
    capturedParams = new URLSearchParams(UrlParams.toString(request.urlParams));
    const webResponse = new Response(JSON.stringify(body), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
    return Effect.succeed(HttpClientResponse.fromWeb(request, webResponse));
  });

  const layer = Layer.provide(openAlexLayer, Layer.succeed(HttpClient.HttpClient, client));

  return { layer, getCaptured: () => ({ url: capturedUrl, params: capturedParams }) };
};

const runGetWorks = (dois: Array.NonEmptyReadonlyArray<string>, body: unknown) => {
  const { layer, getCaptured } = makeOpenAlexLayer(body);
  const effect = Effect.gen(function* () {
    const openAlex = yield* OpenAlex;
    return yield* openAlex.getWorks(dois);
  });
  return {
    run: () =>
      Effect.runPromise(
        effect.pipe(
          Effect.provide(layer),
          Effect.withConfigProvider(
            ConfigProvider.fromMap(new Map([["OPENALEX_API_KEY", "test-key"]])),
          ),
        ),
      ),
    getCaptured,
  };
};

const validWork = {
  doi: "https://doi.org/10.1234/abc",
  title: "A Study of Things",
  abstract_inverted_index: { study: [0], things: [1, 2] },
  authorships: [{ author: { orcid: "https://orcid.org/0000-0001-1111-1111" } }],
};

const worksBody = (results: unknown[]) => ({ results });

describe("getWorks", () => {
  it("decodes works, reconstructing the abstract and ORCIDs", async () => {
    const { run } = runGetWorks(["10.1234/abc"], worksBody([validWork]));

    const works = await run();

    expect(works).toEqual([
      {
        doi: "10.1234/abc",
        title: "A Study of Things",
        abstract: "study things things",
        authors: ["0000-0001-1111-1111"],
      },
    ]);
  });

  it("returns an empty array rather than failing when no work has a title and abstract", async () => {
    const { run } = runGetWorks(
      ["10.1/x"],
      worksBody([
        {
          doi: "https://doi.org/10.1/x",
          title: null,
          abstract_inverted_index: null,
          authorships: [],
        },
      ]),
    );

    const works = await run();

    expect(works).toEqual([]);
  });

  it("returns an empty array when OpenAlex returns no results", async () => {
    const { run } = runGetWorks(["10.1/y"], worksBody([]));

    const works = await run();

    expect(works).toEqual([]);
  });

  it("queries OpenAlex with lowercased DOIs and a per-page size matching the input", async () => {
    const { run, getCaptured } = runGetWorks(["10.1234/ABC", "10.1234/def"], worksBody([]));

    await run();

    const { url, params } = getCaptured();
    expect(url).toContain("https://api.openalex.org/works");
    expect(params?.get("filter")).toBe("doi:10.1234/abc|10.1234/def");
    expect(params?.get("per-page")).toBe("2");
  });
});
