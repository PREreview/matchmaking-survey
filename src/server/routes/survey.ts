import { Effect } from "effect"
import * as Db from "../db.js"

export const getSurveyState = (token: string) =>
  Effect.gen(function* () {
    const scientist = yield* Db.getScientistByToken(token)
    if (!scientist) return null
    const [papers, responses] = yield* Effect.all([
      Db.listPapersForScientist(scientist.id),
      Db.listResponsesForScientist(scientist.id),
    ])
    return { scientist, papers, responses }
  })

export const answerPaper = (
  token: string,
  paperId: number,
  rating: number,
  comment: string | null = null,
) =>
  Effect.gen(function* () {
    const scientist = yield* Db.getScientistByToken(token)
    if (!scientist) return { ok: false, error: "not_found" as const }
    if (scientist.submitted_at) return { ok: false, error: "already_submitted" as const }
    yield* Db.upsertResponse(scientist.id, paperId, rating, comment)
    return { ok: true as const }
  })

export const submitSurvey = (token: string) =>
  Effect.gen(function* () {
    const scientist = yield* Db.getScientistByToken(token)
    if (!scientist) return { ok: false, error: "not_found" as const }
    if (scientist.submitted_at) return { ok: false, error: "already_submitted" as const }
    yield* Db.markSubmitted(scientist.id)
    return { ok: true as const }
  })
