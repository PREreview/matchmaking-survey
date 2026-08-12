import { parse } from "csv-parse/sync";
import { Data, Array, Effect, Schema, flow, Struct, pipe, Option } from "effect";
import { randomUUID } from "node:crypto";
import * as Db from "../db.js";
import { Embeddings } from "../Embeddings/index.js";
import { OpenAlex } from "../OpenAlex.js";
import { Orcid } from "../Orcid.js";
import { Activity, Workflow } from "@effect/workflow";
import iso6391 from "iso-639-1";

const Iso6391Schema = pipe(Schema.String, Schema.filter(iso6391.validate));

type CsvRow = {
  name: string;
  orcid: string;
  title: string;
  abstract: string;
  doi: string;
};

const REQUIRED_CSV_COLUMNS = ["name", "orcid", "title", "abstract", "doi"];

export class DuplicateCsvRowsError extends Data.TaggedError("DuplicateCsvRowsError")<{
  duplicates: Array<{ orcid: string; doi: string }>;
}> {}

export class MissingCsvColumnsError extends Data.TaggedError("MissingCsvColumnsError")<{
  missing: string[];
}> {}

export class UnableToCreateSurvey extends Schema.TaggedError<UnableToCreateSurvey>()(
  "UnableToCreateSurvey",
  { cause: Schema.optional(Schema.Defect) },
) {}

const getCsvHeaderColumns = (csvText: string): string[] => {
  const headerLine = csvText.split(/\r?\n/)[0] ?? "";
  return headerLine.split(",").map((column) => column.trim());
};

const findDuplicateOrcidDoiRows = (rows: CsvRow[]) => {
  const seen = new Set<string>();
  const duplicates: Array<{ orcid: string; doi: string }> = [];
  for (const row of rows) {
    const key = `${row.orcid}|${row.doi}`;
    if (seen.has(key)) duplicates.push({ orcid: row.orcid, doi: row.doi });
    seen.add(key);
  }
  return duplicates;
};

export const addPreprints = (dois: Array.NonEmptyReadonlyArray<string>) =>
  Effect.gen(function* () {
    const embeddings = yield* Embeddings;
    const openAlex = yield* OpenAlex;

    const works = yield* openAlex.getWorks(dois);

    yield* embeddings.addPreprints(works);
  });

export const createSurvey = Workflow.make({
  name: "CreateSurvey",
  payload: {
    idempotencyKey: Schema.UUID,
    languages: Schema.NonEmptyArray(Iso6391Schema),
    orcidId: Schema.String,
  },
  success: Schema.Struct({
    batchId: Schema.Number,
    token: Schema.UUID,
  }),
  error: UnableToCreateSurvey,
  idempotencyKey: flow(Struct.get("idempotencyKey"), String),
});

export const createSurveyLayer = createSurvey.toLayer(({ orcidId, languages }) =>
  Activity.make({
    name: createSurvey.name,
    success: createSurvey.successSchema,
    error: createSurvey.errorSchema,
    execute: Effect.gen(function* () {
      const orcid = yield* Orcid;
      const embeddings = yield* Embeddings;
      const openAlex = yield* OpenAlex;

      const orcidProfile = yield* orcid.getProfile(orcidId);
      if (!Array.isNonEmptyReadonlyArray(orcidProfile.works)) {
        return yield* new UnableToCreateSurvey({
          cause: "no works on ORCID profile",
        });
      }
      const works = yield* openAlex.getWorks(orcidProfile.works);
      const surveyPaperDois = yield* embeddings.getSurveyPapers(works, orcidId, languages);
      const surveyPapers = yield* openAlex.getWorks(Array.map(surveyPaperDois, Struct.get("doi")));

      const token = randomUUID();
      const batch = yield* Db.createBatch("orcid");

      const scientist = yield* Db.insertScientist(batch.id, orcidProfile.name, orcidId, token);

      yield* Effect.all(
        surveyPapers.map((paper, i) =>
          Db.insertPaper(
            scientist.id,
            paper.doi,
            paper.title,
            paper.abstract,
            Option.match(
              Array.findFirst(surveyPaperDois, ({ doi }) => paper.doi === doi),
              { onNone: () => null, onSome: Struct.get("distance") },
            ),
            i,
          ),
        ),
      );

      return { batchId: batch.id, token };
    }).pipe(
      Effect.tapError((error) =>
        Effect.logError("Failed to create survey").pipe(Effect.annotateLogs({ error })),
      ),
      Effect.catchTag(
        "SqlError",
        "UnableToGetProfile",
        "UnableToGetSurveyPapers",
        "UnableToGetWorks",
        (cause) => new UnableToCreateSurvey({ cause }),
      ),
    ),
  }),
);

export const importCsv = (csvText: string) =>
  Effect.gen(function* () {
    const headerColumns = getCsvHeaderColumns(csvText);
    const missing = REQUIRED_CSV_COLUMNS.filter((column) => !headerColumns.includes(column));
    if (missing.length > 0) {
      return yield* Effect.fail(new MissingCsvColumnsError({ missing }));
    }

    const rows = parse(csvText, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    }) as CsvRow[];

    const duplicates = findDuplicateOrcidDoiRows(rows);
    if (duplicates.length > 0) {
      return yield* Effect.fail(new DuplicateCsvRowsError({ duplicates }));
    }

    const batch = yield* Db.createBatch("csv");

    // Group papers by ORCID preserving row order
    const byOrcid = new Map<string, CsvRow[]>();
    for (const row of rows) {
      const list = byOrcid.get(row.orcid) ?? [];
      list.push(row);
      byOrcid.set(row.orcid, list);
    }

    const entries: Array<{
      orcid: string;
      token: string;
      paperCount: number;
    }> = [];

    for (const [orcid, papers] of byOrcid) {
      const token = randomUUID();
      const scientist = yield* Db.insertScientist(batch.id, papers[0].name, orcid, token);
      yield* Effect.all(
        papers.map((p, i) => Db.insertPaper(scientist.id, p.doi, p.title, p.abstract, null, i)),
        { concurrency: 1 },
      );
      entries.push({ orcid, token, paperCount: papers.length });
    }

    return { batchId: batch.id, uploadedAt: batch.uploaded_at, entries };
  });

export const getExportRows = Db.exportResponses;
