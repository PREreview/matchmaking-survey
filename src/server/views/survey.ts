import { html, layout, raw, type Html } from "./html.js";
import { RATING_LABELS, RATING_UNSURE_LABEL } from "../ratingLabels.js";
import type { LanguageCode } from "iso-639-1";
import { Array } from "effect";

const RATING_ERROR = "Select relevant this paper is to your research area";

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

export function renderStartPage() {
  const languages = ["en", "es", "pt"] satisfies Array.NonEmptyReadonlyArray<LanguageCode>;

  return layout({
    title: "PREreview matchmaking survey",
    body: html`<main class="survey">
      <h1>PREreview matchmaking survey</h1>
      <p>Thank you for joining our experiment. This will be quick.</p>

      <p>
        If you give us your ORCID iD and preferred language(s) we will show a bespoke survey that
        you can fill in.
      </p>

      <p>
        By filling in the survey you will help us improve how we match researchers to preprints
        looking for review.
      </p>

      <form method="post" action="/">
        <div class="card">
          <label class="field-label" for="orcid-id"
            >What’s your ORCID iD? <span class="required" aria-hidden="true">*</span></label
          >
          <input id="orcid-id" type="text" name="orcid-id" required />
        </div>

        <fieldset class="card" role="group">
          <legend>What languages can the title and abstracts of the papers we find be in?</legend>

          ${Array.map(
            languages,
            (language) => html`
              <div class="checkbox-option">
                <input
                  type="checkbox"
                  id="language-${language}"
                  name="language"
                  value="${language}"
                />
                <label for="language-${language}"
                  >${new Intl.DisplayNames(["en"], { type: "language" }).of(language)}</label
                >
              </div>
            `,
          )}
        </fieldset>

        <div class="actions">
          <button class="button" type="submit">Continue</button>
        </div>
      </form>
    </main>`,
  });
}

export function renderCreatingSurveyPage() {
  return layout({
    title: "Survey being created — PREreview",
    body: html`<main class="survey">
      <h1>PREreview matchmaking survey</h1>

      <p>We’re creating your survey. This may take a moment.</p>

      <span class="loader"></span>
    </main>`,
  });
}

export function renderSurveyReadyPage(token: string) {
  return layout({
    title: "Your survey is ready — PREreview",
    body: html`<main class="survey">
      <h1>PREreview matchmaking survey</h1>

      <p>
        We’ll now show you a set of preprint titles and abstracts. These are based on works that
        appear on your public ORCID record.
      </p>
      <p>For each preprint, we’ll ask you how relevant it seems to your research area.</p>
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

export function renderFailedToCreateSurveyPage() {
  return layout({
    title: "Unable to create survey — PREreview",
    body: html`<main class="survey">
      <p>We were unable to create your survey. Please try again later.</p>
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
      <p>For each preprint, we’ll ask you how relevant it seems to your research area.</p>
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
          <li><a href="#rating-5">${RATING_ERROR}</a></li>
        </ul>
      </div>`
    : raw("");

  const fieldError = error
    ? html`<p id="rating-error" class="field-error">${RATING_ERROR}</p>`
    : raw("");

  const ratingOptions = [5, 4, 3, 2, 1].map(
    (n) =>
      html`<div class="rating-option">
        <input
          type="radio"
          id="rating-${n}"
          name="rating"
          value="${n}"
          required
          ${rating === n ? raw("checked") : raw("")}
        />
        <label for="rating-${n}">${RATING_LABELS[n]}</label>
      </div>`,
  );

  const unsureOption = html`<div class="rating-option rating-option-unsure">
    <input
      type="radio"
      id="rating-0"
      name="rating"
      value="0"
      required
      ${rating === 0 ? raw("checked") : raw("")}
    />
    <label for="rating-0">${RATING_UNSURE_LABEL}</label>
  </div>`;

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
            How relevant is this paper to your research area?
            <span class="required" aria-hidden="true">*</span>
          </legend>
          ${fieldError}
          <div class="rating-scale">
            <div class="rating-options">${ratingOptions}</div>
            <div class="rating-divider" aria-hidden="true"><span>or</span></div>
            ${unsureOption}
          </div>
        </fieldset>
        <div class="card">
          <label class="field-label" for="comment"
            >Is there anything you'd like to add to your response? (optional)</label
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
