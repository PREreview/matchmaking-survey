import { Tokenizer } from "@huggingface/tokenizers";
import { describe, expect, it } from "vitest";
import { truncateToModelLimit } from "../OpenRouter.js";
import tokenizerJson from "./tokenizer.json" with { type: "json" };
import tokenizerConfig from "./tokenizer_config.json" with { type: "json" };

const vendoredTokenizer = new Tokenizer(tokenizerJson, tokenizerConfig);

const modelWindow = 512;
const specialTokensChargedByEndpoint = 2;

const tokensChargedByEndpointFor = (text: string) => vendoredTokenizer.encode(text).ids.length;

const contentTokensIn = (text: string) =>
  vendoredTokenizer.encode(text, { add_special_tokens: false }).ids.length;

const denseAbstract = `Fluctuation--dissipation in $\\mathcal{O}(N^2)$: we show that
$\\Delta G^{\\ddagger}=-RT\\ln(k_{\\mathrm{cat}}/K_M)$ holds for [Fe(CN)6]^{3-},
Na2SO4 and 2,4,6-trinitrotoluene at 298.15 K (p<0.001; n=1,024).`.repeat(20);

describe("the vendored tokenizer", () => {
  it("fills the window exactly: content tokens plus the endpoint's two specials", () => {
    const truncated = truncateToModelLimit(denseAbstract, modelWindow, vendoredTokenizer);

    expect(contentTokensIn(truncated)).toBe(modelWindow - specialTokensChargedByEndpoint);
    expect(tokensChargedByEndpointFor(truncated)).toBe(modelWindow);
  });

  it("does not exceed the window for an input already at its limit", () => {
    const atTheLimit = truncateToModelLimit(denseAbstract, modelWindow, vendoredTokenizer);

    expect(
      tokensChargedByEndpointFor(truncateToModelLimit(atTheLimit, modelWindow, vendoredTokenizer)),
    ).toBeLessThanOrEqual(modelWindow);
  });

  it("counts past the 128-token truncation the published file asks for", () => {
    expect(tokenizerJson.truncation.max_length).toBe(128);
    expect(tokenizerJson.padding.strategy.Fixed).toBe(128);
    expect(contentTokensIn(denseAbstract)).toBeGreaterThan(128);
  });
});
