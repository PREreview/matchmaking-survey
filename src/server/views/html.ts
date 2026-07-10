export type Html = { readonly __html: string }

export function raw(value: string): Html {
  return { __html: value }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

type Interpolation =
  | string
  | number
  | boolean
  | null
  | undefined
  | Html
  | Interpolation[]

function stringify(value: Interpolation): string {
  if (value == null || typeof value === "boolean") return ""
  if (Array.isArray(value)) return value.map(stringify).join("")
  if (typeof value === "number") return String(value)
  if (typeof value === "object") return value.__html
  return escapeHtml(value)
}

export function html(
  strings: TemplateStringsArray,
  ...values: Interpolation[]
): Html {
  let result = strings[0]
  for (const [i, value] of values.entries()) {
    result += stringify(value) + strings[i + 1]
  }
  return raw(result)
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
`

export function layout({ title, body }: { title: string; body: Html }): Html {
  return html`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <style>${raw(BASE_CSS)}</style>
  </head>
  <body>
    ${body}
  </body>
</html>
`
}
