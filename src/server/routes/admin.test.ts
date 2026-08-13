import { SqliteClient } from "@effect/sql-sqlite-node";
import { Array, Effect, Layer } from "effect";
import { WorkflowEngine } from "@effect/workflow";
import { beforeEach, describe, expect, it } from "vitest";
import * as Db from "../db.js";
import * as Admin from "./admin.js";
import type { Doi, Paper } from "../Embeddings/Shared.js";
import { UnableToAddPreprints } from "../Embeddings/Shared.js";
import { Embeddings } from "../Embeddings/index.js";
import { OpenAlex, UnableToGetWorks } from "../OpenAlex/index.js";

let layer: ReturnType<typeof SqliteClient.layer>;

beforeEach(() => {
  layer = SqliteClient.layer({ filename: ":memory:" });
});

const run = <A>(effect: Effect.Effect<A, unknown, Db.DbClient>) =>
  Effect.runPromise(Db.migrate.pipe(Effect.andThen(effect), Effect.provide(layer)));

const csvText = `name,orcid,title,abstract,doi
Ada Lovelace,0000-0001-1111-1111,Paper Alpha,Abstract for alpha.,10.1/alpha
Ada Lovelace,0000-0001-1111-1111,Paper Beta,Abstract for beta.,10.1/beta
Grace Hopper,0000-0002-2222-2222,Paper Gamma,Abstract for gamma.,10.1/gamma`;

describe("importCsv", () => {
  it("creates a batch and returns token entries per scientist", async () => {
    const result = await run(Admin.importCsv(csvText));
    expect(result.batchId).toBeGreaterThan(0);
    // two unique ORCIDs → two entries
    expect(result.entries).toHaveLength(2);
    expect(result.entries.every((e) => typeof e.token === "string")).toBe(true);
    expect(result.entries.map((e) => e.orcid).sort()).toEqual([
      "0000-0001-1111-1111",
      "0000-0002-2222-2222",
    ]);
  });

  it("assigns correct number of papers to each scientist", async () => {
    const result = await run(Admin.importCsv(csvText));
    const orcid1Entry = result.entries.find((e) => e.orcid === "0000-0001-1111-1111");
    expect(orcid1Entry?.paperCount).toBe(2);
    const orcid2Entry = result.entries.find((e) => e.orcid === "0000-0002-2222-2222");
    expect(orcid2Entry?.paperCount).toBe(1);
  });

  it("persists papers retrievable via token", async () => {
    const { scientist, papers } = await run(
      Admin.importCsv(csvText).pipe(
        Effect.andThen(({ entries }) => {
          const token = entries.find((e) => e.orcid === "0000-0001-1111-1111")!.token;
          return Db.getScientistByToken(token).pipe(
            Effect.andThen((s) =>
              Db.listPapersForScientist(s!.id).pipe(
                Effect.map((ps) => ({ scientist: s, papers: ps })),
              ),
            ),
          );
        }),
      ),
    );
    expect(scientist).not.toBeNull();
    expect(scientist?.name).toBe("Ada Lovelace");
    expect(papers).toHaveLength(2);
    expect(papers[0].title).toBe("Paper Alpha");
  });

  it("second import creates a new batch with new tokens", async () => {
    const { first, second } = await run(
      Admin.importCsv(csvText).pipe(
        Effect.andThen((first) =>
          Admin.importCsv(csvText).pipe(Effect.map((second) => ({ first, second }))),
        ),
      ),
    );
    expect(second.batchId).toBeGreaterThan(first.batchId);
    expect(first.entries[0].token).not.toBe(second.entries[0].token);
  });

  it("allows the same doi under two different orcids", async () => {
    const sharedCsv = `name,orcid,title,abstract,doi
Ada Lovelace,0000-0001-1111-1111,Shared Paper,Shared abstract.,10.1/shared
Grace Hopper,0000-0002-2222-2222,Shared Paper,Shared abstract.,10.1/shared`;
    const result = await run(Admin.importCsv(sharedCsv));
    expect(result.entries).toHaveLength(2);
    expect(result.entries.every((e) => e.paperCount === 1)).toBe(true);
  });

  it("rejects a csv with a duplicate orcid+doi row and writes nothing", async () => {
    const duplicateCsv = `name,orcid,title,abstract,doi
Ada Lovelace,0000-0001-1111-1111,Paper Alpha,Abstract for alpha.,10.1/alpha
Ada Lovelace,0000-0001-1111-1111,Paper Alpha Reprint,Same paper again.,10.1/alpha`;
    await expect(run(Admin.importCsv(duplicateCsv))).rejects.toBeTruthy();
    const batches = await run(Db.listBatches);
    expect(batches).toHaveLength(0);
  });

  it("rejects a csv missing the name column and writes nothing", async () => {
    const legacyCsv = `orcid,title,abstract,doi
0000-0001-1111-1111,Paper Alpha,Abstract for alpha.,10.1/alpha`;
    const result = await run(Effect.either(Admin.importCsv(legacyCsv)));
    if (result._tag !== "Left" || !(result.left instanceof Admin.MissingCsvColumnsError)) {
      throw new Error("expected a MissingCsvColumnsError");
    }
    expect(result.left.missing).toEqual(["name"]);
    const batches = await run(Db.listBatches);
    expect(batches).toHaveLength(0);
  });

  it("rejects a csv missing multiple columns and reports all of them", async () => {
    const sparseCsv = `orcid,title
0000-0001-1111-1111,Paper Alpha`;
    const result = await run(Effect.either(Admin.importCsv(sparseCsv)));
    if (result._tag !== "Left" || !(result.left instanceof Admin.MissingCsvColumnsError)) {
      throw new Error("expected a MissingCsvColumnsError");
    }
    expect(result.left.missing).toEqual(["name", "abstract", "doi"]);
  });

  it("accepts a csv with columns in a different order than documented", async () => {
    const reorderedCsv = `doi,name,abstract,orcid,title
10.1/alpha,Ada Lovelace,Abstract for alpha.,0000-0001-1111-1111,Paper Alpha`;
    const result = await run(Admin.importCsv(reorderedCsv));
    expect(result.entries).toHaveLength(1);
  });
});

describe("getExportRows", () => {
  it("returns empty array when no responses exist", async () => {
    const rows = await run(Admin.getExportRows);
    expect(rows).toHaveLength(0);
  });

  it("returns joined rows after a response is recorded", async () => {
    const rows = await run(
      Admin.importCsv(csvText).pipe(
        Effect.andThen(({ entries }) => {
          const entry = entries.find((e) => e.orcid === "0000-0002-2222-2222")!;
          return Db.getScientistByToken(entry.token);
        }),
        Effect.andThen((scientist) =>
          Db.listPapersForScientist(scientist!.id).pipe(
            Effect.andThen((papers) => Db.upsertResponse(scientist!.id, papers[0].id, 5)),
          ),
        ),
        Effect.andThen(() => Admin.getExportRows),
      ),
    );
    expect(rows).toHaveLength(1);
    expect(rows[0].name).toBe("Grace Hopper");
    expect(rows[0].orcid).toBe("0000-0002-2222-2222");
    expect(rows[0].rating).toBe(5);
    expect(rows[0].doi).toBe("10.1/gamma");
    expect(rows[0].rating_label_5).toBe("This is my research area");
  });
});

describe("addPreprints", () => {
  const runAddPreprints = (options: {
    alreadyStored?: ReadonlyArray<string>;
    getWorks?: (
      dois: Array.NonEmptyReadonlyArray<string>,
    ) => Effect.Effect<ReadonlyArray<Paper>, UnableToGetWorks>;
    addPreprints?: (works: ReadonlyArray<Paper>) => Effect.Effect<void, UnableToAddPreprints>;
  }) => {
    const calls: {
      existingDois: Doi[][];
      getWorks: Doi[][];
      addPreprints: Paper[][];
    } = { existingDois: [], getWorks: [], addPreprints: [] };

    const embeddingsService = {
      getSurveyPapers: () => Effect.die("getSurveyPapers should not be called"),
      existingDois: (dois: ReadonlyArray<Doi>) => {
        calls.existingDois.push([...dois]);
        return Effect.succeed(
          new Set((options.alreadyStored ?? []).map((doi) => doi.toLowerCase())),
        );
      },
      addPreprints: (works: ReadonlyArray<Paper>) => {
        calls.addPreprints.push([...works]);
        return options.addPreprints ? options.addPreprints(works) : Effect.succeed(void 0);
      },
    };

    const openAlexService = {
      getWorks: (dois: Array.NonEmptyReadonlyArray<Doi>) => {
        calls.getWorks.push([...dois]);
        return options.getWorks
          ? options.getWorks(dois)
          : Effect.succeed(
              dois.map((doi) => ({
                doi,
                title: `Title for ${doi}`,
                abstract: "Abstract.",
                authors: [],
              })),
            );
      },
    };

    return {
      run: (dois: ReadonlyArray<string>) =>
        Effect.runPromise(
          Admin.addPreprints(dois as Array.NonEmptyReadonlyArray<string>).pipe(
            Effect.provide(Layer.succeed(Embeddings, embeddingsService)),
            Effect.provide(Layer.succeed(OpenAlex, openAlexService)),
          ),
        ),
      calls,
    };
  };

  it("lowercases and dedupes submitted DOIs and returns counts", async () => {
    const { run, calls } = runAddPreprints({ alreadyStored: ["10.2/beta"] });

    const result = await run(["10.1/Alpha", "10.1/alpha", "10.2/BETA"]);

    expect(result).toEqual({ submitted: 2, alreadyStored: 1, ingested: 1, chunksWithFailures: 0 });
    expect(calls.existingDois).toEqual([["10.1/alpha", "10.2/beta"]]);
    expect(calls.getWorks).toEqual([["10.1/alpha"]]);
    expect(calls.addPreprints).toHaveLength(1);
  });

  it("skips already-stored DOIs entirely", async () => {
    const { run, calls } = runAddPreprints({ alreadyStored: ["10.1/a", "10.1/b"] });

    const result = await run(["10.1/a", "10.1/b"]);

    expect(result).toEqual({ submitted: 2, alreadyStored: 2, ingested: 0, chunksWithFailures: 0 });
    expect(calls.getWorks).toEqual([]);
    expect(calls.addPreprints).toEqual([]);
  });

  it("chunks a large list into batches of 500", async () => {
    const { run, calls } = runAddPreprints({});
    const dois = Array.makeBy(1001, (i) => `10.1/x${i}`);

    const result = await run(dois);

    expect(result.submitted).toBe(1001);
    expect(result.ingested).toBe(1001);
    expect(result.chunksWithFailures).toBe(0);
    expect(calls.getWorks.map((c) => c.length)).toEqual([500, 500, 1]);
    expect(calls.addPreprints.map((w) => w.length)).toEqual([500, 500, 1]);
  });

  it("counts ingested as works returned rather than submitted DOIs", async () => {
    const { run, calls } = runAddPreprints({
      getWorks: (dois) =>
        Effect.succeed(
          dois
            .filter((doi) => doi === "10.1/a")
            .map((doi) => ({ doi, title: `Title for ${doi}`, abstract: "Abstract.", authors: [] })),
        ),
    });

    const result = await run(["10.1/a", "10.1/b"]);

    expect(result).toEqual({ submitted: 2, alreadyStored: 0, ingested: 1, chunksWithFailures: 0 });
    expect(calls.getWorks).toEqual([["10.1/a", "10.1/b"]]);
    expect(calls.addPreprints).toHaveLength(1);
  });

  it("continues with the next chunk when one chunk fails to fetch works", async () => {
    const dois = Array.makeBy(501, (i) => `10.1/x${i}`);
    const { run, calls } = runAddPreprints({
      getWorks: (chunk) =>
        chunk.includes("10.1/x0")
          ? Effect.fail(new UnableToGetWorks({ cause: "boom" }))
          : Effect.succeed(
              chunk.map((doi) => ({
                doi,
                title: `Title for ${doi}`,
                abstract: "Abstract.",
                authors: [],
              })),
            ),
    });

    const result = await run(dois);

    expect(result).toEqual({
      submitted: 501,
      alreadyStored: 0,
      ingested: 1,
      chunksWithFailures: 1,
    });
    expect(calls.getWorks).toHaveLength(2);
    expect(calls.addPreprints).toHaveLength(1);
  });

  it("continues with the next chunk when one chunk fails to be stored", async () => {
    const dois = Array.makeBy(501, (i) => `10.1/x${i}`);
    let call = 0;
    const { run, calls } = runAddPreprints({
      addPreprints: () => {
        call++;
        return call === 1
          ? Effect.fail(new UnableToAddPreprints({ cause: "boom" }))
          : Effect.succeed(void 0);
      },
    });

    const result = await run(dois);

    expect(result).toEqual({
      submitted: 501,
      alreadyStored: 0,
      ingested: 1,
      chunksWithFailures: 1,
    });
    expect(calls.getWorks).toHaveLength(2);
    expect(calls.addPreprints).toHaveLength(2);
  });
});

describe("ingestPreprints", () => {
  it("derives a deterministic execution id from normalized DOIs", async () => {
    const run = (dois: Array.NonEmptyReadonlyArray<string>) =>
      Effect.runPromise(Admin.ingestPreprints.executionId({ dois }));

    const sameOrder = await run(["10.1/B", "10.1/A", "10.1/b"]);
    const resubmitted = await run(["10.1/a", "10.1/b"]);
    const different = await run(["10.1/a", "10.1/b", "10.1/c"]);

    expect(sameOrder).toBe(resubmitted);
    expect(sameOrder).not.toBe(different);
    expect(sameOrder).toMatch(/^[0-9a-f]+$/);
  });

  it("runs addPreprints through the workflow engine and returns counts", async () => {
    const embeddingsService = {
      getSurveyPapers: () => Effect.die("getSurveyPapers should not be called"),
      existingDois: (_dois: ReadonlyArray<Doi>) => Effect.succeed(new Set(["10.1/b"])),
      addPreprints: (_works: ReadonlyArray<Paper>) => Effect.succeed(void 0),
    };

    const openAlexService = {
      getWorks: (dois: Array.NonEmptyReadonlyArray<Doi>) =>
        Effect.succeed(
          dois.map((doi) => ({
            doi,
            title: `Title for ${doi}`,
            abstract: "Abstract.",
            authors: [],
          })),
        ),
    };

    const layer = Layer.provideMerge(
      Admin.ingestPreprintsLayer,
      Layer.mergeAll(
        Layer.succeed(Embeddings, embeddingsService),
        Layer.succeed(OpenAlex, openAlexService),
        WorkflowEngine.layerMemory,
      ),
    );

    const result = await Effect.runPromise(
      Admin.ingestPreprints
        .execute({
          dois: ["10.1/A", "10.1/b"] as Array.NonEmptyReadonlyArray<string>,
        })
        .pipe(Effect.provide(layer)),
    );

    expect(result).toEqual({ submitted: 2, alreadyStored: 1, ingested: 1, chunksWithFailures: 0 });
  });
});
