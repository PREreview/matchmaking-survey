import { describe, expect, it } from "vitest";
import {
  renderIntroPage,
  renderLandingPage,
  renderNotFoundPage,
  renderPaperPage,
  renderThankYouPage,
} from "./survey.js";

const paper = {
  id: 42,
  title: "A Neat Paper",
  abstract: "It is about neat things.",
};

describe("renderLandingPage", () => {
  it("tells visitors to use their link", () => {
    const result = renderLandingPage().__html;
    expect(result).toContain("Please use the link provided to you to access your survey.");
  });
});

describe("renderNotFoundPage", () => {
  it("tells the visitor the link was not found", () => {
    const result = renderNotFoundPage().__html;
    expect(result).toContain("Survey link not found");
  });
});

describe("renderThankYouPage", () => {
  it("thanks the visitor and includes a contact link", () => {
    const result = renderThankYouPage().__html;
    expect(result).toContain("Thank you for helping us improve matchmaking!");
    expect(result).toContain('href="mailto:help@prereview.org"');
  });
});

describe("renderIntroPage", () => {
  it("uses singular wording for a single paper", () => {
    const result = renderIntroPage({ token: "tok-1", paperCount: 1 }).__html;
    expect(result).toContain("We’ll show you 1 preprint title and abstracts");
  });

  it("uses plural wording for multiple papers", () => {
    const result = renderIntroPage({ token: "tok-1", paperCount: 3 }).__html;
    expect(result).toContain("We’ll show you 3 preprint titles and abstracts");
  });

  it("links Begin to the first paper page for this token", () => {
    const result = renderIntroPage({ token: "abc-123", paperCount: 2 }).__html;
    expect(result).toContain('href="/s/abc-123/1"');
    expect(result).toContain(">Begin<");
  });

  it("escapes a token containing html-significant characters", () => {
    const result = renderIntroPage({
      token: '"><script>',
      paperCount: 1,
    }).__html;
    expect(result).not.toContain("<script>");
  });
});

describe("renderPaperPage", () => {
  const base = {
    token: "tok-1",
    page: 2,
    total: 5,
    paper,
    rating: null as number | null,
    comment: null as string | null,
    error: false,
  };

  it("renders the paper title and abstract, escaped", () => {
    const result = renderPaperPage({
      ...base,
      paper: { id: 1, title: "<b>Title</b>", abstract: "<i>Abstract</i>" },
    }).__html;
    expect(result).toContain("&lt;b&gt;Title&lt;/b&gt;");
    expect(result).toContain("&lt;i&gt;Abstract&lt;/i&gt;");
    expect(result).not.toContain("<b>Title</b>");
  });

  it("shows progress as page n of total", () => {
    const result = renderPaperPage(base).__html;
    expect(result).toContain("Page 2 of 5");
  });

  it("changes the page title per paper", () => {
    const result = renderPaperPage(base).__html;
    expect(result).toMatch(/<title>[^<]*2 of 5[^<]*<\/title>/);
  });

  it("pre-checks the saved rating and pre-fills the saved comment", () => {
    const result = renderPaperPage({
      ...base,
      rating: 4,
      comment: "nice one",
    }).__html;
    expect(result).toMatch(/id="rating-4"[^>]*checked/);
    expect(result).toContain("nice one");
  });

  it("labels every rating option 1 through 5", () => {
    const result = renderPaperPage(base).__html;
    for (const label of [
      "Not interesting",
      "Slightly interesting",
      "Moderately interesting",
      "Very interesting",
      "Extremely interesting",
    ]) {
      expect(result).toContain(label);
    }
  });

  it("groups the rating options in a labelled fieldset", () => {
    const result = renderPaperPage(base).__html;
    expect(result).toMatch(/<fieldset[^>]*>[\s\S]*<legend/);
  });

  it("associates each radio with a real label via id/for", () => {
    const result = renderPaperPage(base).__html;
    for (let n = 1; n <= 5; n++) {
      expect(result).toContain(`id="rating-${n}"`);
      expect(result).toContain(`for="rating-${n}"`);
    }
  });

  it("shows a Previous button only when not on the first page", () => {
    const firstPage = renderPaperPage({ ...base, page: 1 }).__html;
    const laterPage = renderPaperPage({ ...base, page: 2 }).__html;
    expect(firstPage).not.toContain("Previous");
    expect(laterPage).toContain("Previous");
  });

  it("labels the submit button Next before the last page, Submit on the last page", () => {
    const middle = renderPaperPage({ ...base, page: 2, total: 5 }).__html;
    const last = renderPaperPage({ ...base, page: 5, total: 5 }).__html;
    expect(middle).toContain("Next");
    expect(last).toContain("Submit");
  });

  it("renders no error summary when there is no error", () => {
    const result = renderPaperPage({ ...base, error: false }).__html;
    expect(result).not.toMatch(/<div\s+class="error-summary"/);
  });

  it("renders an error summary and inline field error when rating is missing", () => {
    const result = renderPaperPage({
      ...base,
      error: true,
      comment: "kept",
    }).__html;
    expect(result).toMatch(/<div\s+class="error-summary"/);
    expect(result).toContain("There is a problem");
    expect(result).toContain("kept");
    expect(result).toMatch(/aria-describedby="rating-error"/);
    expect(result).toContain('id="rating-error"');
  });

  it("moves focus to the error summary without requiring js", () => {
    const result = renderPaperPage({ ...base, error: true }).__html;
    const errorDivTag = result.match(/<div\s[^>]*class="error-summary"[^>]*>/)?.[0] ?? "";
    expect(errorDivTag).not.toBe("");
    expect(errorDivTag).toMatch(/[\s"]autofocus[\s>]/);
  });

  it("escapes a comment containing html-significant characters", () => {
    const result = renderPaperPage({
      ...base,
      comment: "<script>alert(1)</script>",
    }).__html;
    expect(result).not.toContain("<script>alert(1)</script>");
  });
});
