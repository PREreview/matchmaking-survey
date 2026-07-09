import { useEffect, useRef, useState } from "react"

type Entry = { orcid: string; token: string; paperCount: number }
type UploadResult = { batchId: number; uploadedAt: string; entries: Entry[] }
type Scientist = { id: number; orcid: string; token: string; submitted_at: string | null }
type Batch = { id: number; uploaded_at: string; scientists: Scientist[] }

const s: Record<string, React.CSSProperties> = {
  page: { maxWidth: "900px", margin: "0 auto", padding: "2rem" },
  section: {
    background: "#fff",
    borderRadius: "8px",
    padding: "1.5rem",
    marginBottom: "1.5rem",
    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
  },
  h1: { marginTop: 0 },
  h2: { marginTop: 0, fontSize: "1.1rem" },
  input: { padding: "0.5rem", fontSize: "1rem", marginRight: "0.5rem" },
  btn: {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
    background: "#0d6efd",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
  },
  btnSm: {
    padding: "0.25rem 0.75rem",
    fontSize: "0.85rem",
    cursor: "pointer",
    background: "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
  },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" },
  th: {
    textAlign: "left",
    padding: "0.4rem 0.6rem",
    borderBottom: "2px solid #dee2e6",
    whiteSpace: "nowrap",
  },
  td: { padding: "0.4rem 0.6rem", borderBottom: "1px solid #dee2e6" },
  mono: { fontFamily: "monospace", fontSize: "0.85rem" },
  error: { color: "#dc3545", marginTop: "0.5rem" },
  success: { color: "#198754", marginTop: "0.5rem" },
  badge: {
    display: "inline-block",
    padding: "0.1rem 0.5rem",
    borderRadius: "99px",
    fontSize: "0.75rem",
    fontWeight: 600,
  },
}

function usePassword() {
  const [password, setPassword] = useState("")
  return { password, setPassword }
}

function authHeader(password: string) {
  return { Authorization: `Bearer ${password}` }
}

export default function AdminPage() {
  const { password, setPassword } = usePassword()
  const [batches, setBatches] = useState<Batch[]>([])
  const [uploadResult, setUploadResult] = useState<UploadResult | null>(null)
  const [uploadError, setUploadError] = useState("")
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const origin = window.location.origin

  const loadBatches = async (pw: string) => {
    const res = await fetch("/api/admin/batches", {
      headers: authHeader(pw),
    })
    if (res.ok) setBatches(await res.json())
  }

  useEffect(() => {
    if (password) loadBatches(password)
  }, [password])

  const handleUpload = async () => {
    const file = fileRef.current?.files?.[0]
    if (!file) return
    setUploading(true)
    setUploadError("")
    setUploadResult(null)
    try {
      const text = await file.text()
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        headers: { "content-type": "text/plain", ...authHeader(password) },
        body: text,
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: res.statusText }))
        setUploadError(err.error ?? "Upload failed")
      } else {
        const result: UploadResult = await res.json()
        setUploadResult(result)
        await loadBatches(password)
      }
    } catch (e) {
      setUploadError(String(e))
    } finally {
      setUploading(false)
    }
  }

  const copyAllLinks = (entries: Entry[]) => {
    const text = entries.map((e) => `${e.orcid}\t${origin}/s/${e.token}`).join("\n")
    navigator.clipboard.writeText(text)
  }

  return (
    <div style={s.page}>
      <h1 style={s.h1}>Survey Admin</h1>

      {/* Auth */}
      <div style={s.section}>
        <h2 style={s.h2}>Authentication</h2>
        <input
          style={s.input}
          type="password"
          placeholder="Admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={s.btn} onClick={() => loadBatches(password)}>
          Load
        </button>
      </div>

      {/* Upload */}
      <div style={s.section}>
        <h2 style={s.h2}>Upload CSV</h2>
        <p style={{ margin: "0 0 0.75rem", color: "#6c757d", fontSize: "0.9rem" }}>
          Expected columns: <code>orcid, title, abstract</code>
        </p>
        <input ref={fileRef} type="file" accept=".csv,text/csv,text/plain" style={{ marginRight: "0.5rem" }} />
        <button style={s.btn} onClick={handleUpload} disabled={uploading}>
          {uploading ? "Uploading…" : "Upload"}
        </button>
        {uploadError && <p style={s.error}>{uploadError}</p>}
        {uploadResult && (
          <div style={{ marginTop: "1rem" }}>
            <p style={s.success}>
              Batch #{uploadResult.batchId} created — {uploadResult.entries.length} scientists
            </p>
            <button style={s.btnSm} onClick={() => copyAllLinks(uploadResult.entries)}>
              Copy all links
            </button>
            <table style={{ ...s.table, marginTop: "0.75rem" }}>
              <thead>
                <tr>
                  <th style={s.th}>ORCID</th>
                  <th style={s.th}>Papers</th>
                  <th style={s.th}>Survey URL</th>
                </tr>
              </thead>
              <tbody>
                {uploadResult.entries.map((e) => (
                  <tr key={e.token}>
                    <td style={{ ...s.td, ...s.mono }}>{e.orcid}</td>
                    <td style={s.td}>{e.paperCount}</td>
                    <td style={{ ...s.td, ...s.mono }}>
                      <a href={`/s/${e.token}`} target="_blank" rel="noreferrer">
                        {origin}/s/{e.token}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Existing batches */}
      {batches.length > 0 && (
        <div style={s.section}>
          <h2 style={s.h2}>All Batches</h2>
          {batches.map((batch) => (
            <details key={batch.id} style={{ marginBottom: "1rem" }}>
              <summary style={{ cursor: "pointer", fontWeight: 600 }}>
                Batch #{batch.id} — {new Date(batch.uploaded_at + "Z").toLocaleString()} —{" "}
                {batch.scientists.length} scientists
              </summary>
              <div style={{ marginTop: "0.75rem" }}>
                <button
                  style={{ ...s.btnSm, marginBottom: "0.5rem" }}
                  onClick={() => copyAllLinks(batch.scientists.map((sc) => ({ ...sc, paperCount: 0 })))}
                >
                  Copy all links
                </button>
                <table style={s.table}>
                  <thead>
                    <tr>
                      <th style={s.th}>ORCID</th>
                      <th style={s.th}>Status</th>
                      <th style={s.th}>Survey URL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {batch.scientists.map((sc) => (
                      <tr key={sc.token}>
                        <td style={{ ...s.td, ...s.mono }}>{sc.orcid}</td>
                        <td style={s.td}>
                          <span
                            style={{
                              ...s.badge,
                              background: sc.submitted_at ? "#d1e7dd" : "#fff3cd",
                              color: sc.submitted_at ? "#0f5132" : "#664d03",
                            }}
                          >
                            {sc.submitted_at ? "Submitted" : "Pending"}
                          </span>
                        </td>
                        <td style={{ ...s.td, ...s.mono }}>
                          <a href={`/s/${sc.token}`} target="_blank" rel="noreferrer">
                            {origin}/s/{sc.token}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </details>
          ))}
        </div>
      )}

      {/* Export */}
      {password && (
        <div style={s.section}>
          <h2 style={s.h2}>Export</h2>
          <a
            href="/api/admin/export.csv"
            style={{ ...s.btn, textDecoration: "none", display: "inline-block" }}
            onClick={(e) => {
              e.preventDefault()
              fetch("/api/admin/export.csv", { headers: authHeader(password) })
                .then((r) => r.blob())
                .then((blob) => {
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement("a")
                  a.href = url
                  a.download = "responses.csv"
                  a.click()
                  URL.revokeObjectURL(url)
                })
            }}
          >
            Download responses.csv
          </a>
        </div>
      )}
    </div>
  )
}
