import { test as base } from "@playwright/test";

import HomePage from "@pages/home.page";

export const test = base.extend<{ homePage: HomePage }>({
  homePage: async ({ page }, use, TestInfo) => {
    await use(new HomePage(page, TestInfo));
  },
});

export { expect, type Page, type Locator, type TestInfo } from "@playwright/test";
