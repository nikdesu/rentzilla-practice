import { test, expect } from "@fixtures/base.fixtures";
import endpoints from "endpoints/endpoints";

test("C213: Checking 'Спецтехніка' section on the main page", async ({ page, homePage, productsPage, chosenProductPage }) => {
  await test.step("Open home page", async () => {
    await homePage.goToHomePage();
  });

  await homePage.checkIfSpecialEqIsVisible();

  await test.step("Click on 'Сівалки'", async () => {
    await homePage.specialEqSection.btnPlanters.click();
    await expect(page).toHaveURL(RegExp(endpoints.products));
    await expect(productsPage.filtersSection.checkBoxOther).toBeChecked();
  });

  await test.step("Click on the first relevant unit.", async () => {
    await productsPage.productClick();
    await expect(chosenProductPage.productCharacteristics.categorySowingComplexes).toBeVisible();
  });

  await productsPage.logoClick();

  await homePage.checkIfSpecialEqIsVisible();

  await test.step("Click on 'Трактори'", async () => {
    await homePage.specialEqSection.btnTractors.click();
    await expect(page).toHaveURL(RegExp(endpoints.products));
    await expect(productsPage.filtersSection.checkBoxOther).toBeChecked();
  });

  await test.step("Click on the first relevant unit.", async () => {
    await productsPage.productClick();
    await expect(chosenProductPage.productCharacteristics.categoryTractors).toBeVisible();
  });

  await productsPage.logoClick();

  await homePage.checkIfSpecialEqIsVisible();

  await test.step("Click on 'Обприскувачі'", async () => {
    await homePage.specialEqSection.btnSprayers.click();
    await expect(page).toHaveURL(RegExp(endpoints.products));
    await expect(productsPage.filtersSection.checkBoxOther).toBeChecked();
    await expect(productsPage.filtersSection.checkBoxBuilding).toBeChecked();
  });

  await test.step("Click on the first relevant unit.", async () => {
    await productsPage.productClick();
    await expect(chosenProductPage.productCharacteristics.categorySprayers).toBeVisible();
  });

  await productsPage.logoClick();

  await homePage.checkIfSpecialEqIsVisible();

  await test.step("Click on 'Екскаватори'", async () => {
    await homePage.specialEqSection.btnExcavator.click();
    await expect(page).toHaveURL(RegExp(endpoints.products));
    await expect(productsPage.filtersSection.checkBoxRural).toBeChecked();
  });

  await test.step("Click on the first relevant unit.", async () => {
    await productsPage.productClick();
    await expect(chosenProductPage.productCharacteristics.categoryExcavators).toBeVisible();
  });

  await productsPage.logoClick();

  await homePage.checkIfSpecialEqIsVisible();

  await test.step("Click on 'Навантажувачі'", async () => {
    await homePage.specialEqSection.btnLoaders.click();
    await expect(page).toHaveURL(RegExp(endpoints.products));
    await expect(productsPage.filtersSection.checkBoxRural).toBeChecked();
  });

  await test.step("Click on the first relevant unit.", async () => {
    await productsPage.productClick();
    await expect(chosenProductPage.productCharacteristics.categoryLoaders).toBeVisible();
  });

  await productsPage.logoClick();

  await homePage.checkIfSpecialEqIsVisible();

  await test.step("Click on 'Підйомники'", async () => {
    await homePage.specialEqSection.btnElevators.click();
    await expect(page).toHaveURL(RegExp(endpoints.products));
    await expect(productsPage.filtersSection.checkBoxRural).toBeChecked();
    await expect(productsPage.filtersSection.checkBoxBuilding).toBeChecked();
  });

  await test.step("Click on the first relevant unit.", async () => {
    await productsPage.productClick();
    await expect(chosenProductPage.productCharacteristics.categoryElevators).toBeVisible();
  });

  await productsPage.logoClick();

  await homePage.checkIfSpecialEqIsVisible();

  await test.step("Click on 'Комунальні машини'", async () => {
    await homePage.specialEqSection.btnUtilVehicles.click();
    await expect(page).toHaveURL(RegExp(endpoints.products));
    await expect(productsPage.filtersSection.checkBoxRural).toBeChecked();
    await expect(productsPage.filtersSection.checkBoxBuilding).toBeChecked();
  });

  await test.step("Click on the first relevant unit.", async () => {
    await productsPage.productClick();
    await expect(chosenProductPage.productCharacteristics.categoryUtilVehicles).toBeVisible();
  });
});
