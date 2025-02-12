import { browser } from "k6/browser";
import { check } from "https://jslib.k6.io/k6-utils/1.5.0/index.js";

export const options = {
  scenarios: {
    browser: {
      executor: "constant-vus",
      vus: 1,
      duration: "10s",
      options: {
        browser: {
          type: "chromium",
        },
      },
    },
  },
  thresholds: {
    checks: ["rate==1.0"],
  },
};

export default async function () {
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto("https://todos.demo.emahnovets.dev/");

    await check(page.locator("h1"), {
      "Header is visible": async (header) =>
        (await header.textContent()) === "ToDos",
    });
  } finally {
    page.close();
  }
}
