import { test as base } from "@playwright/test";

import HomePage from "@pages/home.page";
import ProductsPage from "@pages/products.page";
import ChosenProductPage from "@pages/chosenProduct.page";
import BackcallApi from "@api/backcall.api";
import HelperApi from "@api/helper.api";

export const test = base.extend<{
  homePage: HomePage;
  productsPage: ProductsPage;
  chosenProductPage: ChosenProductPage;
  backcallApi: BackcallApi;
  helperApi: HelperApi;
}>({
  homePage: async ({ page }, use, TestInfo) => {
    await use(new HomePage(page, TestInfo));
  },
  productsPage: async ({ page }, use, TestInfo) => {
    await use(new ProductsPage(page, TestInfo));
  },
  chosenProductPage: async ({ page }, use, TestInfo) => {
    await use(new ChosenProductPage(page, TestInfo));
  },
  backcallApi: async ({ request }, use) => {
    await use(new BackcallApi(request));
  },
  helperApi: async ({ backcallApi }, use) => {
    await use(new HelperApi(backcallApi));
  },
});

export { expect, type Page, type Locator, type TestInfo, type APIRequestContext } from "@playwright/test";
