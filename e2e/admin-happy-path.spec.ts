import { expect, test } from "@playwright/test";

const FIXTURE_CSV = new URL("./fixtures/example.csv", import.meta.url).pathname;

async function answerCurrentPage(page: import("@playwright/test").Page) {
  await page.locator('input[name="rating"][value="5"]').check();
  const submitBtn = page.getByRole("button", { name: "Submit" });
  if (await submitBtn.isVisible()) {
    await submitBtn.click();
    return true;
  }
  await page.getByRole("button", { name: "Next" }).click();
  return false;
}

async function uploadFixtureAndGetSurveyLink(page: import("@playwright/test").Page) {
  await page.goto("/admin");
  await page.locator('input[type="file"]').setInputFiles(FIXTURE_CSV);
  await page.getByRole("button", { name: "Upload" }).click();

  const surveyLink = page.locator('a[href*="/s/"]').first();
  await expect(surveyLink).toBeVisible();
  const surveyHref = await surveyLink.getAttribute("href");
  if (!surveyHref) throw new Error("survey link missing href");
  return surveyHref;
}

test("admin uploads a csv, a scientist completes the survey, admin downloads results", async ({
  page,
}) => {
  await page.goto("/admin");
  await expect(page.getByRole("heading", { name: "Survey Admin" })).toBeVisible();

  const surveyHref = await uploadFixtureAndGetSurveyLink(page);

  await page.goto(surveyHref);

  await expect(page.getByRole("heading", { name: "PREreview matchmaking survey" })).toBeVisible();
  await page.getByRole("link", { name: "Begin" }).click();

  let done = false;
  while (!done) {
    done = await answerCurrentPage(page);
  }
  await expect(
    page.getByRole("heading", {
      name: "Thank you for helping us improve matchmaking!",
    }),
  ).toBeVisible();

  await page.goto("/admin");
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("link", { name: "Download responses.csv" }).click(),
  ]);
  const csvPath = await download.path();
  if (!csvPath) throw new Error("download did not produce a file");
  const fs = await import("node:fs");
  const csvContent = fs.readFileSync(csvPath, "utf-8");
  expect(csvContent).toContain("rating");
  expect(csvContent).toContain("comment");
  expect(csvContent).toContain("5");
  expect(csvContent).toContain("doi");
  expect(csvContent).toContain("10.9999/e2e-shared-paper");
});

// Regression test for a stacking-context bug: the custom radio circle drawn on
// each label (via ::before/::after) briefly put the label above the (visually
// hidden) input in paint order, so a real click/hit-test on the input itself
// was intercepted by the label and never checked the radio.
test("every rating option, including Not sure, can be selected by clicking its radio input directly", async ({
  page,
}) => {
  const surveyHref = await uploadFixtureAndGetSurveyLink(page);
  await page.goto(surveyHref);
  await page.getByRole("link", { name: "Begin" }).click();

  for (const value of [0, 1, 2, 3, 4, 5]) {
    const input = page.locator(`input[name="rating"][value="${value}"]`);
    await input.check();
    await expect(input).toBeChecked();
  }
});
