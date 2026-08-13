import { flow } from "effect";
import he from "he";
import stripTags from "striptags";
import type { Work } from "./Work";

const MAX_DECODE_PASSES = 3;

const decodeEntitiesRepeatedly = (input: string): string => {
  let decoded = input;
  for (let pass = 0; pass < MAX_DECODE_PASSES; pass++) {
    const next = he.decode(decoded);
    if (next === decoded) break;
    decoded = next;
  }
  return decoded;
};

const collapseWhitespace = (input: string): string => input.replace(/\s+/g, " ").trim();

const sanitise = flow(decodeEntitiesRepeatedly, stripTags, collapseWhitespace);

export const sanitiseTitleAndAbstract = (work: Work): Work => ({
  ...work,
  title: sanitise(work.title),
  abstract: sanitise(work.abstract),
});
