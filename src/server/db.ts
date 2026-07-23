import { SqlClient } from "@effect/sql";
import { SqliteClient } from "@effect/sql-sqlite-node";
import { Effect } from "effect";

export type DbClient = SqlClient.SqlClient;

export type Batch = { id: number; uploaded_at: string };
export type Scientist = {
  id: number;
  batch_id: number;
  orcid: string;
  token: string;
  submitted_at: string | null;
};
export type Paper = {
  id: number;
  scientist_id: number;
  doi: string;
  title: string;
  abstract: string;
  display_order: number;
};
export type SurveyPaper = {
  id: number;
  title: string;
  abstract: string;
  display_order: number;
};
export type Response = {
  id: number;
  scientist_id: number;
  paper_id: number;
  rating: number;
  comment: string | null;
  answered_at: string;
};
export type ExportRow = {
  batch_uploaded_at: string;
  orcid: string;
  token: string;
  doi: string;
  title: string;
  abstract: string;
  rating: number;
  comment: string | null;
  answered_at: string;
};

export const migrate = Effect.gen(function* () {
  const sql = yield* SqlClient.SqlClient;
  yield* sql`PRAGMA journal_mode = WAL`;
  yield* sql`PRAGMA foreign_keys = ON`;
  yield* sql`
    CREATE TABLE IF NOT EXISTS batches (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      uploaded_at TEXT    NOT NULL DEFAULT (datetime('now'))
    )
  `;
  yield* sql`
    CREATE TABLE IF NOT EXISTS scientists (
      id           INTEGER PRIMARY KEY AUTOINCREMENT,
      batch_id     INTEGER NOT NULL REFERENCES batches(id),
      orcid        TEXT    NOT NULL,
      token        TEXT    NOT NULL UNIQUE,
      submitted_at TEXT
    )
  `;
  yield* sql`
    CREATE TABLE IF NOT EXISTS papers (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      scientist_id  INTEGER NOT NULL REFERENCES scientists(id),
      doi           TEXT    NOT NULL,
      title         TEXT    NOT NULL,
      abstract      TEXT    NOT NULL,
      display_order INTEGER NOT NULL DEFAULT 0,
      UNIQUE (scientist_id, doi)
    )
  `;
  yield* sql`
    CREATE TABLE IF NOT EXISTS responses (
      id           INTEGER PRIMARY KEY AUTOINCREMENT,
      scientist_id INTEGER NOT NULL REFERENCES scientists(id),
      paper_id     INTEGER NOT NULL REFERENCES papers(id),
      rating       INTEGER NOT NULL CHECK (rating >= 0 AND rating <= 5),
      comment      TEXT,
      answered_at  TEXT    NOT NULL DEFAULT (datetime('now')),
      UNIQUE (scientist_id, paper_id)
    )
  `;
  const responseColumns = yield* sql<{ name: string }>`PRAGMA table_info(responses)`;
  if (!responseColumns.some((c) => c.name === "comment")) {
    yield* sql`ALTER TABLE responses ADD COLUMN comment TEXT`;
  }

  // SQLite can't ALTER a CHECK constraint in place, so a table created before
  // rating 0 ("not sure") was introduced needs rebuilding onto the new schema.
  const responsesSchema = yield* sql<{ sql: string }>`
    SELECT sql FROM sqlite_master WHERE type = 'table' AND name = 'responses'
  `;
  if (responsesSchema[0]?.sql.includes("rating >= 1")) {
    yield* sql`ALTER TABLE responses RENAME TO responses_old`;
    yield* sql`
      CREATE TABLE responses (
        id           INTEGER PRIMARY KEY AUTOINCREMENT,
        scientist_id INTEGER NOT NULL REFERENCES scientists(id),
        paper_id     INTEGER NOT NULL REFERENCES papers(id),
        rating       INTEGER NOT NULL CHECK (rating >= 0 AND rating <= 5),
        comment      TEXT,
        answered_at  TEXT    NOT NULL DEFAULT (datetime('now')),
        UNIQUE (scientist_id, paper_id)
      )
    `;
    yield* sql`
      INSERT INTO responses (id, scientist_id, paper_id, rating, comment, answered_at)
      SELECT id, scientist_id, paper_id, rating, comment, answered_at FROM responses_old
    `;
    yield* sql`DROP TABLE responses_old`;
  }
});

export const createBatch = Effect.gen(function* () {
  const sql = yield* SqlClient.SqlClient;
  const rows = yield* sql<Batch>`
    INSERT INTO batches (uploaded_at) VALUES (datetime('now')) RETURNING *
  `;
  return rows[0];
});

export const listBatches = Effect.gen(function* () {
  const sql = yield* SqlClient.SqlClient;
  return yield* sql<Batch>`SELECT * FROM batches ORDER BY id DESC`;
});

export const insertScientist = (batchId: number, orcid: string, token: string) =>
  Effect.gen(function* () {
    const sql = yield* SqlClient.SqlClient;
    const rows = yield* sql<Scientist>`
      INSERT INTO scientists (batch_id, orcid, token)
      VALUES (${batchId}, ${orcid}, ${token})
      RETURNING *
    `;
    return rows[0];
  });

export const getScientistByToken = (token: string) =>
  Effect.gen(function* () {
    const sql = yield* SqlClient.SqlClient;
    const rows = yield* sql<Scientist>`
      SELECT * FROM scientists WHERE token = ${token} LIMIT 1
    `;
    return rows[0] ?? null;
  });

export const markSubmitted = (scientistId: number) =>
  Effect.gen(function* () {
    const sql = yield* SqlClient.SqlClient;
    yield* sql`
      UPDATE scientists SET submitted_at = datetime('now') WHERE id = ${scientistId}
    `;
  });

export const listScientistsForBatch = (batchId: number) =>
  Effect.gen(function* () {
    const sql = yield* SqlClient.SqlClient;
    return yield* sql<Scientist>`
      SELECT * FROM scientists WHERE batch_id = ${batchId} ORDER BY id
    `;
  });

export const insertPaper = (
  scientistId: number,
  doi: string,
  title: string,
  abstract: string,
  displayOrder: number,
) =>
  Effect.gen(function* () {
    const sql = yield* SqlClient.SqlClient;
    const rows = yield* sql<Paper>`
      INSERT INTO papers (scientist_id, doi, title, abstract, display_order)
      VALUES (${scientistId}, ${doi}, ${title}, ${abstract}, ${displayOrder})
      RETURNING *
    `;
    return rows[0];
  });

export const listPapersForScientist = (scientistId: number) =>
  Effect.gen(function* () {
    const sql = yield* SqlClient.SqlClient;
    return yield* sql<SurveyPaper>`
      SELECT id, title, abstract, display_order
      FROM papers WHERE scientist_id = ${scientistId} ORDER BY display_order
    `;
  });

export const upsertResponse = (
  scientistId: number,
  paperId: number,
  rating: number,
  comment: string | null = null,
) =>
  Effect.gen(function* () {
    const sql = yield* SqlClient.SqlClient;
    yield* sql`
      INSERT INTO responses (scientist_id, paper_id, rating, comment, answered_at)
      VALUES (${scientistId}, ${paperId}, ${rating}, ${comment}, datetime('now'))
      ON CONFLICT (scientist_id, paper_id) DO UPDATE SET
        rating      = excluded.rating,
        comment     = excluded.comment,
        answered_at = excluded.answered_at
    `;
  });

export const listResponsesForScientist = (scientistId: number) =>
  Effect.gen(function* () {
    const sql = yield* SqlClient.SqlClient;
    return yield* sql<Response>`
      SELECT * FROM responses WHERE scientist_id = ${scientistId} ORDER BY paper_id
    `;
  });

// rating is 1-5, or 0 for "Not sure" — exclude 0 before averaging or charting.
export const exportResponses = Effect.gen(function* () {
  const sql = yield* SqlClient.SqlClient;
  return yield* sql<ExportRow>`
    SELECT
      b.uploaded_at AS batch_uploaded_at,
      s.orcid,
      s.token,
      p.doi,
      p.title,
      p.abstract,
      r.rating,
      r.comment,
      r.answered_at
    FROM responses r
    JOIN scientists s ON s.id = r.scientist_id
    JOIN batches   b ON b.id = s.batch_id
    JOIN papers    p ON p.id = r.paper_id
    ORDER BY b.id, s.id, p.display_order
  `;
});

export const sqliteLayer = (filename: string) => SqliteClient.layer({ filename });
