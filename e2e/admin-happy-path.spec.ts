import { expect, test } from "@playwright/test";

const FIXTURE_CSV = new URL("./fixtures/example.csv", import.meta.url).pathname;

async function answerCurrentPage(page: import("@playwright/test").Page) {
  await page.locator('.sd-rating__item-text[data-text="5"]').click();
  const completeBtn = page.getByRole("button", { name: "Complete" });
  if (await completeBtn.isVisible()) {
    await completeBtn.click();
    return true;
  }
  await page.getByRole("button", { name: "Next" }).click();
  return false;
}

test("admin uploads a csv, a scientist completes the survey, admin downloads results", async ({
  page,
}) => {
  await page.goto("/admin");
  await expect(
    page.getByRole("heading", { name: "Survey Admin" }),
  ).toBeVisible();

  await page.locator('input[type="file"]').setInputFiles(FIXTURE_CSV);
  await page.getByRole("button", { name: "Upload" }).click();

  const surveyLink = page.locator('a[href*="/s/"]').first();
  await expect(surveyLink).toBeVisible();
  const surveyHref = await surveyLink.getAttribute("href");
  if (!surveyHref) throw new Error("survey link missing href");

  await page.goto(surveyHref);

  await expect(
    page.getByRole("heading", { name: "PREreview matchmaking survey" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Begin" }).click();

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
