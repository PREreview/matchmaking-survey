import { describe, expect, it } from "vitest";
import { html, layout, raw } from "./html.js";

describe("html", () => {
  it("escapes html-significant characters in interpolated strings", () => {
    const dangerous = "<script>alert('xss')</script> & \"quoted\"";
    const result = html`<p>${dangerous}</p>`;
    expect(result.__html).toBe(
      "<p>&lt;script&gt;alert(&#39;xss&#39;)&lt;/script&gt; &amp; &quot;quoted&quot;</p>",
    );
  });

  it("interpolates numbers without escaping", () => {
    const result = html`<span>${5}</span>`;
    expect(result.__html).toBe("<span>5</span>");
  });

  it("renders null, undefined, and false as empty strings", () => {
    const result = html`<span>${null}${undefined}${false}</span>`;
    expect(result.__html).toBe("<span></span>");
  });

  it("renders true as an empty string", () => {
    const result = html`<span>${true}</span>`;
    expect(result.__html).toBe("<span></span>");
  });

  it("does not escape nested html fragments composed via raw()", () => {
    const nested = raw("<strong>bold</strong>");
    const result = html`<p>${nested}</p>`;
    expect(result.__html).toBe("<p><strong>bold</strong></p>");
  });

  it("composes nested html`` calls without double-escaping", () => {
    const inner = html`<em>${"<b>"}</em>`;
    const outer = html`<p>${inner}</p>`;
    expect(outer.__html).toBe("<p><em>&lt;b&gt;</em></p>");
  });

  it("joins arrays of html fragments without extra escaping", () => {
    const items = [html`<li>${"a"}</li>`, html`<li>${"b"}</li>`];
    const result = html`<ul>
      ${items}
    </ul>`;
    expect(result.__html).toContain("<li>a</li>");
    expect(result.__html).toContain("<li>b</li>");
    expect(result.__html).not.toContain("&lt;li&gt;");
  });
});

describe("layout", () => {
  it("wraps the body in an html document shell with the given title", () => {
    const result = layout({ title: "My Page", body: html`<p>hello</p>` });
    expect(result.__html).toContain("<!doctype html>");
    expect(result.__html).toContain("<title>My Page</title>");
    expect(result.__html).toContain("<p>hello</p>");
  });

  it("escapes the title", () => {
    const result = layout({ title: "<script>", body: html`<p></p>` });
    expect(result.__html).toContain("<title>&lt;script&gt;</title>");
  });
});
