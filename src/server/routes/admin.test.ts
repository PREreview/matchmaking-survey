import { SqliteClient } from "@effect/sql-sqlite-node";
import { Effect } from "effect";
import { beforeEach, describe, expect, it } from "vitest";
import * as Db from "../db.js";
import * as Admin from "./admin.js";

let layer: ReturnType<typeof SqliteClient.layer>;

beforeEach(() => {
  layer = SqliteClient.layer({ filename: ":memory:" });
});

const run = <A>(effect: Effect.Effect<A, unknown, Db.DbClient>) =>
  Effect.runPromise(Db.migrate.pipe(Effect.andThen(effect), Effect.provide(layer)));

const csvText = `orcid,title,abstract,doi
0000-0001-1111-1111,Paper Alpha,Abstract for alpha.,10.1/alpha
0000-0001-1111-1111,Paper Beta,Abstract for beta.,10.1/beta
0000-0002-2222-2222,Paper Gamma,Abstract for gamma.,10.1/gamma`;

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
    const sharedCsv = `orcid,title,abstract,doi
0000-0001-1111-1111,Shared Paper,Shared abstract.,10.1/shared
0000-0002-2222-2222,Shared Paper,Shared abstract.,10.1/shared`;
    const result = await run(Admin.importCsv(sharedCsv));
    expect(result.entries).toHaveLength(2);
    expect(result.entries.every((e) => e.paperCount === 1)).toBe(true);
  });

  it("rejects a csv with a duplicate orcid+doi row and writes nothing", async () => {
    const duplicateCsv = `orcid,title,abstract,doi
0000-0001-1111-1111,Paper Alpha,Abstract for alpha.,10.1/alpha
0000-0001-1111-1111,Paper Alpha Reprint,Same paper again.,10.1/alpha`;
    await expect(run(Admin.importCsv(duplicateCsv))).rejects.toBeTruthy();
    const batches = await run(Db.listBatches);
    expect(batches).toHaveLength(0);
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
    expect(rows[0].orcid).toBe("0000-0002-2222-2222");
    expect(rows[0].rating).toBe(5);
    expect(rows[0].doi).toBe("10.1/gamma");
  });
});
