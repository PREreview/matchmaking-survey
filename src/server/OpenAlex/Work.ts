export type Doi = string;

type OrcidId = string;

export type Work = {
  doi: Doi;
  title: string;
  abstract: string;
  authors: ReadonlyArray<OrcidId>;
};
