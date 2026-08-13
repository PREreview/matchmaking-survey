import { describe, expect, it } from "vitest";
import type { Work } from "./Work";
import { sanitiseTitleAndAbstract } from "./SanitiseTitleAndAbstract";

const work = (title: string, abstract: string): Work => ({
  doi: "10.0000/sanitisation-sample",
  authors: [],
  title,
  abstract,
});

describe("sanitiseTitleAndAbstract", () => {
  it.each([
    {
      name: "decodes a double-escaped &amp;amp; (10.31235/osf.io/f2g5v)",
      work: work("Latin America &amp;amp; Caribbean", "Abstract"),
      expectedTitle: "Latin America & Caribbean",
      expectedAbstract: "Abstract",
    },
    {
      name: "decodes a double-escaped &amp;gt; (10.20944/preprints202605.0463.v1)",
      work: work("Title", "high (&amp;gt;6) mg·kg⁻¹"),
      expectedTitle: "Title",
      expectedAbstract: "high (>6) mg·kg⁻¹",
    },
    {
      name: "decodes a double-escaped named entity",
      work: work("Title", "caf&amp;eacute;"),
      expectedTitle: "Title",
      expectedAbstract: "café",
    },
    {
      name: "strips a decoded <em> tag around a species name",
      work: work("Lavender (&lt;em&gt;Lavandula&lt;/em&gt;) Genotypes", "Abstract"),
      expectedTitle: "Lavender (Lavandula) Genotypes",
      expectedAbstract: "Abstract",
    },
    {
      name: "strips an attribute-carrying tag with empty content without leaving a space",
      work: work('Disease (&lt;a id="article-title"&gt;&lt;/a&gt;MASLD)', "Abstract"),
      expectedTitle: "Disease (MASLD)",
      expectedAbstract: "Abstract",
    },
    {
      name: "collapses whitespace left by nested <span> tags",
      work: work(
        '&lt;span class="word"&gt;Hyperbolic &lt;span&gt;EM&lt;/span&gt;&lt;/span&gt;',
        "Abstract",
      ),
      expectedTitle: "Hyperbolic EM",
      expectedAbstract: "Abstract",
    },
    {
      name: "strips a decoded <p> tag carrying a style attribute",
      work: work('&lt;p style="margin: 0px;"&gt;Hybrid Systems Framework', "Abstract"),
      expectedTitle: "Hybrid Systems Framework",
      expectedAbstract: "Abstract",
    },
    {
      name: "strips an unescaped JATS <jats:p> wrapper (10.20944/preprints202507.0554.v1)",
      work: work("Title", "<jats:p>The article is devoted to X.</jats:p>"),
      expectedTitle: "Title",
      expectedAbstract: "The article is devoted to X.",
    },
    {
      name: "strips adjacent JATS tags, concatenating their content (10.1101/2025.08.12.668772)",
      work: work("Title", "<jats:title>Abstract</jats:title><jats:p>The article…"),
      expectedTitle: "Title",
      expectedAbstract: "AbstractThe article…",
    },
    {
      name: "decodes a double-escaped whole tag then strips it",
      work: work("a &amp;lt;b&amp;gt; c", "Abstract"),
      expectedTitle: "a c",
      expectedAbstract: "Abstract",
    },
    {
      name: "decodes a double-escaped numeric hex entity",
      work: work("Title", "&amp;#x1F600;"),
      expectedTitle: "Title",
      expectedAbstract: "😀",
    },
    {
      name: "removes <sup> and collapses the surrounding whitespace",
      work: work("A &lt;sup&gt;6&lt;/sup&gt; B", "Abstract"),
      expectedTitle: "A 6 B",
      expectedAbstract: "Abstract",
    },
    {
      name: "removes <sub> in a chemical formula",
      work: work("H&lt;sub&gt;2&lt;/sub&gt;O", "Abstract"),
      expectedTitle: "H2O",
      expectedAbstract: "Abstract",
    },
    {
      name: "collapses an inline newline",
      work: work("Title", "fine-structure\nconstant"),
      expectedTitle: "Title",
      expectedAbstract: "fine-structure constant",
    },
  ])("$name", ({ work, expectedTitle, expectedAbstract }) => {
    const result = sanitiseTitleAndAbstract(work);

    expect(result.title).toBe(expectedTitle);
    expect(result.abstract).toBe(expectedAbstract);
  });
});
