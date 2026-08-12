import { Tokenizer } from "@huggingface/tokenizers";
import { describe, expect, it } from "vitest";
import { truncateToModelLimit } from "./OpenRouter.js";
import vendoredTokenizerJson from "./tokenizer/tokenizer.json" with { type: "json" };
import vendoredTokenizerConfig from "./tokenizer/tokenizer_config.json" with { type: "json" };

const oneTokenPerLetterVocab: Record<string, number> = {
  "[PAD]": 0,
  "[UNK]": 100,
  "[CLS]": 101,
  "[SEP]": 102,
};

"abcdefghijklmnopqrstuvwxyz".split("").forEach((letter, index) => {
  oneTokenPerLetterVocab[letter] = index + 1;
});

const specialToken = (id: string, tokenId: number) => ({
  id: tokenId,
  content: id,
  single_word: false,
  lstrip: false,
  rstrip: false,
  normalized: false,
  special: true,
});

const gteLargeShapedTokenizerJson = {
  version: "1.0",
  truncation: { direction: "Right", max_length: 128, strategy: "LongestFirst", stride: 0 },
  padding: {
    strategy: { Fixed: 128 },
    direction: "Right",
    pad_to_multiple_of: null,
    pad_id: 0,
    pad_type_id: 0,
    pad_token: "[PAD]",
  },
  added_tokens: [
    specialToken("[PAD]", 0),
    specialToken("[UNK]", 100),
    specialToken("[CLS]", 101),
    specialToken("[SEP]", 102),
  ],
  normalizer: {
    type: "BertNormalizer",
    clean_text: true,
    handle_chinese_chars: true,
    strip_accents: null,
    lowercase: true,
  },
  pre_tokenizer: { type: "BertPreTokenizer" },
  post_processor: {
    type: "TemplateProcessing",
    single: [
      { SpecialToken: { id: "[CLS]", type_id: 0 } },
      { Sequence: { id: "A", type_id: 0 } },
      { SpecialToken: { id: "[SEP]", type_id: 0 } },
    ],
    special_tokens: {
      "[CLS]": { id: "[CLS]", ids: [101], tokens: ["[CLS]"] },
      "[SEP]": { id: "[SEP]", ids: [102], tokens: ["[SEP]"] },
    },
  },
  decoder: { type: "WordPiece", prefix: "##", cleanup: true },
  model: {
    type: "WordPiece",
    unk_token: "[UNK]",
    continuing_subword_prefix: "##",
    max_input_chars_per_word: 100,
    vocab: oneTokenPerLetterVocab,
  },
};

const gteLargeShapedTokenizerConfig = {
  cls_token: "[CLS]",
  sep_token: "[SEP]",
  unk_token: "[UNK]",
  pad_token: "[PAD]",
  do_lower_case: true,
  tokenizer_class: "BertTokenizer",
};

const gteLargeShapedTokenizer = new Tokenizer(
  gteLargeShapedTokenizerJson,
  gteLargeShapedTokenizerConfig,
);

const tokensChargedByEndpointFor = (text: string) =>
  gteLargeShapedTokenizer.encode(text).ids.length;

const letters = (count: number) =>
  Array.from({ length: count }, (_, index) => "abcdefghijklmnopqrstuvwxyz"[index % 26]).join(" ");

describe("truncateToModelLimit", () => {
  it("returns the text unchanged, with its original casing and accents, when it fits", () => {
    const text = "Héllo World: a study of COVID-19 in Zürich.";

    expect(truncateToModelLimit(text, 512, gteLargeShapedTokenizer)).toBe(text);
  });

  it("cuts over-long text to a prefix of the original, not a rebuild of it", () => {
    const text = letters(200);

    const result = truncateToModelLimit(text, 32, gteLargeShapedTokenizer);

    expect(text.startsWith(result)).toBe(true);
    expect(result.length).toBeLessThan(text.length);
  });

  it("never sends [CLS] or [SEP] as literal text", () => {
    const result = truncateToModelLimit(letters(200), 32, gteLargeShapedTokenizer);

    expect(result).not.toContain("[CLS]");
    expect(result).not.toContain("[SEP]");
  });

  it("stays inside the window once the endpoint has added its own special tokens", () => {
    for (const maxTokens of [8, 32, 128, 512]) {
      expect(
        tokensChargedByEndpointFor(
          truncateToModelLimit(letters(2000), maxTokens, gteLargeShapedTokenizer),
        ),
      ).toBeLessThanOrEqual(maxTokens);
    }
  });

  it("uses the whole window apart from the two special tokens", () => {
    const result = truncateToModelLimit(letters(200), 32, gteLargeShapedTokenizer);

    expect(tokensChargedByEndpointFor(result)).toBe(32);
  });

  it("returns nothing when the window cannot fit even the special tokens", () => {
    expect(truncateToModelLimit(letters(10), 2, gteLargeShapedTokenizer)).toBe("");
  });

  it("counts past the 128-token truncation pinned in the published tokenizer file", () => {
    expect(gteLargeShapedTokenizer.encode(letters(300)).ids.length).toBeGreaterThan(128);
  });
});

const singleSequenceShapeOf = (
  json: typeof vendoredTokenizerJson,
  config: Record<string, unknown>,
) => ({
  truncation: json.truncation,
  padding: json.padding,
  normalizer: json.normalizer,
  pre_tokenizer: json.pre_tokenizer,
  decoder: json.decoder,
  model: {
    type: json.model.type,
    unk_token: json.model.unk_token,
    continuing_subword_prefix: json.model.continuing_subword_prefix,
    max_input_chars_per_word: json.model.max_input_chars_per_word,
  },
  post_processor: {
    type: json.post_processor.type,
    single: json.post_processor.single,
    special_tokens: json.post_processor.special_tokens,
  },
  added_tokens: json.added_tokens.filter((token) => token.content !== "[MASK]"),
  cls_token: config["cls_token"],
  sep_token: config["sep_token"],
  unk_token: config["unk_token"],
  pad_token: config["pad_token"],
  do_lower_case: config["do_lower_case"],
  tokenizer_class: config["tokenizer_class"],
});

describe("the miniature tokenizer above", () => {
  it("has the same shape as the vendored file, vocabulary aside", () => {
    expect(
      singleSequenceShapeOf(
        gteLargeShapedTokenizerJson as unknown as typeof vendoredTokenizerJson,
        gteLargeShapedTokenizerConfig,
      ),
    ).toEqual(singleSequenceShapeOf(vendoredTokenizerJson, vendoredTokenizerConfig));
  });

  it("omits the [MASK] token and pair template that single-sequence encoding never reaches", () => {
    expect(vendoredTokenizerJson.added_tokens.map((token) => token.content)).toContain("[MASK]");
    expect(vendoredTokenizerJson.post_processor.pair).toBeDefined();

    expect(gteLargeShapedTokenizerJson.added_tokens.map((token) => token.content)).not.toContain(
      "[MASK]",
    );
    expect(gteLargeShapedTokenizerJson.post_processor).not.toHaveProperty("pair");
  });
});
