import { HttpClient, HttpClientRequest, HttpClientResponse } from "@effect/platform";
import { Option, Array, Context, Data, Effect, Layer, pipe, Schema, Struct, flow } from "effect";

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

export const orcidLayer = Layer.effect(
  Orcid,
  Effect.gen(function* () {
    const httpClient = yield* HttpClient.HttpClient;

    return {
      getProfile: getProfile(httpClient),
    };
  }),
);

const getProfile =
  (httpClient: HttpClient.HttpClient) =>
  (input: OrcidId): Effect.Effect<Profile, UnableToGetProfile> =>
    Effect.all(
      {
        name: getName(httpClient)(input),
        works: getWorks(httpClient)(input),
      },
      { concurrency: "inherit" },
    );

const getName = (
  httpClient: HttpClient.HttpClient,
): ((input: OrcidId) => Effect.Effect<Profile["name"], UnableToGetProfile>) =>
  Effect.fnUntraced(
    function* (orcidId) {
      const request = pipe(
        HttpClientRequest.get(`https://pub.orcid.org/v3.0/${orcidId}/personal-details`),
        HttpClientRequest.acceptJson,
      );

      const response = yield* httpClient.execute(request);
      yield* HttpClientResponse.filterStatusOk(response);

      const parsed = yield* HttpClientResponse.schemaBodyJson(PersonalDetailsSchema)(response);

      return `${parsed.name["given-names"].value} ${parsed.name["family-name"].value}`;
    },
    Effect.mapError((cause) => new UnableToGetProfile({ cause })),
  );

const getWorks = (
  httpClient: HttpClient.HttpClient,
): ((input: OrcidId) => Effect.Effect<Profile["works"], UnableToGetProfile>) =>
  Effect.fnUntraced(
    function* (orcidId) {
      const request = pipe(
        HttpClientRequest.get(`https://pub.orcid.org/v3.0/${orcidId}/works`),
        HttpClientRequest.acceptJson,
      );

      const response = yield* httpClient.execute(request);
      yield* HttpClientResponse.filterStatusOk(response);

      const parsed = yield* HttpClientResponse.schemaBodyJson(ListOfWorksSchema)(response);

      return Array.filterMap(parsed.group, (work) =>
        Array.findFirst(
          work["external-ids"]["external-id"],
          flow(
            Option.liftPredicate((id) => id["external-id-type"] === "doi"),
            Option.andThen(Struct.get("external-id-value")),
          ),
        ),
      );
    },
    Effect.mapError((cause) => new UnableToGetProfile({ cause })),
  );

const PersonalDetailsSchema = Schema.Struct({
  name: Schema.Struct({
    "given-names": Schema.Struct({
      value: Schema.compose(Schema.Trim, Schema.NonEmptyString),
    }),
    "family-name": Schema.Struct({
      value: Schema.compose(Schema.Trim, Schema.NonEmptyString),
    }),
  }),
});

const WorkSchema = Schema.Struct({
  "external-ids": Schema.Struct({
    "external-id": Schema.NonEmptyArray(
      Schema.Struct({
        "external-id-type": Schema.NonEmptyTrimmedString,
        "external-id-value": Schema.NonEmptyTrimmedString,
      }),
    ),
  }),
});

const ListOfWorksSchema = Schema.Struct({
  group: Schema.Array(WorkSchema),
});
