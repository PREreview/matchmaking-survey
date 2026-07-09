import { parse } from "csv-parse/sync"
import { Effect } from "effect"
import { randomUUID } from "node:crypto"
import * as Db from "../db.js"

type CsvRow = { orcid: string; title: string; abstract: string }

export const importCsv = (csvText: string) =>
  Effect.gen(function* () {
    const rows = parse(csvText, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    }) as CsvRow[]

    const batch = yield* Db.createBatch

    // Group papers by ORCID preserving row order
    const byOrcid = new Map<string, CsvRow[]>()
    for (const row of rows) {
      const list = byOrcid.get(row.orcid) ?? []
      list.push(row)
      byOrcid.set(row.orcid, list)
    }

    const entries: Array<{
      orcid: string
      token: string
      paperCount: number
    }> = []

    for (const [orcid, papers] of byOrcid) {
      const token = randomUUID()
      const scientist = yield* Db.insertScientist(batch.id, orcid, token)
      yield* Effect.all(
        papers.map((p, i) =>
          Db.insertPaper(scientist.id, p.title, p.abstract, i),
        ),
        { concurrency: 1 },
      )
      entries.push({ orcid, token, paperCount: papers.length })
    }

    return { batchId: batch.id, uploadedAt: batch.uploaded_at, entries }
  })

export const getExportRows = Db.exportResponses
