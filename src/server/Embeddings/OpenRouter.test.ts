import { readFile, writeFile } from "node:fs/promises";
import { Tokenizer as HuggingFaceTokenizer } from "@huggingface/tokenizers";
import { beforeAll, describe, expect, it } from "vitest";
import { truncateToModelLimit } from "./OpenRouter.js";
import { Tokenizer } from "./Shared.js";

const loadCachedJson = async (file: string, url: string): Promise<object> => {
  try {
    return JSON.parse(await readFile(file, "utf-8"));
  } catch {
    const text = await fetch(url).then((response) => response.text());
    await writeFile(file, text);
    return JSON.parse(text);
  }
};

describe("truncateToModelLimit", () => {
  let tokenizer: typeof Tokenizer.Service;

  beforeAll(async () => {
    const [tokenizerJson, tokenizerConfig] = await Promise.all([
      loadCachedJson(
        "data/tokenizer.json",
        "https://huggingface.co/thenlper/gte-large/resolve/main/tokenizer.json",
      ),
      loadCachedJson(
        "data/tokenizer_config.json",
        "https://huggingface.co/thenlper/gte-large/resolve/main/tokenizer_config.json",
      ),
    ]);

    tokenizer = new HuggingFaceTokenizer(tokenizerJson, tokenizerConfig);
  }, 30_000);

  it("does not regress in performance across repeated calls on long text", () => {
    const sentence = "The quick brown fox jumps over the lazy dog. ";
    const text = sentence.repeat(Math.ceil(5000 / sentence.length)).slice(0, 5000);
    const iterations = 100;

    const start = performance.now();

    for (let i = 0; i < iterations; i++) {
      truncateToModelLimit(text, 512, tokenizer);
    }

    const durationMs = performance.now() - start;

    expect(durationMs).toBeLessThan(300);
  });
});
