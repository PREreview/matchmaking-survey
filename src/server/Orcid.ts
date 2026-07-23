import { Context, Data, Effect, Layer } from "effect";

export class UnableToGetProfile extends Data.TaggedError("UnableToGetProfile")<{
  cause?: unknown;
}> {}

type OrcidId = string;

type Doi = string;

type Profile = {
  name: string;
  works: ReadonlyArray<Doi>;
};

export class Orcid extends Context.Tag("Orcid")<
  Orcid,
  {
    getProfile: (input: OrcidId) => Effect.Effect<Profile, UnableToGetProfile>;
  }
>() {}

export const orcidLayer = Layer.succeed(Orcid, {
  getProfile: () => new UnableToGetProfile({ cause: "not implemented" }),
});
