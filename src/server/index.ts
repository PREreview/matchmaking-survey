import {
  FileSystem,
  HttpMiddleware,
  HttpRouter,
  HttpServer,
  HttpServerRequest,
  HttpServerResponse,
  Multipart,
  UrlParams,
} from "@effect/platform";
import { NodeContext, NodeHttpClient, NodeHttpServer, NodeRuntime } from "@effect/platform-node";
import { Array, Schema, pipe, Effect, Layer, Config, Logger, LogLevel, Exit } from "effect";
import { createServer } from "node:http";
import * as Admin from "./routes/admin.js";
import * as Survey from "./routes/survey.js";
import * as Db from "./db.js";
import * as SurveyViews from "./views/survey.js";
import * as AdminViews from "./views/admin.js";
import { EmbeddingsClient, embeddingsLayer } from "./Embeddings/index.js";
import { openAlexLayer } from "./OpenAlex/index.js";
import { orcidLayer } from "./Orcid.js";
import { PgClient } from "@effect/sql-pg";
import { LoggingHttpClientLayer } from "./LoggingHttpClient.js";
import { randomUUID } from "node:crypto";
import { WorkflowEngine } from "@effect/workflow";
import { Tokenizer as HuggingFaceTokenizer } from "@huggingface/tokenizers";
import { Tokenizer } from "./Embeddings/Shared.js";

function htmlResponse(html: string, status = 200) {
  return HttpServerResponse.text(html, { contentType: "text/html", status });
}

function getOrigin(req: HttpServerRequest.HttpServerRequest) {
  const host = req.headers["host"] ?? "localhost";
  const proto = req.headers["x-forwarded-proto"] ?? "http";
  return `${proto}://${host}`;
}

const listBatchesWithScientists = Db.listBatches.pipe(
  Effect.andThen((batches) =>
    Effect.all(
      batches.map((b) =>
        Db.listScientistsForBatch(b.id).pipe(Effect.map((scientists) => ({ ...b, scientists }))),
      ),
    ),
  ),
);

// ---------------------------------------------------------------------------
// Admin auth middleware
// ---------------------------------------------------------------------------

function checkBasicAuth(authHeader: string): boolean {
  const password = process.env.ADMIN_PASSWORD ?? "";
  if (!password) return false;
  if (!authHeader.startsWith("Basic ")) return false;
  const decoded = Buffer.from(authHeader.slice(6), "base64").toString();
  const colonIdx = decoded.indexOf(":");
  if (colonIdx === -1) return false;
  return decoded.slice(colonIdx + 1) === password;
}

const unauthorized = HttpServerResponse.empty({ status: 401 }).pipe(
  HttpServerResponse.setHeader("WWW-Authenticate", 'Basic realm="Admin"'),
);

const adminAuth = HttpMiddleware.make((app) =>
  Effect.gen(function* () {
    const req = yield* HttpServerRequest.HttpServerRequest;
    const auth = req.headers["authorization"] ?? "";
    if (!checkBasicAuth(auth)) return unauthorized;
    return yield* app;
  }),
);

// ---------------------------------------------------------------------------
// Survey pages  /s/:token, /s/:token/:page  (server-rendered, no client JS)
// ---------------------------------------------------------------------------

const surveyPagesRouter = HttpRouter.empty.pipe(
  HttpRouter.get(
    "/:token",
    Effect.gen(function* () {
      const params = yield* HttpRouter.params;
      const token = params["token"] ?? "";
      const state = yield* Survey.getSurveyState(token);
      if (!state) {
        const result = yield* Admin.createSurvey.poll(token);

        if (typeof result === "undefined" || result._tag === "Suspended") {
          return htmlResponse(SurveyViews.renderCreatingSurveyPage().__html).pipe(
            HttpServerResponse.setHeader("Refresh", "1"),
          );
        }

        return Exit.match(result.exit, {
          onFailure: () => htmlResponse(SurveyViews.renderFailedToCreateSurveyPage().__html, 500),
          onSuccess: ({ token }) => HttpServerResponse.redirect(`/s/${token}`, { status: 303 }),
        });
      }
      if (state.scientist.submitted_at) {
        return htmlResponse(SurveyViews.renderThankYouPage().__html);
      }
      return htmlResponse(
        SurveyViews.renderIntroPage({ token, paperCount: state.papers.length }).__html,
      );
    }),
  ),
  HttpRouter.get(
    "/:token/:page",
    Effect.gen(function* () {
      const params = yield* HttpRouter.params;
      const token = params["token"] ?? "";
      const page = Number(params["page"]);
      const state = yield* Survey.getSurveyState(token);
      if (!state) {
        return htmlResponse(SurveyViews.renderNotFoundPage().__html, 404);
      }
      if (state.scientist.submitted_at) {
        return yield* HttpServerResponse.redirect(`/s/${token}`, {
          status: 303,
        });
      }
      const total = state.papers.length;
      if (!Number.isInteger(page) || page < 1 || page > total) {
        return yield* HttpServerResponse.redirect(`/s/${token}`, {
          status: 303,
        });
      }
      const paper = state.papers[page - 1]!;
      const response = state.responses.find((r) => r.paper_id === paper.id) ?? null;
      return htmlResponse(
        SurveyViews.renderPaperPage({
          token,
          page,
          total,
          paper,
          rating: response?.rating ?? null,
          comment: response?.comment ?? null,
          error: false,
        }).__html,
      );
    }),
  ),
  HttpRouter.post(
    "/:token/:page",
    Effect.gen(function* () {
      const params = yield* HttpRouter.params;
      const token = params["token"] ?? "";
      const page = Number(params["page"]);
      const req = yield* HttpServerRequest.HttpServerRequest;
      const bodyText = yield* req.text;
      const body = new URLSearchParams(bodyText);
      const action = body.get("action") === "prev" ? "prev" : "next";
      const ratingParam = body.get("rating");
      const ratingRaw = ratingParam === null ? NaN : Number(ratingParam);
      const rating =
        Number.isInteger(ratingRaw) && ratingRaw >= 0 && ratingRaw <= 5 ? ratingRaw : null;
      const comment = body.get("comment") || null;

      const state = yield* Survey.getSurveyState(token);
      if (!state) {
        return htmlResponse(SurveyViews.renderNotFoundPage().__html, 404);
      }
      if (state.scientist.submitted_at) {
        return yield* HttpServerResponse.redirect(`/s/${token}`, {
          status: 303,
        });
      }
      const total = state.papers.length;
      if (!Number.isInteger(page) || page < 1 || page > total) {
        return yield* HttpServerResponse.redirect(`/s/${token}`, {
          status: 303,
        });
      }
      const paper = state.papers[page - 1]!;

      if (action === "next" && rating === null) {
        return htmlResponse(
          SurveyViews.renderPaperPage({
            token,
            page,
            total,
            paper,
            rating: null,
            comment,
            error: true,
          }).__html,
          422,
        );
      }

      if (rating !== null) {
        yield* Survey.answerPaper(token, paper.id, rating, comment);
      }

      if (action === "prev") {
        return yield* HttpServerResponse.redirect(`/s/${token}/${page - 1}`, {
          status: 303,
        });
      }
      if (page === total) {
        yield* Survey.submitSurvey(token);
        return yield* HttpServerResponse.redirect(`/s/${token}`, {
          status: 303,
        });
      }
      return yield* HttpServerResponse.redirect(`/s/${token}/${page + 1}`, {
        status: 303,
      });
    }),
  ),
);

// ---------------------------------------------------------------------------
// Admin pages  /admin, /admin/upload, /admin/export.csv  (server-rendered)
// ---------------------------------------------------------------------------

const toCsvCell = (v: string) => `"${v.replace(/"/g, '""')}"`;
const toCsvLine = (values: string[]) => values.map(toCsvCell).join(",");

const adminPagesRouter = HttpRouter.empty
  .pipe(
    HttpRouter.get(
      "/",
      Effect.gen(function* () {
        const req = yield* HttpServerRequest.HttpServerRequest;
        const url = new URL(req.url, "http://localhost");
        const batchParam = url.searchParams.get("batch");
        const batches = yield* listBatchesWithScientists;
        return htmlResponse(
          AdminViews.renderAdminPage({
            origin: getOrigin(req),
            batches,
            highlightBatchId: batchParam ? Number(batchParam) : null,
            duplicateError: null,
            missingColumnsError: null,
          }).__html,
        );
      }),
    ),
    HttpRouter.post(
      "/add-preprints",
      Effect.gen(function* () {
        const fs = yield* FileSystem.FileSystem;
        const req = yield* HttpServerRequest.HttpServerRequest;
        const parts = yield* req.multipart;
        const filePart = parts["dois-file"];
        const file = Array.isArray(filePart) ? filePart[0] : filePart;
        if (!Multipart.isPersistedFile(file)) {
          return htmlResponse("Missing DOIs file", 400);
        }

        const text = yield* fs.readFileString(file.path);
        const dois = yield* Schema.decode(
          Schema.compose(
            Schema.compose(Schema.Trim, Schema.split("\n")),
            Schema.NonEmptyArray(Schema.compose(Schema.Trim, Schema.NonEmptyString)),
          ),
        )(text);

        const executionId = yield* Admin.ingestPreprints.execute({ dois }, { discard: true });

        return yield* HttpServerResponse.redirect(`/admin/ingest/${executionId}`, {
          status: 303,
        });
      }),
    ),
    HttpRouter.get(
      "/ingest/:key",
      Effect.gen(function* () {
        const params = yield* HttpRouter.params;
        const key = params["key"] ?? "";
        const result = yield* Admin.ingestPreprints.poll(key);

        if (typeof result === "undefined" || result._tag === "Suspended") {
          return htmlResponse(AdminViews.renderIngestStatusPage().__html).pipe(
            HttpServerResponse.setHeader("Refresh", "1"),
          );
        }

        return Exit.match(result.exit, {
          onFailure: () => htmlResponse(AdminViews.renderIngestFailedPage().__html, 500),
          onSuccess: ({ submitted, alreadyStored, ingested, chunksWithFailures }) =>
            htmlResponse(
              AdminViews.renderIngestDonePage({
                submitted,
                alreadyStored,
                ingested,
                chunksWithFailures,
              }).__html,
            ),
        });
      }),
    ),
    HttpRouter.post(
      "/create-survey",
      Effect.gen(function* () {
        const orcid = yield* pipe(
          HttpServerRequest.HttpServerRequest,
          Effect.andThen((request) => request.urlParamsBody),
          Effect.andThen(
            Schema.decode(
              UrlParams.schemaRecord(Schema.Struct({ "orcid-id": Schema.NonEmptyTrimmedString })),
            ),
          ),
        );
        const { batchId } = yield* Admin.createSurvey.execute({
          idempotencyKey: randomUUID(),
          languages: ["en"],
          orcidId: orcid["orcid-id"],
        });

        return yield* HttpServerResponse.redirect(`/admin?batch=${batchId}`, {
          status: 303,
        });
      }),
    ),
    HttpRouter.post(
      "/upload",
      Effect.gen(function* () {
        const req = yield* HttpServerRequest.HttpServerRequest;
        const fs = yield* FileSystem.FileSystem;
        const parts = yield* req.multipart;
        const filePart = parts["csv"];
        const file = Array.isArray(filePart) ? filePart[0] : filePart;
        if (!Multipart.isPersistedFile(file)) {
          return htmlResponse("Missing csv file", 400);
        }
        const csvText = yield* fs.readFileString(file.path);
        const result = yield* Admin.importCsv(csvText);
        return yield* HttpServerResponse.redirect(`/admin?batch=${result.batchId}`, {
          status: 303,
        });
      }).pipe(
        Effect.catchTags({
          DuplicateCsvRowsError: (e) =>
            Effect.gen(function* () {
              const req = yield* HttpServerRequest.HttpServerRequest;
              const batches = yield* listBatchesWithScientists;
              return htmlResponse(
                AdminViews.renderAdminPage({
                  origin: getOrigin(req),
                  batches,
                  highlightBatchId: null,
                  duplicateError: e.duplicates,
                  missingColumnsError: null,
                }).__html,
                400,
              );
            }),
          MissingCsvColumnsError: (e) =>
            Effect.gen(function* () {
              const req = yield* HttpServerRequest.HttpServerRequest;
              const batches = yield* listBatchesWithScientists;
              return htmlResponse(
                AdminViews.renderAdminPage({
                  origin: getOrigin(req),
                  batches,
                  highlightBatchId: null,
                  duplicateError: null,
                  missingColumnsError: e.missing,
                }).__html,
                400,
              );
            }),
        }),
      ),
    ),
    HttpRouter.get(
      "/export.csv",
      Effect.gen(function* () {
        const rows = yield* Admin.getExportRows;
        const header = toCsvLine([
          "batch_uploaded_at",
          "name",
          "orcid",
          "token",
          "profile_works",
          "survey_created_from",
          "candidate_count",
          "languages",
          "doi",
          "title",
          "abstract",
          "rank",
          "window",
          "rating",
          "comment",
          "answered_at",
          "rating_label_0",
          "rating_label_1",
          "rating_label_2",
          "rating_label_3",
          "rating_label_4",
          "rating_label_5",
        ]);
        const lines = rows.map((r) =>
          toCsvLine([
            r.batch_uploaded_at,
            r.name,
            r.orcid,
            r.token,
            r.profile_works ?? "",
            r.survey_created_from,
            r.candidate_count === null ? "" : String(r.candidate_count),
            r.languages ?? "",
            r.doi,
            r.title,
            r.abstract,
            r.rank === null ? "" : String(r.rank),
            r.window ?? "",
            String(r.rating),
            r.comment ?? "",
            r.answered_at,
            r.rating_label_0,
            r.rating_label_1,
            r.rating_label_2,
            r.rating_label_3,
            r.rating_label_4,
            r.rating_label_5,
          ]),
        );
        const csv = [header, ...lines].join("\n");
        return yield* HttpServerResponse.text(csv, {
          headers: {
            "content-type": "text/csv",
            "content-disposition": 'attachment; filename="responses.csv"',
          },
        });
      }),
    ),
  )
  .pipe(HttpRouter.use(adminAuth));

// ---------------------------------------------------------------------------
// App router
// ---------------------------------------------------------------------------

export const app = HttpRouter.empty.pipe(
  HttpRouter.mount("/s", surveyPagesRouter),
  HttpRouter.mount("/admin", adminPagesRouter),
  HttpRouter.get(
    "/",
    Effect.gen(function* () {
      const openSurveyEnabled = yield* Config.boolean("ENABLE_OPEN_SURVEYS").pipe(
        Config.withDefault(false),
      );

      if (!openSurveyEnabled) {
        return yield* htmlResponse(SurveyViews.renderLandingPage().__html);
      }

      return yield* htmlResponse(SurveyViews.renderStartPage().__html);
    }),
  ),
  HttpRouter.post(
    "/",
    Effect.gen(function* () {
      const openSurveyEnabled = yield* Config.boolean("ENABLE_OPEN_SURVEYS").pipe(
        Config.withDefault(false),
      );

      if (!openSurveyEnabled) {
        return htmlResponse(SurveyViews.renderNotFoundPage().__html, 404);
      }

      const input = yield* pipe(
        HttpServerRequest.HttpServerRequest,
        Effect.andThen((request) => request.urlParamsBody),
        Effect.andThen(
          UrlParams.schemaStruct(
            Schema.Struct({
              "orcid-id": Schema.NonEmptyTrimmedString,
              language: Schema.ArrayEnsure(Schema.Literal("en", "es", "pt")).pipe(
                Schema.filter(Array.isNonEmptyReadonlyArray),
              ),
            }),
          ),
        ),
      );

      const executionId = yield* Admin.createSurvey.execute(
        {
          idempotencyKey: randomUUID(),
          languages: input.language,
          orcidId: input["orcid-id"],
        },
        { discard: true },
      );

      return yield* HttpServerResponse.redirect(`/s/${executionId}`, { status: 303 });
    }),
  ),
);

// ---------------------------------------------------------------------------
// Server entry point
// ---------------------------------------------------------------------------

const port = Number(process.env.PORT ?? 3000);
const dbFile = process.env.DB_FILE ?? "/data/survey.db";

const ServerLive = app.pipe(HttpServer.serve(HttpMiddleware.logger), HttpServer.withLogAddress);

const GetTokenizerJson = Effect.gen(function* () {
  const fileSystem = yield* FileSystem.FileSystem;
  const file = "model/tokenizer.json";

  return yield* pipe(
    fileSystem.readFileString(file),
    Effect.andThen(Schema.decode(Schema.parseJson(Schema.Object))),
  );
});

const GetTokenizerConfig = Effect.gen(function* () {
  const fileSystem = yield* FileSystem.FileSystem;
  const file = "model/tokenizer_config.json";

  return yield* pipe(
    fileSystem.readFileString(file),
    Effect.andThen(Schema.decode(Schema.parseJson(Schema.Object))),
  );
});

const main = Db.migrate.pipe(
  Effect.andThen(Layer.launch(ServerLive)),
  Effect.provide(
    pipe(
      Layer.mergeAll(Admin.createSurveyLayer, Admin.ingestPreprintsLayer),
      Layer.provideMerge(Layer.mergeAll(embeddingsLayer, openAlexLayer, orcidLayer)),
      Layer.provideMerge(
        Layer.mergeAll(
          Db.sqliteLayer(dbFile),
          EmbeddingsClient.layer.pipe(
            Layer.provide(
              PgClient.layerConfig({ url: Config.redacted(Config.string("POSTGRES_URL")) }),
            ),
          ),
          Layer.effect(
            Tokenizer,
            Effect.gen(function* () {
              const [tokenizerJson, tokenizerConfig] = yield* Effect.all(
                [GetTokenizerJson, GetTokenizerConfig],
                { concurrency: "inherit" },
              );

              return new HuggingFaceTokenizer(tokenizerJson, tokenizerConfig);
            }),
          ),
        ),
      ),
      Layer.provideMerge(
        Layer.mergeAll(
          NodeHttpServer.layer(createServer, { port }),
          NodeContext.layer,
          Layer.provide(LoggingHttpClientLayer, NodeHttpClient.layer),
          WorkflowEngine.layerMemory,
        ),
      ),
    ),
  ),
  Logger.withMinimumLogLevel(LogLevel.Debug),
);

NodeRuntime.runMain(main);
