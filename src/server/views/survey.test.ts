import { describe, expect, it } from "vitest"
import {
  renderIntroPage,
  renderNotFoundPage,
  renderThankYouPage,
} from "./survey.js"

describe("renderNotFoundPage", () => {
  it("tells the visitor the link was not found", () => {
    const result = renderNotFoundPage().__html
    expect(result).toContain("Survey link not found")
  })
})

describe("renderThankYouPage", () => {
  it("thanks the visitor and includes a contact link", () => {
    const result = renderThankYouPage().__html
    expect(result).toContain("Thank you for helping us improve matchmaking!")
    expect(result).toContain('href="mailto:help@prereview.org"')
  })
})

describe("renderIntroPage", () => {
  it("uses singular wording for a single paper", () => {
    const result = renderIntroPage({ token: "tok-1", paperCount: 1 }).__html
    expect(result).toContain("We’ll show you 1 preprint title and abstracts")
  })

  it("uses plural wording for multiple papers", () => {
    const result = renderIntroPage({ token: "tok-1", paperCount: 3 }).__html
    expect(result).toContain("We’ll show you 3 preprint titles and abstracts")
  })

  it("links Begin to the first paper page for this token", () => {
    const result = renderIntroPage({ token: "abc-123", paperCount: 2 }).__html
    expect(result).toContain('href="/s/abc-123/1"')
    expect(result).toContain(">Begin<")
  })

  it("escapes a token containing html-significant characters", () => {
    const result = renderIntroPage({
      token: "\"><script>",
      paperCount: 1,
    }).__html
    expect(result).not.toContain("<script>")
  })
})
