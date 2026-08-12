import { SqlClient } from "@effect/sql";
import { SqliteClient } from "@effect/sql-sqlite-node";
import { Effect } from "effect";
import { ratingLabelFor } from "./ratingLabels.js";

export type DbClient = SqlClient.SqlClient;

export type BatchSource = "csv" | "orcid";
export type Batch = { id: number; uploaded_at: string; source: BatchSource | null };
export type Scientist = {
  id: number;
  batch_id: number;
  name: string;
  orcid: string;
  token: string;
  submitted_at: string | null;
};
export type PaperProvenance = {
  stratum: string;
  candidateRank: number;
  candidatesReturned: number;
};
export type ProvenanceColumns = {
  distance: number | null;
  stratum: string | null;
  candidate_rank: number | null;
  candidates_returned: number | null;
};
export type Paper = {
  id: number;
  scientist_id: number;
  doi: string;
  title: string;
  abstract: string;
  display_order: number;
} & ProvenanceColumns;
export type SurveyPaper = {
  id: number;
  title: string;
  abstract: string;
  display_order: number;
};
export type RatingLabelColumns = {
  rating_label_0: string;
  rating_label_1: string;
  rating_label_2: string;
  rating_label_3: string;
  rating_label_4: string;
  rating_label_5: string;
};
export type Response = {
  id: number;
  scientist_id: number;
  paper_id: number;
  rating: number;
  comment: string | null;
  answered_at: string;
} & RatingLabelColumns;
export type ExportRow = {
  batch_uploaded_at: string;
  source: BatchSource | null;
  name: string;
  orcid: string;
  token: string;
  doi: string;
  title: string;
  abstract: string;
  display_order: number;
  rating: number;
  comment: string | null;
  answered_at: string;
} & ProvenanceColumns &
  RatingLabelColumns;

export const migrate = Effect.gen(function* () {
  const sql = yield* SqlClient.SqlClient;
  yield* sql`PRAGMA journal_mode = WAL`;
  yield* sql`PRAGMA foreign_keys = ON`;
  yield* sql`
    CREATE TABLE IF NOT EXISTS batches (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      uploaded_at TEXT    NOT NULL DEFAULT (datetime('now')),
      source      TEXT
    )
  `;
  const batchColumns = yield* sql<{ name: string }>`PRAGMA table_info(batches)`;
  if (!batchColumns.some((c) => c.name === "source")) {
    yield* sql`ALTER TABLE batches ADD COLUMN source TEXT`;
  }
  yield* sql`
    CREATE TABLE IF NOT EXISTS scientists (
      id           INTEGER PRIMARY KEY AUTOINCREMENT,
      batch_id     INTEGER NOT NULL REFERENCES batches(id),
      name         TEXT    NOT NULL DEFAULT '',
      orcid        TEXT    NOT NULL,
      token        TEXT    NOT NULL UNIQUE,
      submitted_at TEXT
    )
  `;
  const scientistColumns = yield* sql<{ name: string }>`PRAGMA table_info(scientists)`;
  if (!scientistColumns.some((c) => c.name === "name")) {
    yield* sql`ALTER TABLE scientists ADD COLUMN name TEXT NOT NULL DEFAULT ''`;
  }
  yield* sql`
    CREATE TABLE IF NOT EXISTS papers (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      scientist_id  INTEGER NOT NULL REFERENCES scientists(id),
      doi           TEXT    NOT NULL,
      title         TEXT    NOT NULL,
      abstract      TEXT    NOT NULL,
      distance      REAL,
      stratum       TEXT,
      candidate_rank      INTEGER,
      candidates_returned INTEGER,
      display_order INTEGER NOT NULL DEFAULT 0,
      UNIQUE (scientist_id, doi)
    )
  `;
  const papersColumns = yield* sql<{ name: string }>`PRAGMA table_info(papers)`;
  if (!papersColumns.some((c) => c.name === "distance")) {
    yield* sql`ALTER TABLE papers ADD COLUMN distance REAL`;
  }
  if (!papersColumns.some((c) => c.name === "stratum")) {
    yield* sql`ALTER TABLE papers ADD COLUMN stratum TEXT`;
    yield* sql`ALTER TABLE papers ADD COLUMN candidate_rank INTEGER`;
    yield* sql`ALTER TABLE papers ADD COLUMN candidates_returned INTEGER`;
  }
  yield* sql`
    CREATE TABLE IF NOT EXISTS responses (
      id             INTEGER PRIMARY KEY AUTOINCREMENT,
      scientist_id   INTEGER NOT NULL REFERENCES scientists(id),
      paper_id       INTEGER NOT NULL REFERENCES papers(id),
      rating         INTEGER NOT NULL CHECK (rating >= 0 AND rating <= 5),
      comment        TEXT,
      answered_at    TEXT    NOT NULL DEFAULT (datetime('now')),
      rating_label_0 TEXT,
      rating_label_1 TEXT,
      rating_label_2 TEXT,
      rating_label_3 TEXT,
      rating_label_4 TEXT,
      rating_label_5 TEXT,
      UNIQUE (scientist_id, paper_id)
    )
  `;
  const responseColumns = yield* sql<{ name: string }>`PRAGMA table_info(responses)`;
  if (!responseColumns.some((c) => c.name === "comment")) {
    yield* sql`ALTER TABLE responses ADD COLUMN comment TEXT`;
  }
  if (!responseColumns.some((c) => c.name === "rating_label_0")) {
    yield* sql`ALTER TABLE responses ADD COLUMN rating_label_0 TEXT`;
    yield* sql`ALTER TABLE responses ADD COLUMN rating_label_1 TEXT`;
    yield* sql`ALTER TABLE responses ADD COLUMN rating_label_2 TEXT`;
    yield* sql`ALTER TABLE responses ADD COLUMN rating_label_3 TEXT`;
    yield* sql`ALTER TABLE responses ADD COLUMN rating_label_4 TEXT`;
    yield* sql`ALTER TABLE responses ADD COLUMN rating_label_5 TEXT`;
    // Responses recorded before these columns existed were all submitted under
    // the wording live prior to the "How relevant is this paper..." rewording —
    // backfill them with that original label set.
    yield* sql`
      UPDATE responses SET
        rating_label_0 = 'Not sure',
        rating_label_1 = 'Not interesting',
        rating_label_2 = 'Slightly interesting',
        rating_label_3 = 'Moderately interesting',
        rating_label_4 = 'Very interesting',
        rating_label_5 = 'Extremely interesting'
    `;
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
        id             INTEGER PRIMARY KEY AUTOINCREMENT,
        scientist_id   INTEGER NOT NULL REFERENCES scientists(id),
        paper_id       INTEGER NOT NULL REFERENCES papers(id),
        rating         INTEGER NOT NULL CHECK (rating >= 0 AND rating <= 5),
        comment        TEXT,
        answered_at    TEXT    NOT NULL DEFAULT (datetime('now')),
        rating_label_0 TEXT,
        rating_label_1 TEXT,
        rating_label_2 TEXT,
        rating_label_3 TEXT,
        rating_label_4 TEXT,
        rating_label_5 TEXT,
        UNIQUE (scientist_id, paper_id)
      )
    `;
    yield* sql`
      INSERT INTO responses (
        id, scientist_id, paper_id, rating, comment, answered_at,
        rating_label_0, rating_label_1, rating_label_2, rating_label_3, rating_label_4, rating_label_5
      )
      SELECT
        id, scientist_id, paper_id, rating, comment, answered_at,
        rating_label_0, rating_label_1, rating_label_2, rating_label_3, rating_label_4, rating_label_5
      FROM responses_old
    `;
    yield* sql`DROP TABLE responses_old`;
  }
});

export const createBatch = (source: BatchSource) =>
  Effect.gen(function* () {
    const sql = yield* SqlClient.SqlClient;
    const rows = yield* sql<Batch>`
      INSERT INTO batches (uploaded_at, source)
      VALUES (datetime('now'), ${source})
      RETURNING *
    `;
    return rows[0];
  });

export const listBatches = Effect.gen(function* () {
  const sql = yield* SqlClient.SqlClient;
  return yield* sql<Batch>`SELECT * FROM batches ORDER BY id DESC`;
});

export const insertScientist = (batchId: number, name: string, orcid: string, token: string) =>
  Effect.gen(function* () {
    const sql = yield* SqlClient.SqlClient;
    const rows = yield* sql<Scientist>`
      INSERT INTO scientists (batch_id, name, orcid, token)
      VALUES (${batchId}, ${name}, ${orcid}, ${token})
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
  distance: number | null,
  displayOrder: number,
  provenance: PaperProvenance | null = null,
) =>
  Effect.gen(function* () {
    const sql = yield* SqlClient.SqlClient;
    const rows = yield* sql<Paper>`
      INSERT INTO papers (
        scientist_id, doi, title, abstract,
        distance, stratum, candidate_rank, candidates_returned, display_order
      )
      VALUES (
        ${scientistId}, ${doi}, ${title}, ${abstract},
        ${distance}, ${provenance?.stratum ?? null}, ${provenance?.candidateRank ?? null},
        ${provenance?.candidatesReturned ?? null}, ${displayOrder}
      )
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
    const [l0, l1, l2, l3, l4, l5] = [0, 1, 2, 3, 4, 5].map(ratingLabelFor);
    yield* sql`
      INSERT INTO responses (
        scientist_id, paper_id, rating, comment, answered_at,
        rating_label_0, rating_label_1, rating_label_2, rating_label_3, rating_label_4, rating_label_5
      )
      VALUES (
        ${scientistId}, ${paperId}, ${rating}, ${comment}, datetime('now'),
        ${l0}, ${l1}, ${l2}, ${l3}, ${l4}, ${l5}
      )
      ON CONFLICT (scientist_id, paper_id) DO UPDATE SET
        rating         = excluded.rating,
        comment        = excluded.comment,
        answered_at    = excluded.answered_at,
        rating_label_0 = excluded.rating_label_0,
        rating_label_1 = excluded.rating_label_1,
        rating_label_2 = excluded.rating_label_2,
        rating_label_3 = excluded.rating_label_3,
        rating_label_4 = excluded.rating_label_4,
        rating_label_5 = excluded.rating_label_5
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
      b.source,
      s.name,
      s.orcid,
      s.token,
      p.doi,
      p.title,
      p.abstract,
      p.distance,
      p.stratum,
      p.candidate_rank,
      p.candidates_returned,
      p.display_order,
      r.rating,
      r.comment,
      r.answered_at,
      r.rating_label_0,
      r.rating_label_1,
      r.rating_label_2,
      r.rating_label_3,
      r.rating_label_4,
      r.rating_label_5
    FROM responses r
    JOIN scientists s ON s.id = r.scientist_id
    JOIN batches   b ON b.id = s.batch_id
    JOIN papers    p ON p.id = r.paper_id
    ORDER BY b.id, s.id, p.display_order
  `;
});

export const sqliteLayer = (filename: string) => SqliteClient.layer({ filename });
