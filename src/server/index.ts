import {
  HttpMiddleware,
  HttpRouter,
  HttpServer,
  HttpServerRequest,
  HttpServerResponse,
} from "@effect/platform"
import { NodeHttpServer, NodeRuntime } from "@effect/platform-node"
import { Effect, Layer, Schema } from "effect"
import { createServer } from "node:http"
import { readFileSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import * as Admin from "./routes/admin.js"
import * as Survey from "./routes/survey.js"
import * as Db from "./db.js"
import * as SurveyViews from "./views/survey.js"

const __dirname = dirname(fileURLToPath(import.meta.url))

function htmlResponse(html: string, status = 200) {
  return HttpServerResponse.text(html, { contentType: "text/html", status })
}

// ---------------------------------------------------------------------------
// Admin auth middleware
// ---------------------------------------------------------------------------

function checkBasicAuth(authHeader: string): boolean {
  const password = process.env.ADMIN_PASSWORD ?? ""
  if (!password) return false
  if (!authHeader.startsWith("Basic ")) return false
  const decoded = Buffer.from(authHeader.slice(6), "base64").toString()
  const colonIdx = decoded.indexOf(":")
  if (colonIdx === -1) return false
  return decoded.slice(colonIdx + 1) === password
}

const unauthorized = HttpServerResponse.empty({ status: 401 }).pipe(
  HttpServerResponse.setHeader("WWW-Authenticate", 'Basic realm="Admin"'),
)

const adminAuth = HttpMiddleware.make((app) =>
  Effect.gen(function* () {
    const req = yield* HttpServerRequest.HttpServerRequest
    const auth = req.headers["authorization"] ?? ""
    if (!checkBasicAuth(auth)) return unauthorized
    return yield* app
  }),
)

// ---------------------------------------------------------------------------
// Survey routes  /api/s/:token
// ---------------------------------------------------------------------------

const surveyRouter = HttpRouter.empty.pipe(
  HttpRouter.get(
    "/:token",
    Effect.gen(function* () {
      const params = yield* HttpRouter.params
      const token = params["token"] ?? ""
      const state = yield* Survey.getSurveyState(token)
      if (!state) {
        return yield* HttpServerResponse.json(
          { error: "Not found" },
          { status: 404 },
        )
      }
      return yield* HttpServerResponse.json(state)
    }),
  ),
  HttpRouter.post(
    "/:token/answer",
    Effect.gen(function* () {
      const params = yield* HttpRouter.params
      const token = params["token"] ?? ""
      const body = yield* HttpServerRequest.schemaBodyJson(
        Schema.Struct({
          paper_id: Schema.Number,
          rating: Schema.Number,
          comment: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      )
      const result = yield* Survey.answerPaper(
        token,
        body.paper_id,
        body.rating,
        body.comment ?? null,
      )
      if (!result.ok) {
        const status = result.error === "not_found" ? 404 : 409
        return yield* HttpServerResponse.json(result, { status })
      }
      return yield* HttpServerResponse.json(result)
    }),
  ),
  HttpRouter.post(
    "/:token/submit",
    Effect.gen(function* () {
      const params = yield* HttpRouter.params
      const token = params["token"] ?? ""
      const result = yield* Survey.submitSurvey(token)
      if (!result.ok) {
        const status = result.error === "not_found" ? 404 : 409
        return yield* HttpServerResponse.json(result, { status })
      }
      return yield* HttpServerResponse.json(result)
    }),
  ),
)

// ---------------------------------------------------------------------------
// Survey pages  /s/:token, /s/:token/:page  (server-rendered, no client JS)
// ---------------------------------------------------------------------------

const surveyPagesRouter = HttpRouter.empty.pipe(
  HttpRouter.get(
    "/:token",
    Effect.gen(function* () {
      const params = yield* HttpRouter.params
      const token = params["token"] ?? ""
      const state = yield* Survey.getSurveyState(token)
      if (!state) {
        return htmlResponse(SurveyViews.renderNotFoundPage().__html, 404)
      }
      if (state.scientist.submitted_at) {
        return htmlResponse(SurveyViews.renderThankYouPage().__html)
      }
      return htmlResponse(
        SurveyViews.renderIntroPage({ token, paperCount: state.papers.length })
          .__html,
      )
    }),
  ),
  HttpRouter.get(
    "/:token/:page",
    Effect.gen(function* () {
      const params = yield* HttpRouter.params
      const token = params["token"] ?? ""
      const page = Number(params["page"])
      const state = yield* Survey.getSurveyState(token)
      if (!state) {
        return htmlResponse(SurveyViews.renderNotFoundPage().__html, 404)
      }
      if (state.scientist.submitted_at) {
        return yield* HttpServerResponse.redirect(`/s/${token}`, {
          status: 303,
        })
      }
      const total = state.papers.length
      if (!Number.isInteger(page) || page < 1 || page > total) {
        return yield* HttpServerResponse.redirect(`/s/${token}`, {
          status: 303,
        })
      }
      const paper = state.papers[page - 1]!
      const response =
        state.responses.find((r) => r.paper_id === paper.id) ?? null
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
      )
    }),
  ),
  HttpRouter.post(
    "/:token/:page",
    Effect.gen(function* () {
      const params = yield* HttpRouter.params
      const token = params["token"] ?? ""
      const page = Number(params["page"])
      const req = yield* HttpServerRequest.HttpServerRequest
      const bodyText = yield* req.text
      const body = new URLSearchParams(bodyText)
      const action = body.get("action") === "prev" ? "prev" : "next"
      const ratingRaw = Number(body.get("rating"))
      const rating =
        Number.isInteger(ratingRaw) && ratingRaw >= 1 && ratingRaw <= 5
          ? ratingRaw
          : null
      const comment = body.get("comment") || null

      const state = yield* Survey.getSurveyState(token)
      if (!state) {
        return htmlResponse(SurveyViews.renderNotFoundPage().__html, 404)
      }
      if (state.scientist.submitted_at) {
        return yield* HttpServerResponse.redirect(`/s/${token}`, {
          status: 303,
        })
      }
      const total = state.papers.length
      if (!Number.isInteger(page) || page < 1 || page > total) {
        return yield* HttpServerResponse.redirect(`/s/${token}`, {
          status: 303,
        })
      }
      const paper = state.papers[page - 1]!

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
        )
      }

      if (rating !== null) {
        yield* Survey.answerPaper(token, paper.id, rating, comment)
      }

      if (action === "prev") {
        return yield* HttpServerResponse.redirect(`/s/${token}/${page - 1}`, {
          status: 303,
        })
      }
      if (page === total) {
        yield* Survey.submitSurvey(token)
        return yield* HttpServerResponse.redirect(`/s/${token}`, {
          status: 303,
        })
      }
      return yield* HttpServerResponse.redirect(`/s/${token}/${page + 1}`, {
        status: 303,
      })
    }),
  ),
)

// ---------------------------------------------------------------------------
// Admin routes  /api/admin
// ---------------------------------------------------------------------------

const toCsvCell = (v: string) => `"${v.replace(/"/g, '""')}"`
const toCsvLine = (values: string[]) => values.map(toCsvCell).join(",")

const adminRouter = HttpRouter.empty.pipe(
  HttpRouter.post(
    "/upload",
    Effect.gen(function* () {
      const req = yield* HttpServerRequest.HttpServerRequest
      const csvText = yield* req.text
      const result = yield* Admin.importCsv(csvText)
      return yield* HttpServerResponse.json(result)
    }).pipe(
      Effect.catchTag("DuplicateCsvRowsError", (e) =>
        HttpServerResponse.json(
          { error: "duplicate_rows", duplicates: e.duplicates },
          { status: 400 },
        ),
      ),
    ),
  ),
  HttpRouter.get(
    "/export.csv",
    Effect.gen(function* () {
      const rows = yield* Admin.getExportRows
      const header = toCsvLine([
        "batch_uploaded_at",
        "orcid",
        "token",
        "doi",
        "title",
        "abstract",
        "rating",
        "comment",
        "answered_at",
      ])
      const lines = rows.map((r) =>
        toCsvLine([
          r.batch_uploaded_at,
          r.orcid,
          r.token,
          r.doi,
          r.title,
          r.abstract,
          String(r.rating),
          r.comment ?? "",
          r.answered_at,
        ]),
      )
      const csv = [header, ...lines].join("\n")
      return yield* HttpServerResponse.text(csv, {
        headers: {
          "content-type": "text/csv",
          "content-disposition": 'attachment; filename="responses.csv"',
        },
      })
    }),
  ),
  HttpRouter.get(
    "/batches",
    Effect.gen(function* () {
      const batches = yield* Db.listBatches
      const withScientists = yield* Effect.all(
        batches.map((b) =>
          Db.listScientistsForBatch(b.id).pipe(
            Effect.map((scientists) => ({ ...b, scientists })),
          ),
        ),
      )
      return yield* HttpServerResponse.json(withScientists)
    }),
  ),
).pipe(HttpRouter.use(adminAuth))

// ---------------------------------------------------------------------------
// Static file serving
// ---------------------------------------------------------------------------

const staticDir = join(__dirname, "../../dist/public")

function serveStatic(urlPath: string) {
  const safePath = urlPath.replace(/\.\./g, "").replace(/^\/+/, "")
  let filePath = join(staticDir, safePath || "index.html")
  try {
    const content = readFileSync(filePath)
    const ext = filePath.split(".").pop() ?? ""
    const mime: Record<string, string> = {
      html: "text/html",
      js: "application/javascript",
      css: "text/css",
      svg: "image/svg+xml",
      png: "image/png",
      ico: "image/x-icon",
    }
    return HttpServerResponse.uint8Array(new Uint8Array(content), {
      headers: { "content-type": mime[ext] ?? "application/octet-stream" },
    })
  } catch {
    // Fall back to index.html for client-side routing
    try {
      const index = readFileSync(join(staticDir, "index.html"))
      return HttpServerResponse.uint8Array(new Uint8Array(index), {
        headers: { "content-type": "text/html" },
      })
    } catch {
      return HttpServerResponse.text("Not found", { status: 404 })
    }
  }
}

// ---------------------------------------------------------------------------
// App router
// ---------------------------------------------------------------------------

export const app = HttpRouter.empty.pipe(
  HttpRouter.mount("/api/s", surveyRouter),
  HttpRouter.mount("/api/admin", adminRouter),
  HttpRouter.mount("/s", surveyPagesRouter),
  HttpRouter.get(
    "/admin",
    Effect.gen(function* () {
      const req = yield* HttpServerRequest.HttpServerRequest
      const auth = req.headers["authorization"] ?? ""
      if (!checkBasicAuth(auth)) return unauthorized
      return serveStatic("/index.html")
    }),
  ),
  HttpRouter.get(
    "/*",
    Effect.gen(function* () {
      const req = yield* HttpServerRequest.HttpServerRequest
      const url = new URL(req.url, "http://localhost")
      return serveStatic(url.pathname)
    }),
  ),
)

// ---------------------------------------------------------------------------
// Server entry point
// ---------------------------------------------------------------------------

const port = Number(process.env.PORT ?? 3000)
const dbFile = process.env.DB_FILE ?? "/data/survey.db"

const ServerLive = app.pipe(
  HttpServer.serve(HttpMiddleware.logger),
  HttpServer.withLogAddress,
  Layer.provide(NodeHttpServer.layer(createServer, { port })),
)

const main = Db.migrate.pipe(
  Effect.andThen(Layer.launch(ServerLive)),
  Effect.provide(Db.sqliteLayer(dbFile)),
)

NodeRuntime.runMain(main)
