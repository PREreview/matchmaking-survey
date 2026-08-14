# Improve our ability to evaluate approaches

To be able to make fair comparisons between models, heuristics etc. we need to what and why we showed someone a paper during a survey.

Currently SurveyPick hold a DOI and a distance. We need to extend that with:

- rank
- window (e.g. 0-7 for top picks, 7-17 for first depth window)

The getSurveyPapers should return SurveyPick[] but also:

- candidateCount (to make sure we know if there were less than 5000 candidates)

We want to extend what is stored in the `scientists` and `papers` table and consequently included in the CSV export of survey responses:

Add to scientists:

- profile_works (DOIs of the works we pass to getSurveyPapers)
- survey_created_from (csv | orcid)
- candidate_count (null | integer)
- languages (languages the user permitted)

Add to papers:

- rank (integer)
- window (string)
