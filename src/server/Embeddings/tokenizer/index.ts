import { Layer } from "effect";
import { Tokenizer as HuggingFaceTokenizer } from "@huggingface/tokenizers";
import { Tokenizer } from "../Shared";
import tokenizerJson from "./tokenizer.json" with { type: "json" };
import tokenizerConfig from "./tokenizer_config.json" with { type: "json" };

export const tokenizerLayer = Layer.sync(
  Tokenizer,
  () => new HuggingFaceTokenizer(tokenizerJson, tokenizerConfig),
);
