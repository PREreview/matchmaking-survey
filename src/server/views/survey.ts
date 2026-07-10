import { html, layout } from "./html.js"

const MAIN_STYLE = "max-width:800px;margin:0 auto;padding:1rem;"

export function renderNotFoundPage() {
  return layout({
    title: "Survey not found — PREreview",
    body: html`<main style="${MAIN_STYLE}">
      <p>Survey link not found. Please check your email.</p>
    </main>`,
  })
}

export function renderThankYouPage() {
  return layout({
    title: "Thank you — PREreview matchmaking survey",
    body: html`<main style="${MAIN_STYLE}text-align:center;">
      <h1>Thank you for helping us improve matchmaking!</h1>
      <p>
        If you have any comments or questions you can always reach us at
        <a href="mailto:help@prereview.org">help@prereview.org</a>
      </p>
    </main>`,
  })
}

export function renderIntroPage({
  token,
  paperCount,
}: {
  token: string
  paperCount: number
}) {
  return layout({
    title: "PREreview matchmaking survey",
    body: html`<main style="${MAIN_STYLE}">
      <h1>PREreview matchmaking survey</h1>
      <p>Thank you for joining our experiment. This will be quick.</p>
      <p>
        We’ll show you ${paperCount} preprint title${paperCount === 1
          ? ""
          : "s"} and abstracts. These are based on works that appear on your
        public ORCID record.
      </p>
      <p>
        For each preprint, we’ll ask you to rate how interesting it seems to
        you.
      </p>
      <p>
        We’re just looking for your initial response to the preprint title
        and abstract, so we’re not expecting you to take any other action
        (including actually reading the preprint!).
      </p>
      <p>
        We’re not expecting all, or even any, of these matches to be
        perfect. Honest reactions are the most valuable thing to us, and
        will help us improve how matching works.
      </p>
      <p><strong>There are no wrong answers.</strong> We’re testing our work, not you!</p>
      <p><a class="button-link" href="/s/${token}/1">Begin</a></p>
    </main>`,
  })
}
