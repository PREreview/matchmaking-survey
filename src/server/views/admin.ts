import { html, layout, raw } from "./html.js";

const PAGE_STYLE = "max-width:1000px;margin:0 auto;padding:2rem;";
const SECTION_STYLE =
  "background:#fff;border-radius:8px;padding:1.5rem;margin-bottom:1.5rem;box-shadow:0 1px 4px rgba(0,0,0,0.08);";

type Scientist = {
  name: string;
  orcid: string;
  token: string;
  submitted_at: string | null;
};

type Batch = {
  id: number;
  uploaded_at: string;
  scientists: readonly Scientist[];
};

const COPY_SCRIPT = `
document.querySelectorAll('[data-copy-target]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var ta = document.getElementById(btn.getAttribute('data-copy-target'));
    if (!ta) return;
    navigator.clipboard.writeText(ta.value).then(function () {
      var status = document.getElementById('copy-status');
      if (status) status.textContent = 'Links copied';
    });
  });
});
`;

function renderScientistRow(origin: string, scientist: Scientist) {
  return html`<tr>
    <td>${scientist.name}</td>
    <td>${scientist.orcid}</td>
    <td>${scientist.submitted_at ? "Submitted" : "Pending"}</td>
    <td><a href="/s/${scientist.token}">${origin}/s/${scientist.token}</a></td>
  </tr>`;
}

function renderBatch(
  origin: string,
  batch: Batch,
  highlightBatchId: number | null,
) {
  const links = batch.scientists
    .map((s) => `${s.name}\t${s.orcid}\t${origin}/s/${s.token}`)
    .join("\n");
  const isHighlighted = batch.id === highlightBatchId;
  return html`<details
    id="batch-${batch.id}"
    style="margin-bottom:1rem;"
    ${isHighlighted ? raw("open") : raw("")}
  >
    <summary>
      Batch #${batch.id} — ${batch.uploaded_at} — ${batch.scientists.length}
      scientists
    </summary>
    <div style="margin-top:0.75rem;">
      ${isHighlighted
        ? html`<p style="color:#198754;">
            Batch #${batch.id} created — ${batch.scientists.length} scientists
          </p>`
        : raw("")}
      <label for="links-${batch.id}"
        >Survey links for this batch (name, orcid, then url, one per
        line)</label
      >
      <br />
      <textarea id="links-${batch.id}" readonly rows="3" style="width:100%;">
${links}</textarea
      >
      <button
        class="button-secondary button"
        type="button"
        data-copy-target="links-${batch.id}"
      >
        Copy all links
      </button>
      <table
        style="width:100%;border-collapse:collapse;font-size:0.9rem;margin-top:0.75rem;"
      >
        <thead>
          <tr>
            <th style="text-align:left;">Name</th>
            <th style="text-align:left;">ORCID</th>
            <th style="text-align:left;">Status</th>
            <th style="text-align:left;">Survey URL</th>
          </tr>
        </thead>
        <tbody>
          ${batch.scientists.map((s) => renderScientistRow(origin, s))}
        </tbody>
      </table>
    </div>
  </details>`;
}

export function renderAdminPage({
  origin,
  batches,
  highlightBatchId,
  duplicateError,
  missingColumnsError,
}: {
  origin: string;
  batches: Batch[];
  highlightBatchId: number | null;
  duplicateError: Array<{ orcid: string; doi: string }> | null;
  missingColumnsError: string[] | null;
}) {
  const errorSummary = missingColumnsError
    ? html`<div
        class="error-summary"
        role="alert"
        aria-labelledby="error-summary-title"
        tabindex="-1"
        autofocus
      >
        <h2 id="error-summary-title">There is a problem</h2>
        <p>This CSV is missing required columns:</p>
        <ul>
          ${missingColumnsError.map((column) => html`<li>${column}</li>`)}
        </ul>
      </div>`
    : duplicateError
      ? html`<div
          class="error-summary"
          role="alert"
          aria-labelledby="error-summary-title"
          tabindex="-1"
          autofocus
        >
          <h2 id="error-summary-title">There is a problem</h2>
          <p>This CSV has duplicate ORCID + DOI rows:</p>
          <ul>
            ${duplicateError.map((d) => html`<li>${d.orcid} / ${d.doi}</li>`)}
          </ul>
        </div>`
      : raw("");

  return layout({
    title: "Survey Admin",
    body: html`<div style="${PAGE_STYLE}">
      <h1>Survey Admin</h1>
      ${errorSummary}
      <div style="${SECTION_STYLE}">
        <h2>Add ORCID iD</h2>
        <form method="post" action="/admin/create-survey">
          <label for="orcid-id">ORCID iD</label>
          <br />
          <input id="orcid-id" type="text" name="orcid-id" required />
          <button class="button" type="submit">Create survey</button>
        </form>
      </div>
      <div style="${SECTION_STYLE}">
        <h2>Upload CSV</h2>
        <p>Expected columns: <code>name, orcid, title, abstract, doi</code></p>
        <form
          method="post"
          action="/admin/upload"
          enctype="multipart/form-data"
        >
          <label for="csv-file">CSV file</label>
          <br />
          <input
            id="csv-file"
            type="file"
            name="csv"
            accept=".csv,text/csv,text/plain"
            required
          />
          <button class="button" type="submit">Upload</button>
        </form>
      </div>
      <div aria-live="polite" id="copy-status" class="visually-hidden"></div>
      ${batches.length > 0
        ? html`<div style="${SECTION_STYLE}">
            <h2>All Batches</h2>
            ${batches.map((b) => renderBatch(origin, b, highlightBatchId))}
          </div>`
        : raw("")}
      <div style="${SECTION_STYLE}">
        <h2>Export</h2>
        <a class="button-link" href="/admin/export.csv"
          >Download responses.csv</a
        >
      </div>
      <script>
        ${raw(COPY_SCRIPT)};
      </script>
    </div>`,
  });
}
