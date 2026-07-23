import { SqlClient } from "@effect/sql";
import { SqliteClient } from "@effect/sql-sqlite-node";
import { Effect } from "effect";
import { beforeEach, describe, expect, it } from "vitest";
import * as Db from "./db.js";

let layer: ReturnType<typeof SqliteClient.layer>;

beforeEach(() => {
  layer = SqliteClient.layer({ filename: ":memory:" });
});

const run = <A>(effect: Effect.Effect<A, unknown, Db.DbClient>) =>
  Effect.runPromise(Db.migrate.pipe(Effect.andThen(effect), Effect.provide(layer)));

describe("batches", () => {
  it("creates a batch and returns it with an id and timestamp", async () => {
    const batch = await run(Db.createBatch);
    expect(batch.id).toBe(1);
    expect(typeof batch.uploaded_at).toBe("string");
  });

  it("lists all batches newest first", async () => {
    const batches = await run(
      Db.createBatch.pipe(Effect.andThen(Db.createBatch), Effect.andThen(Db.listBatches)),
    );
    expect(batches).toHaveLength(2);
    expect(batches[0].id).toBeGreaterThan(batches[1].id);
  });
});

describe("scientists", () => {
  it("inserts a scientist linked to a batch", async () => {
    const scientist = await run(
      Db.createBatch.pipe(
        Effect.andThen((b) =>
          Db.insertScientist(b.id, "Test Scientist", "0000-0001-2345-6789", "tok-abc"),
        ),
      ),
    );
    expect(scientist.name).toBe("Test Scientist");
    expect(scientist.orcid).toBe("0000-0001-2345-6789");
    expect(scientist.token).toBe("tok-abc");
    expect(scientist.submitted_at).toBeNull();
  });

  it("looks up a scientist by token", async () => {
    const found = await run(
      Db.createBatch.pipe(
        Effect.andThen((b) =>
          Db.insertScientist(b.id, "Test Scientist", "0000-0001-2345-6789", "tok-xyz"),
        ),
        Effect.andThen(() => Db.getScientistByToken("tok-xyz")),
      ),
    );
    expect(found).not.toBeNull();
    expect(found?.orcid).toBe("0000-0001-2345-6789");
  });

  it("returns null for an unknown token", async () => {
    const found = await run(Db.getScientistByToken("no-such-token"));
    expect(found).toBeNull();
  });

  it("marks a scientist as submitted", async () => {
    const found = await run(
      Db.createBatch.pipe(
        Effect.andThen((b) =>
          Db.insertScientist(b.id, "Test Scientist", "0000-0001-2345-6789", "tok-s"),
        ),
        Effect.andThen((s) =>
          Db.markSubmitted(s.id).pipe(Effect.andThen(() => Db.getScientistByToken("tok-s"))),
        ),
      ),
    );
    expect(found?.submitted_at).not.toBeNull();
  });

  it("lists scientists for a batch", async () => {
    const scientists = await run(
      Db.createBatch.pipe(
        Effect.andThen((b) =>
          Effect.all([
            Db.insertScientist(b.id, "Test Scientist", "0000-0001-0000-0001", "tok-1"),
            Db.insertScientist(b.id, "Test Scientist", "0000-0001-0000-0002", "tok-2"),
          ]).pipe(Effect.andThen(() => Db.listScientistsForBatch(b.id))),
        ),
      ),
    );
    expect(scientists).toHaveLength(2);
  });
});

describe("papers", () => {
  it("inserts a paper linked to a scientist", async () => {
    const paper = await run(
      Db.createBatch.pipe(
        Effect.andThen((b) =>
          Db.insertScientist(b.id, "Test Scientist", "0000-0001-2345-6789", "tok-p"),
        ),
        Effect.andThen((s) =>
          Db.insertPaper(s.id, "10.1/great", "A Great Paper", "Abstract here.", 0),
        ),
      ),
    );
    expect(paper.title).toBe("A Great Paper");
    expect(paper.doi).toBe("10.1/great");
    expect(paper.display_order).toBe(0);
  });

  it("lists papers for a scientist in display_order", async () => {
    const papers = await run(
      Db.createBatch.pipe(
        Effect.andThen((b) =>
          Db.insertScientist(b.id, "Test Scientist", "0000-0001-2345-6789", "tok-pp"),
        ),
        Effect.andThen((s) =>
          Effect.all([
            Db.insertPaper(s.id, "10.1/b", "Paper B", "Abstract B.", 1),
            Db.insertPaper(s.id, "10.1/a", "Paper A", "Abstract A.", 0),
          ]).pipe(Effect.andThen(() => Db.listPapersForScientist(s.id))),
        ),
      ),
    );
    expect(papers[0].title).toBe("Paper A");
    expect(papers[1].title).toBe("Paper B");
  });

  it("does not include doi in the survey-facing paper shape", async () => {
    const papers = await run(
      Db.createBatch.pipe(
        Effect.andThen((b) =>
          Db.insertScientist(b.id, "Test Scientist", "0000-0001-2345-6789", "tok-nodoi"),
        ),
        Effect.andThen((s) =>
          Db.insertPaper(s.id, "10.1/secret", "Paper", "Abstract.", 0).pipe(
            Effect.andThen(() => Db.listPapersForScientist(s.id)),
          ),
        ),
      ),
    );
    expect(papers[0]).not.toHaveProperty("doi");
    expect(papers[0]).not.toHaveProperty("scientist_id");
  });

  it("allows the same doi to be shown to two different scientists", async () => {
    const [papersA, papersB] = await run(
      Db.createBatch.pipe(
        Effect.andThen((b) =>
          Effect.all([
            Db.insertScientist(b.id, "Test Scientist", "0000-0001-2345-6789", "tok-share-a"),
            Db.insertScientist(b.id, "Test Scientist", "0000-0002-1234-5678", "tok-share-b"),
          ]),
        ),
        Effect.andThen(([a, b]) =>
          Effect.all([
            Db.insertPaper(a.id, "10.1/shared", "Shared Paper", "Abstract.", 0),
            Db.insertPaper(b.id, "10.1/shared", "Shared Paper", "Abstract.", 0),
          ]).pipe(
            Effect.andThen(() =>
              Effect.all([Db.listPapersForScientist(a.id), Db.listPapersForScientist(b.id)]),
            ),
          ),
        ),
      ),
    );
    expect(papersA).toHaveLength(1);
    expect(papersB).toHaveLength(1);
  });

  it("rejects inserting the same doi twice for the same scientist", async () => {
    await expect(
      run(
        Db.createBatch.pipe(
          Effect.andThen((b) =>
            Db.insertScientist(b.id, "Test Scientist", "0000-0001-2345-6789", "tok-dupe"),
          ),
          Effect.andThen((s) =>
            Db.insertPaper(s.id, "10.1/dupe", "Paper", "Abstract.", 0).pipe(
              Effect.andThen(() =>
                Db.insertPaper(s.id, "10.1/dupe", "Paper Again", "Abstract.", 1),
              ),
            ),
          ),
        ),
      ),
    ).rejects.toBeTruthy();
  });
});

describe("migrate", () => {
  it("rebuilds a responses table created under the old 1-5 CHECK constraint", async () => {
    const responses = await Effect.runPromise(
      Effect.gen(function* () {
        const sql = yield* SqlClient.SqlClient;
        yield* Db.migrate;
        const batch = yield* Db.createBatch;
        const scientist = yield* Db.insertScientist(
          batch.id,
          "Test Scientist",
          "0000-0001-2345-6789",
          "tok-migrate",
        );
        const paperA = yield* Db.insertPaper(scientist.id, "10.1/mig-a", "Paper A", "Abstract.", 0);

        // Simulate a database created before rating 0 ("Not sure") was supported.
        yield* sql`DROP TABLE responses`;
        yield* sql`
          CREATE TABLE responses (
            id           INTEGER PRIMARY KEY AUTOINCREMENT,
            scientist_id INTEGER NOT NULL REFERENCES scientists(id),
            paper_id     INTEGER NOT NULL REFERENCES papers(id),
            rating       INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
            comment      TEXT,
            answered_at  TEXT    NOT NULL DEFAULT (datetime('now')),
            UNIQUE (scientist_id, paper_id)
          )
        `;
        yield* sql`
          INSERT INTO responses (scientist_id, paper_id, rating)
          VALUES (${scientist.id}, ${paperA.id}, 4)
        `;

        yield* Db.migrate;

        const paperB = yield* Db.insertPaper(scientist.id, "10.1/mig-b", "Paper B", "Abstract.", 1);
        yield* Db.upsertResponse(scientist.id, paperB.id, 0);
        return yield* Db.listResponsesForScientist(scientist.id);
      }).pipe(Effect.provide(layer)),
    );
    expect(responses).toHaveLength(2);
    expect(responses.find((r) => r.rating === 4)).toBeTruthy();
    expect(responses.find((r) => r.rating === 0)).toBeTruthy();
  });
});

describe("responses", () => {
  const withScientistAndPaper = <A>(
    f: (ids: { scientistId: number; paperId: number }) => Effect.Effect<A, unknown, Db.DbClient>,
  ) =>
    Db.createBatch.pipe(
      Effect.andThen((b) =>
        Db.insertScientist(b.id, "Test Scientist", "0000-0001-2345-6789", "tok-r"),
      ),
      Effect.andThen((s) =>
        Db.insertPaper(s.id, "10.1/response-paper", "Paper", "Abstract.", 0).pipe(
          Effect.andThen((p) => f({ scientistId: s.id, paperId: p.id })),
        ),
      ),
    );

  it("upserts a response and retrieves it", async () => {
    const responses = await run(
      withScientistAndPaper(({ scientistId, paperId }) =>
        Db.upsertResponse(scientistId, paperId, 4).pipe(
          Effect.andThen(() => Db.listResponsesForScientist(scientistId)),
        ),
      ),
    );
    expect(responses).toHaveLength(1);
    expect(responses[0].rating).toBe(4);
    expect(responses[0].comment).toBeNull();
  });

  it("upserts a response with a comment", async () => {
    const responses = await run(
      withScientistAndPaper(({ scientistId, paperId }) =>
        Db.upsertResponse(scientistId, paperId, 4, "Great paper!").pipe(
          Effect.andThen(() => Db.listResponsesForScientist(scientistId)),
        ),
      ),
    );
    expect(responses).toHaveLength(1);
    expect(responses[0].comment).toBe("Great paper!");
  });

  it("upserts a Not sure response as rating 0", async () => {
    const responses = await run(
      withScientistAndPaper(({ scientistId, paperId }) =>
        Db.upsertResponse(scientistId, paperId, 0).pipe(
          Effect.andThen(() => Db.listResponsesForScientist(scientistId)),
        ),
      ),
    );
    expect(responses).toHaveLength(1);
    expect(responses[0].rating).toBe(0);
  });

  it("rejects a rating outside 0-5", async () => {
    await expect(
      run(
        withScientistAndPaper(({ scientistId, paperId }) =>
          Db.upsertResponse(scientistId, paperId, 6),
        ),
      ),
    ).rejects.toBeTruthy();
  });

  it("updates an existing response on re-answer", async () => {
    const responses = await run(
      withScientistAndPaper(({ scientistId, paperId }) =>
        Db.upsertResponse(scientistId, paperId, 2).pipe(
          Effect.andThen(() => Db.upsertResponse(scientistId, paperId, 5, "Updated comment")),
          Effect.andThen(() => Db.listResponsesForScientist(scientistId)),
        ),
      ),
    );
    expect(responses).toHaveLength(1);
    expect(responses[0].rating).toBe(5);
    expect(responses[0].comment).toBe("Updated comment");
  });

  it("exports all responses joined with batch/scientist/paper data", async () => {
    const rows = await run(
      withScientistAndPaper(({ scientistId, paperId }) =>
        Db.upsertResponse(scientistId, paperId, 3, "Interesting approach").pipe(
          Effect.andThen(() => Db.exportResponses),
        ),
      ),
    );
    expect(rows).toHaveLength(1);
    expect(rows[0].name).toBe("Test Scientist");
    expect(rows[0].orcid).toBe("0000-0001-2345-6789");
    expect(rows[0].title).toBe("Paper");
    expect(rows[0].doi).toBe("10.1/response-paper");
    expect(rows[0].rating).toBe(3);
    expect(rows[0].comment).toBe("Interesting approach");
    expect(typeof rows[0].batch_uploaded_at).toBe("string");
  });
});
