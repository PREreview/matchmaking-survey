import { describe, expect, it } from "vitest";
import { renderAdminPage } from "./admin.js";

const scientist = (
  overrides: Partial<{ orcid: string; token: string; submitted_at: string | null }> = {},
) => ({
  orcid: "0000-0001-1111-1111",
  token: "tok-1",
  submitted_at: null,
  ...overrides,
});

const batch = (
  overrides: Partial<{
    id: number;
    uploaded_at: string;
    scientists: ReturnType<typeof scientist>[];
  }> = {},
) => ({
  id: 1,
  uploaded_at: "2026-07-10 10:00:00",
  scientists: [scientist()],
  ...overrides,
});

const base = {
  origin: "https://survey.example",
  batches: [] as ReturnType<typeof batch>[],
  highlightBatchId: null as number | null,
  duplicateError: null as Array<{ orcid: string; doi: string }> | null,
};

describe("renderAdminPage", () => {
  it("renders the admin heading", () => {
    const result = renderAdminPage(base).__html;
    expect(result).toContain("Survey Admin");
  });

  it("renders a multipart upload form with a file input", () => {
    const result = renderAdminPage(base).__html;
    expect(result).toContain('action="/admin/upload"');
    expect(result).toContain('enctype="multipart/form-data"');
    expect(result).toContain('type="file"');
  });

  it("renders no error summary when there is no duplicate error", () => {
    const result = renderAdminPage(base).__html;
    expect(result).not.toMatch(/<div\s+class="error-summary"/);
  });

  it("renders an error summary listing duplicate orcid/doi pairs", () => {
    const result = renderAdminPage({
      ...base,
      duplicateError: [{ orcid: "0000-0001-1111-1111", doi: "10.1/alpha" }],
    }).__html;
    expect(result).toMatch(/<div\s+class="error-summary"/);
    expect(result).toContain("0000-0001-1111-1111");
    expect(result).toContain("10.1/alpha");
  });

  it("shows a success banner for the highlighted batch", () => {
    const result = renderAdminPage({
      ...base,
      batches: [
        batch({ id: 7, scientists: [scientist(), scientist({ orcid: "0000-0002-2222-2222" })] }),
      ],
      highlightBatchId: 7,
    }).__html;
    expect(result).toContain("Batch #7");
    expect(result).toContain("2 scientists");
  });

  it("does not show a success banner when nothing was just uploaded", () => {
    const result = renderAdminPage({ ...base, batches: [batch({ id: 7 })] }).__html;
    expect(result).not.toMatch(/Batch #7 created/);
  });

  it("auto-opens the highlighted batch's details", () => {
    const result = renderAdminPage({
      ...base,
      batches: [batch({ id: 7 })],
      highlightBatchId: 7,
    }).__html;
    const detailsTag = result.match(/<details[^>]*>/)?.[0] ?? "";
    expect(detailsTag).toContain('id="batch-7"');
    expect(detailsTag).toMatch(/[\s"]open[\s>]/);
  });

  it("lists each scientist's orcid, status, and survey url", () => {
    const result = renderAdminPage({
      ...base,
      batches: [
        batch({
          id: 3,
          scientists: [
            scientist({ orcid: "0000-0001-1111-1111", token: "tok-a", submitted_at: null }),
            scientist({
              orcid: "0000-0002-2222-2222",
              token: "tok-b",
              submitted_at: "2026-07-01 00:00:00",
            }),
          ],
        }),
      ],
    }).__html;
    expect(result).toContain("0000-0001-1111-1111");
    expect(result).toContain("Pending");
    expect(result).toContain("0000-0002-2222-2222");
    expect(result).toContain("Submitted");
    expect(result).toContain("/s/tok-a");
    expect(result).toContain("/s/tok-b");
  });

  it("renders a copy-links textarea with tab-separated orcid and full url per line", () => {
    const result = renderAdminPage({
      ...base,
      batches: [
        batch({ id: 3, scientists: [scientist({ orcid: "0000-0001-1111-1111", token: "tok-a" })] }),
      ],
    }).__html;
    expect(result).toContain("0000-0001-1111-1111\thttps://survey.example/s/tok-a");
  });

  it("wires a copy button to the textarea via data-copy-target", () => {
    const result = renderAdminPage({
      ...base,
      batches: [batch({ id: 3 })],
    }).__html;
    expect(result).toMatch(/id="links-3"/);
    expect(result).toMatch(/data-copy-target="links-3"/);
  });

  it("includes an inline script enhancing the copy buttons, and a live region for feedback", () => {
    const result = renderAdminPage(base).__html;
    expect(result).toContain("navigator.clipboard.writeText");
    expect(result).toContain('aria-live="polite"');
  });

  it("links to the csv export", () => {
    const result = renderAdminPage(base).__html;
    expect(result).toContain('href="/admin/export.csv"');
  });

  it("escapes scientist orcid/token values", () => {
    const result = renderAdminPage({
      ...base,
      batches: [
        batch({
          id: 1,
          scientists: [scientist({ orcid: "<script>alert(1)</script>" })],
        }),
      ],
    }).__html;
    expect(result).not.toContain("<script>alert(1)</script>");
  });
});
