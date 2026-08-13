import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { getTopMidRandom } from "./index.js";

const candidates = Array.from({ length: 500 }, (_, i) => ({
  doi: `10.1/candidate-${i}`,
  distance: 0.1 + i * 0.001,
}));

const select = (input: typeof candidates = candidates) => Effect.runSync(getTopMidRandom(input));

describe("getTopMidRandom", () => {
  it("labels the first seven as the top stratum, ranked from one", () => {
    const chosen = select();
    const top = chosen.filter((c) => c.stratum === "top");
    expect(top).toHaveLength(7);
    expect(top.map((c) => c.candidateRank)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(top.map((c) => c.doi)).toEqual(candidates.slice(0, 7).map((c) => c.doi));
  });

  it("ranks mid items by their position in the candidate list, not in the survey", () => {
    const mid = select().filter((c) => c.stratum === "mid");
    expect(mid).toHaveLength(4);
    for (const item of mid) {
      expect(item.candidateRank).toBe(candidates.findIndex((c) => c.doi === item.doi) + 1);
      expect(item.candidateRank).toBeGreaterThanOrEqual(21);
      expect(item.candidateRank).toBeLessThanOrEqual(30);
    }
  });

  it("ranks random items by their position in the candidate list", () => {
    const random = select().filter((c) => c.stratum === "random");
    expect(random).toHaveLength(4);
    for (const item of random) {
      expect(item.candidateRank).toBe(candidates.findIndex((c) => c.doi === item.doi) + 1);
      expect(item.candidateRank).toBeGreaterThanOrEqual(8);
    }
  });

  it("records how many candidates the query returned on every item", () => {
    const shortList = candidates.slice(0, 12);
    const chosen = select(shortList);
    expect(chosen.every((c) => c.candidatesReturned === 12)).toBe(true);
  });

  it("keeps the distance each item was chosen by", () => {
    for (const item of select()) {
      const candidate = candidates.find((c) => c.doi === item.doi);
      expect(item.distance).toBe(candidate?.distance);
    }
  });
});
