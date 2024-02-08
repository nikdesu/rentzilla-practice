import { test as base } from "@playwright/test";

import HomePage from "@pages/home.page";
import ProductsPage from "@pages/products.page";
import ChosenProductPage from "@pages/chosenProduct.page";

export const test = base.extend<{ homePage: HomePage; productsPage: ProductsPage; chosenProductPage: ChosenProductPage }>({
  homePage: async ({ page }, use, TestInfo) => {
    await use(new HomePage(page, TestInfo));
  },
  productsPage: async ({ page }, use, TestInfo) => {
    await use(new ProductsPage(page, TestInfo));
  },
  chosenProductPage: async ({ page }, use, TestInfo) => {
    await use(new ChosenProductPage(page, TestInfo));
  },
});

export { expect, type Page, type Locator, type TestInfo } from "@playwright/test";
