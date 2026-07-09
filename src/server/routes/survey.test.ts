import { SqliteClient } from "@effect/sql-sqlite-node"
import { Effect } from "effect"
import { beforeEach, describe, expect, it } from "vitest"
import * as Db from "../db.js"
import * as Survey from "./survey.js"

let layer: ReturnType<typeof SqliteClient.layer>

beforeEach(() => {
  layer = SqliteClient.layer({ filename: ":memory:" })
})

const run = <A>(effect: Effect.Effect<A, unknown, Db.DbClient>) =>
  Effect.runPromise(
    Db.migrate.pipe(Effect.andThen(effect), Effect.provide(layer)),
  )

const seed = Db.createBatch.pipe(
  Effect.andThen((b) =>
    Db.insertScientist(b.id, "0000-0002-1234-5678", "test-token"),
  ),
  Effect.andThen((s) =>
    Effect.all([
      Db.insertPaper(s.id, "Paper One", "Abstract one.", 0),
      Db.insertPaper(s.id, "Paper Two", "Abstract two.", 1),
    ]).pipe(Effect.map((papers) => ({ scientist: s, papers }))),
  ),
)

describe("getSurveyState", () => {
  it("returns null for an unknown token", async () => {
    const result = await run(Survey.getSurveyState("bad-token"))
    expect(result).toBeNull()
  })

  it("returns scientist, papers, and empty responses for a fresh token", async () => {
    const result = await run(
      seed.pipe(Effect.andThen(() => Survey.getSurveyState("test-token"))),
    )
    expect(result).not.toBeNull()
    expect(result!.scientist.orcid).toBe("0000-0002-1234-5678")
    expect(result!.papers).toHaveLength(2)
    expect(result!.responses).toHaveLength(0)
  })

  it("includes saved responses on return visit", async () => {
    const result = await run(
      seed.pipe(
        Effect.andThen(({ scientist, papers }) =>
          Db.upsertResponse(scientist.id, papers[0].id, 3),
        ),
        Effect.andThen(() => Survey.getSurveyState("test-token")),
      ),
    )
    expect(result!.responses).toHaveLength(1)
    expect(result!.responses[0].rating).toBe(3)
  })
})

describe("answerPaper", () => {
  it("saves a rating and returns ok", async () => {
    const result = await run(
      seed.pipe(
        Effect.andThen(({ papers }) =>
          Survey.answerPaper("test-token", papers[0].id, 4),
        ),
      ),
    )
    expect(result).toEqual({ ok: true })
  })

  it("returns not_found for an unknown token", async () => {
    const result = await run(Survey.answerPaper("no-token", 1, 3))
    expect(result).toEqual({ ok: false, error: "not_found" })
  })

  it("rejects a rating after submission", async () => {
    const result = await run(
      seed.pipe(
        Effect.andThen(({ scientist, papers }) =>
          Db.markSubmitted(scientist.id).pipe(
            Effect.andThen(() =>
              Survey.answerPaper("test-token", papers[0].id, 5),
            ),
          ),
        ),
      ),
    )
    expect(result).toEqual({ ok: false, error: "already_submitted" })
  })
})

describe("submitSurvey", () => {
  it("marks the survey as submitted", async () => {
    await run(seed.pipe(Effect.andThen(() => Survey.submitSurvey("test-token"))))
    const scientist = await run(Db.getScientistByToken("test-token"))
    expect(scientist?.submitted_at).not.toBeNull()
  })

  it("returns not_found for an unknown token", async () => {
    const result = await run(Survey.submitSurvey("no-token"))
    expect(result).toEqual({ ok: false, error: "not_found" })
  })

  it("returns already_submitted if already done", async () => {
    const result = await run(
      seed.pipe(
        Effect.andThen(() => Survey.submitSurvey("test-token")),
        Effect.andThen(() => Survey.submitSurvey("test-token")),
      ),
    )
    expect(result).toEqual({ ok: false, error: "already_submitted" })
  })
})
