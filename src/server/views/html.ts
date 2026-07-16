export type Html = { readonly __html: string };

export function raw(value: string): Html {
  return { __html: value };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type Interpolation = string | number | boolean | null | undefined | Html | Interpolation[];

function stringify(value: Interpolation): string {
  if (value == null || typeof value === "boolean") return "";
  if (Array.isArray(value)) return value.map(stringify).join("");
  if (typeof value === "number") return String(value);
  if (typeof value === "object") return value.__html;
  return escapeHtml(value);
}

export function html(strings: TemplateStringsArray, ...values: Interpolation[]): Html {
  let result = strings[0];
  for (const [i, value] of values.entries()) {
    result += stringify(value) + strings[i + 1];
  }
  return raw(result);
}

const BASE_CSS = `
  *, *::before, *::after { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: system-ui, sans-serif;
    background: #f8f9fa;
    color: #212529;
  }
  a, button { font: inherit; }
  :focus { outline: 3px solid #0d6efd; outline-offset: 2px; }
  .button-link, button.button {
    display: inline-block;
    padding: 0.6rem 1.5rem;
    background: #0d6efd;
    color: #fff;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
  }
  button.button-secondary {
    background: #6c757d;
  }
  .error-summary {
    border: 4px solid #d4351c;
    padding: 1rem 1.5rem;
    margin-bottom: 1.5rem;
  }
  .error-summary h2 { color: #d4351c; margin-top: 0; }
  .error-summary a { color: #d4351c; }
  .field-error { color: #d4351c; font-weight: 600; }
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .survey {
    max-width: 800px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem 3rem;
  }
  .survey.survey-center {
    text-align: center;
  }
  .survey h1 {
    font-size: 2.25rem;
    font-weight: 800;
    line-height: 1.2;
    margin: 1.5rem 0 1rem;
  }
  .survey > p {
    color: #495057;
    line-height: 1.6;
  }
  .survey .progress-track {
    display: flex;
    align-items: center;
  }
  .survey .progress-track .segment {
    flex: 1 1 auto;
    height: 2px;
    background: #dee2e6;
  }
  .survey .progress-track .segment.done {
    background: #0d9488;
  }
  .survey .progress-track .dot {
    flex: 0 0 auto;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ced4da;
  }
  .survey .progress-track .dot.done {
    background: #0d9488;
  }
  .survey .progress-track .dot.current {
    width: 18px;
    height: 18px;
    background: #fff;
    border: 5px solid #0d9488;
  }
  .survey .page-indicator {
    color: #868e96;
    font-size: 0.9rem;
    text-align: right;
    margin: 0.5rem 0 0;
  }
  .survey .card {
    background: #fff;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 1.5rem;
    margin: 0 0 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .survey legend {
    font-weight: 700;
    font-size: 1.05rem;
    padding: 0;
  }
  .survey .required {
    color: #d4351c;
  }
  .survey .rating-scale {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1.25rem;
    flex-wrap: wrap;
  }
  .survey .rating-scale-endpoint {
    color: #868e96;
    flex: 0 0 auto;
  }
  .survey .rating-options {
    display: flex;
    gap: 0.75rem;
    flex: 1 1 auto;
    justify-content: center;
  }
  .survey .rating-option {
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
  }
  .survey .rating-option input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
  }
  .survey .rating-option label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 1px solid #ced4da;
    border-radius: 50%;
    font-weight: 600;
    color: #343a40;
    background: #fff;
    cursor: pointer;
  }
  .survey .rating-option input:checked + label {
    background: #0d9488;
    border-color: #0d9488;
    color: #fff;
  }
  .survey .rating-option input:focus-visible + label {
    outline: 3px solid #0d6efd;
    outline-offset: 2px;
  }
  .survey .comment-label {
    display: block;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }
  .survey textarea {
    width: 100%;
    border: 1px solid #ced4da;
    border-radius: 6px;
    padding: 0.75rem;
    font: inherit;
    resize: vertical;
  }
  .survey .actions {
    display: flex;
    gap: 1rem;
  }
  .survey .button-link,
  .survey button.button {
    background: #fff;
    border: 1px solid #e9ecef;
    color: #0d9488;
    font-weight: 700;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .survey button.button-secondary {
    color: #495057;
  }
`;

export function layout({ title, body }: { title: string; body: Html }): Html {
  return html`<!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <style>
          ${raw(BASE_CSS)}
        </style>
      </head>
      <body>
        ${body}
      </body>
    </html> `;
}
