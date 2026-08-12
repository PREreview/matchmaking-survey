import { Chunk, Effect, Random } from "effect";
import { describe, expect, it } from "vitest";
import { getTopMidRandom } from "./index.js";
import type { Doi } from "./Shared.js";

type Candidate = { doi: Doi; distance: number };

const candidates = (n: number): ReadonlyArray<Candidate> =>
  Array.from({ length: n }, (_, i) => ({
    doi: `10.1101/rank-${i + 1}` as Doi,
    distance: (i + 1) / n,
  }));

const rank = ({ doi }: Candidate): number => Number(doi.replace("10.1101/rank-", ""));

const fixedRandom = (permute: <A>(items: ReadonlyArray<A>) => ReadonlyArray<A>): Random.Random => ({
  [Random.RandomTypeId]: Random.RandomTypeId,
  next: Effect.succeed(0),
  nextBoolean: Effect.succeed(false),
  nextInt: Effect.succeed(0),
  nextRange: () => Effect.succeed(0),
  nextIntBetween: () => Effect.succeed(0),
  shuffle: <A>(elements: Iterable<A>) => Effect.succeed(Chunk.fromIterable(permute([...elements]))),
});

const reversed = <A>(items: ReadonlyArray<A>): ReadonlyArray<A> => [...items].reverse();

const run = <A>(effect: Effect.Effect<A>, random: Random.Random): A =>
  Effect.runSync(Effect.withRandom(effect, random));

describe("getTopMidRandom", () => {
  it("takes the head of the shuffled window, not the head of the window", () => {
    const result = run(getTopMidRandom(candidates(500)), fixedRandom(reversed));

    expect(result.slice(0, 7).map(rank)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(result.slice(7, 11).map(rank)).toEqual([30, 29, 28, 27]);
    expect(result.slice(11, 15).map(rank)).toEqual([500, 499, 498, 497]);
  });

  it("draws mid from ranks 21-30 and random from ranks 8-500, without repeats", () => {
    for (let seed = 0; seed < 50; seed++) {
      const result = run(getTopMidRandom(candidates(500)), Random.make(`seed-${seed}`));

      expect(result).toHaveLength(15);
      expect(new Set(result).size).toBe(15);
      expect(result.slice(0, 7).map(rank)).toEqual([1, 2, 3, 4, 5, 6, 7]);
      for (const candidate of result.slice(7, 11)) {
        expect(rank(candidate)).toBeGreaterThanOrEqual(21);
        expect(rank(candidate)).toBeLessThanOrEqual(30);
      }
      for (const candidate of result.slice(11, 15)) {
        expect(rank(candidate)).toBeGreaterThanOrEqual(8);
        expect(rank(candidate)).toBeLessThanOrEqual(500);
      }
    }
  });

  it("is repeatable under a fixed seed", () => {
    const once = run(getTopMidRandom(candidates(500)), Random.make("repeatable"));
    const twice = run(getTopMidRandom(candidates(500)), Random.make("repeatable"));

    expect(once).toEqual(twice);
  });

  it("draws every decile of the random stratum equally often", () => {
    const draws = 1_000;
    const pool = candidates(500);
    const counts = new Map<number, number>();

    const random = Random.make("uniformity");
    for (let draw = 0; draw < draws; draw++) {
      for (const candidate of run(getTopMidRandom(pool), random).slice(11, 15)) {
        counts.set(rank(candidate), (counts.get(rank(candidate)) ?? 0) + 1);
      }
    }

    const ranksTheMidWindowCannotClaim = Array.from({ length: 470 }, (_, i) => i + 31);
    const observed = ranksTheMidWindowCannotClaim.map((r) => (counts.get(r) ?? 0) / draws);
    const expectedPerRank = 4 / (493 - 4);
    const deciles = Array.from({ length: 10 }, (_, d) => {
      const slice = observed.slice(d * 47, (d + 1) * 47);
      return slice.reduce((a, b) => a + b, 0) / slice.length;
    });

    for (const decile of deciles) {
      expect(decile / expectedPerRank).toBeGreaterThan(0.8);
      expect(decile / expectedPerRank).toBeLessThan(1.2);
    }
  });

  describe("when retrieval returns fewer candidates than the strata need", () => {
    it("serves a short survey rather than failing", () => {
      const result = run(getTopMidRandom(candidates(12)), Random.make("short"));

      expect(result).toHaveLength(11);
      expect(new Set(result).size).toBe(11);
      expect(result.slice(0, 7).map(rank)).toEqual([1, 2, 3, 4, 5, 6, 7]);
      for (const candidate of result.slice(7)) {
        expect(rank(candidate)).toBeGreaterThanOrEqual(8);
        expect(rank(candidate)).toBeLessThanOrEqual(12);
      }
    });

    it("draws a partial mid stratum when the window is only partly filled", () => {
      const result = run(getTopMidRandom(candidates(23)), Random.make("partial"));

      expect(result).toHaveLength(14);
      expect(
        result
          .slice(7, 10)
          .map(rank)
          .sort((a, b) => a - b),
      ).toEqual([21, 22, 23]);
    });

    it("returns nothing when there are no candidates", () => {
      expect(run(getTopMidRandom([]), Random.make("empty"))).toEqual([]);
    });
  });
});
