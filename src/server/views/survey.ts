import { html, layout, raw, type Html } from "./html.js";

const RATING_LABELS: Record<number, string> = {
  1: "Not interesting",
  2: "Slightly interesting",
  3: "Moderately interesting",
  4: "Very interesting",
  5: "Extremely interesting",
};

const RATING_ERROR = "Select how interesting this preprint looks to you";

function renderProgressTrack(page: number, total: number): Html {
  const items: Html[] = [];
  for (let step = 1; step <= total; step++) {
    if (step > 1) {
      items.push(html`<span class="segment${step <= page ? " done" : ""}"></span>`);
    }
    const state = step < page ? " done" : step === page ? " current" : "";
    items.push(html`<span class="dot${state}"></span>`);
  }
  return html`<div class="progress-track" aria-hidden="true">${items}</div>`;
}

export function renderLandingPage() {
  return layout({
    title: "PREreview matchmaking survey",
    body: html`<main class="survey survey-center">
      <p>Please use the link provided to you to access your survey.</p>
    </main>`,
  });
}

export function renderNotFoundPage() {
  return layout({
    title: "Survey not found — PREreview",
    body: html`<main class="survey">
      <p>Survey link not found. Please check your email.</p>
    </main>`,
  });
}

export function renderThankYouPage() {
  return layout({
    title: "Thank you — PREreview matchmaking survey",
    body: html`<main class="survey survey-center">
      <h1>Thank you for helping us improve matchmaking!</h1>
      <p>
        If you have any comments or questions you can always reach us at
        <a href="mailto:help@prereview.org">help@prereview.org</a>
      </p>
    </main>`,
  });
}

export function renderIntroPage({ token, paperCount }: { token: string; paperCount: number }) {
  return layout({
    title: "PREreview matchmaking survey",
    body: html`<main class="survey">
      <h1>PREreview matchmaking survey</h1>
      <p>Thank you for joining our experiment. This will be quick.</p>
      <p>
        We’ll show you ${paperCount} preprint title${paperCount === 1 ? "" : "s"} and abstracts.
        These are based on works that appear on your public ORCID record.
      </p>
      <p>For each preprint, we’ll ask you to rate how interesting it seems to you.</p>
      <p>
        We’re just looking for your initial response to the preprint title and abstract, so we’re
        not expecting you to take any other action (including actually reading the preprint!).
      </p>
      <p>
        We’re not expecting all, or even any, of these matches to be perfect. Honest reactions are
        the most valuable thing to us, and will help us improve how matching works.
      </p>
      <p><strong>There are no wrong answers.</strong> We’re testing our work, not you!</p>
      <p><a class="button-link" href="/s/${token}/1">Begin</a></p>
    </main>`,
  });
}

export function renderPaperPage({
  token,
  page,
  total,
  paper,
  rating,
  comment,
  error,
}: {
  token: string;
  page: number;
  total: number;
  paper: { id: number; title: string; abstract: string };
  rating: number | null;
  comment: string | null;
  error: boolean;
}) {
  const isLast = page === total;

  const errorSummary = error
    ? html`<div
        class="error-summary"
        role="alert"
        aria-labelledby="error-summary-title"
        tabindex="-1"
        autofocus
      >
        <h2 id="error-summary-title">There is a problem</h2>
        <ul>
          <li><a href="#rating-1">${RATING_ERROR}</a></li>
        </ul>
      </div>`
    : raw("");

  const fieldError = error
    ? html`<p id="rating-error" class="field-error">${RATING_ERROR}</p>`
    : raw("");

  const ratingOptions = [1, 2, 3, 4, 5].map(
    (n) => html`<div class="rating-option">
      <input
        type="radio"
        id="rating-${n}"
        name="rating"
        value="${n}"
        required
        ${rating === n ? raw("checked") : raw("")}
      />
      <label for="rating-${n}"
        ><span aria-hidden="true">${n}</span
        ><span class="visually-hidden">${n} – ${RATING_LABELS[n]}</span></label
      >
    </div>`,
  );

  return layout({
    title: `Paper ${page} of ${total} — PREreview matchmaking survey`,
    body: html`<main class="survey">
      ${renderProgressTrack(page, total)}
      <p class="page-indicator">Page ${page} of ${total}</p>
      ${errorSummary}
      <h1>${paper.title}</h1>
      <p>${paper.abstract}</p>
      <form method="post" action="/s/${token}/${page}">
        <fieldset class="card" ${error ? raw(' aria-describedby="rating-error"') : raw("")}>
          <legend>
            Does this look interesting to you? <span class="required" aria-hidden="true">*</span>
          </legend>
          ${fieldError}
          <div class="rating-scale">
            <div class="rating-scale-labels">
              <span class="rating-scale-endpoint" aria-hidden="true">Not interesting</span>
              <span class="rating-scale-endpoint" aria-hidden="true">Extremely interesting</span>
            </div>
            <div class="rating-options">${ratingOptions}</div>
          </div>
        </fieldset>
        <div class="card">
          <label class="comment-label" for="comment"
            >Any comments about this match or your rating? (optional)</label
          >
          <textarea id="comment" name="comment" rows="4" cols="60">${comment ?? ""}</textarea>
        </div>
        <div class="actions">
          ${page > 1
            ? html`<button
                class="button button-secondary"
                type="submit"
                name="action"
                value="prev"
                formnovalidate
              >
                Previous
              </button>`
            : raw("")}
          <button class="button" type="submit" name="action" value="next">
            ${isLast ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </main>`,
  });
}
