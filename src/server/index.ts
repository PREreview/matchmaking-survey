import {
  HttpMiddleware,
  HttpRouter,
  HttpServer,
  HttpServerRequest,
  HttpServerResponse,
  UrlParams,
} from "@effect/platform";
import { NodeHttpServer, NodeRuntime } from "@effect/platform-node";
import { Schema, Chunk, pipe, Effect, Layer, Stream } from "effect";
import { createServer } from "node:http";
import * as Admin from "./routes/admin.js";
import * as Survey from "./routes/survey.js";
import * as Db from "./db.js";
import * as SurveyViews from "./views/survey.js";
import * as AdminViews from "./views/admin.js";
import { embeddingsLayer } from "./Embeddings.js";
import { openAlexLayer } from "./OpenAlex.js";
import { orcidLayer } from "./Orcid.js";

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
        return htmlResponse(SurveyViews.renderNotFoundPage().__html, 404);
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
      const ratingRaw = Number(body.get("rating"));
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
        const batchId = yield* Admin.createSurvey(orcid["orcid-id"]);

        return yield* HttpServerResponse.redirect(`/admin?batch=${batchId}`, {
          status: 303,
        });
      }),
    ),
    HttpRouter.post(
      "/upload",
      Effect.gen(function* () {
        const req = yield* HttpServerRequest.HttpServerRequest;
        const parts = yield* Stream.runCollect(req.multipartStream);
        const filePart = Chunk.toReadonlyArray(parts).find(
          (p) => p._tag === "File" && p.key === "csv",
        );
        if (!filePart || filePart._tag !== "File") {
          return htmlResponse("Missing csv file", 400);
        }
        const bytes = yield* filePart.contentEffect;
        const csvText = new TextDecoder().decode(bytes);
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
          "doi",
          "title",
          "abstract",
          "rating",
          "comment",
          "answered_at",
        ]);
        const lines = rows.map((r) =>
          toCsvLine([
            r.batch_uploaded_at,
            r.name,
            r.orcid,
            r.token,
            r.doi,
            r.title,
            r.abstract,
            String(r.rating),
            r.comment ?? "",
            r.answered_at,
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
  HttpRouter.get("/", Effect.succeed(htmlResponse(SurveyViews.renderLandingPage().__html))),
);

// ---------------------------------------------------------------------------
// Server entry point
// ---------------------------------------------------------------------------

const port = Number(process.env.PORT ?? 3000);
const dbFile = process.env.DB_FILE ?? "/data/survey.db";

const ServerLive = app.pipe(
  HttpServer.serve(HttpMiddleware.logger),
  HttpServer.withLogAddress,
  Layer.provide([
    NodeHttpServer.layer(createServer, { port }),
    embeddingsLayer,
    openAlexLayer,
    orcidLayer,
  ]),
);

const main = Db.migrate.pipe(
  Effect.andThen(Layer.launch(ServerLive)),
  Effect.provide(Db.sqliteLayer(dbFile)),
);

NodeRuntime.runMain(main);
