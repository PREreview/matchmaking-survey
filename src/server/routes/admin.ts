import { parse } from "csv-parse/sync";
import { Data, Array, Chunk, Effect, Schema, flow, Struct, pipe, Option, Random } from "effect";
import { createHash, randomUUID } from "node:crypto";
import * as Db from "../db.js";
import { Embeddings } from "../Embeddings/index.js";
import { UnableToAddPreprints } from "../Embeddings/Shared.js";
import { OpenAlex } from "../OpenAlex/index.js";
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

const ADD_PREPRINTS_CHUNK_SIZE = 200;

export const addPreprints = (
  dois: Array.NonEmptyReadonlyArray<string>,
): Effect.Effect<
  { submitted: number; alreadyStored: number; ingested: number; chunksWithFailures: number },
  UnableToAddPreprints,
  Embeddings | OpenAlex
> =>
  Effect.gen(function* () {
    const embeddings = yield* Embeddings;
    const openAlex = yield* OpenAlex;

    const submitted = Array.map(dois, (doi) => doi.toLowerCase());

    const alreadyStored = yield* embeddings.existingDois(submitted);

    const toIngest = submitted.filter((doi) => !alreadyStored.has(doi));

    let ingested = 0;
    let chunksWithFailures = 0;
    for (const chunk of Array.chunksOf(toIngest, ADD_PREPRINTS_CHUNK_SIZE)) {
      const result = yield* Effect.gen(function* () {
        const works = yield* openAlex.getWorks(chunk);
        yield* embeddings.addPreprints(works);
        return works;
      }).pipe(
        Effect.tapError((error) =>
          Effect.logError("Failed to ingest preprints chunk").pipe(
            Effect.annotateLogs({ chunkSize: chunk.length, error }),
          ),
        ),
        Effect.either,
      );

      if (result._tag === "Left") {
        chunksWithFailures++;
        continue;
      }

      ingested += result.right.length;

      yield* Effect.logInfo("Ingested preprints chunk").pipe(
        Effect.annotateLogs({ chunkSize: chunk.length, ingested: result.right.length }),
      );
    }

    return {
      submitted: submitted.length,
      alreadyStored: alreadyStored.size,
      ingested,
      chunksWithFailures,
    };
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
      if (!Array.isNonEmptyReadonlyArray(works)) {
        return yield* new UnableToCreateSurvey({
          cause: "no works with a title and abstract on ORCID profile",
        });
      }
      const surveyPaperDois = yield* embeddings.getSurveyPapers(works, orcidId, languages);
      const surveyPapers = yield* openAlex.getWorks(Array.map(surveyPaperDois, Struct.get("doi")));

      // Papers are shown to the scientist in a fully random order, independent of match quality.
      const shuffledSurveyPapers = yield* pipe(
        Random.shuffle(surveyPapers),
        Effect.map(Chunk.toReadonlyArray),
      );

      const token = randomUUID();
      const batch = yield* Db.createBatch;

      const scientist = yield* Db.insertScientist(batch.id, orcidProfile.name, orcidId, token);

      yield* Effect.all(
        shuffledSurveyPapers.map((paper, i) =>
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

export class UnableToIngestPreprints extends Schema.TaggedError<UnableToIngestPreprints>()(
  "UnableToIngestPreprints",
  { cause: Schema.optional(Schema.Defect) },
) {}

export const ingestPreprints = Workflow.make({
  name: "IngestPreprints",
  payload: {
    dois: Schema.NonEmptyArray(Schema.NonEmptyString),
  },
  success: Schema.Struct({
    submitted: Schema.Number,
    alreadyStored: Schema.Number,
    ingested: Schema.Number,
    chunksWithFailures: Schema.Number,
  }),
  error: UnableToIngestPreprints,
  idempotencyKey: ({ dois }) => {
    const normalized = [...new Set(dois.map((doi) => doi.toLowerCase()))].sort();
    return createHash("sha256").update(JSON.stringify(normalized)).digest("hex");
  },
});

export const ingestPreprintsLayer = ingestPreprints.toLayer(({ dois }) =>
  Activity.make({
    name: ingestPreprints.name,
    success: ingestPreprints.successSchema,
    error: ingestPreprints.errorSchema,
    execute: addPreprints(dois).pipe(
      Effect.tapError((error) =>
        Effect.logError("Failed to ingest preprints").pipe(Effect.annotateLogs({ error })),
      ),
      Effect.catchTag("UnableToAddPreprints", (cause) => new UnableToIngestPreprints({ cause })),
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

    const batch = yield* Db.createBatch;

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
