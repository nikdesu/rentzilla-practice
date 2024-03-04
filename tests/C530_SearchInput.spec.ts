import { test, expect } from "@fixtures/base.fixtures";
import endpoints from "endpoints/endpoints";

test("C530:Verify search input", async ({ page, homePage, productsPage }) => {
  await test.step("Open home page", async () => {
    await homePage.goToHomePage();
  });

  await test.step("Click on the search field input", async () => {
    await homePage.headerSection.fieldSearch.click();
    await expect(homePage.searchWindow.searchHistory).toBeVisible();
    await expect(homePage.searchWindow.services).toBeVisible();
    await expect(homePage.searchWindow.categories).toBeVisible();
  });

  await test.step("Press the 'Enter' keyboard button.", async () => {
    await homePage.headerSection.fieldSearch.press("Enter");
    await expect(page).toHaveURL(endpoints.products);
  });

  await test.step("Return back to the previous page, enter 'Трактор' into the 'Пошук оголошення за ключовими словами' input and press the 'Enter' keyboard button.", async () => {
    await homePage.goToHomePage();
    await homePage.headerSection.fieldSearch.fill("Трактор");
    await homePage.headerSection.fieldSearch.press("Enter");
  });

  await test.step("Click on any first unit", async () => {
    await productsPage.productClick();
    await expect(page).toHaveURL(RegExp(endpoints.chosen_product));
  });

  await test.step("Click on the logo in the header and Click on the 'Пошук оголошення за ключовими словами' input", async () => {
    await productsPage.logoClick();
    await homePage.goToHomePage();
    await homePage.headerSection.fieldSearch.click();
    await expect(page.getByTestId("searchDropdown").getByText("Трактор").nth(0)).toBeVisible();
  });

  await test.step("Enter 'Ремонт гидравлики' into the 'Пошук оголошення за ключовими словами' input and press the 'Enter' keyboard button.", async () => {
    await homePage.headerSection.fieldSearch.fill("Ремонт гидравлики");
    await homePage.headerSection.fieldSearch.press("Enter");
  });

  await test.step("Click on any first unit", async () => {
    await productsPage.productClick();
    await expect(page).toHaveURL(RegExp(endpoints.chosen_product));
  });

  await test.step("Click on the logo in the header and Click on the 'Пошук оголошення за ключовими словами' input", async () => {
    await productsPage.logoClick();
    await homePage.goToHomePage();
    await homePage.headerSection.fieldSearch.click();
    await expect(page.getByTestId("searchDropdown").getByText("Ремонт гидравлики").nth(0)).toBeVisible();
  });

  await test.step("Return back to the main page, enter 'Ремонт' into the search field input and click on any first search result in the search dropdown.", async () => {
    await homePage.goToHomePage();
    await homePage.headerSection.fieldSearch.fill("Ремонт");
    await expect(homePage.searchWindow.firstRecommendedUnit).toHaveText(RegExp("Ремонт"));
    await homePage.searchWindow.firstRecommendedUnit.click();
  });

  await test.step("Click on the logo in the header and enter only spaces in the search field input. After input press the 'Enter' keyboard button.", async () => {
    await homePage.headerSection.fieldSearch.fill("         ");
    await expect(page.getByTestId("searchDropdown").getByText("Трактор").nth(0)).toBeVisible();
    await expect(page.getByTestId("searchDropdown").getByText("Ремонт гидравлики").nth(0)).toBeVisible();
    await homePage.headerSection.fieldSearch.press("Enter");
    //await expect(productsPage.productsSection.productFoundMsg).toHaveAttribute('name', RegExp('Знайдено 0 оголошень на видимій території за запитом " "'));
  });

  await test.step("Return back to the previous page and enter the '123' in 'Пошук оголошення за ключовими словами' input. After input press the 'Enter' keyboard button and click on any first unit.", async () => {
    await productsPage.headerSection.fieldSearch.fill("123");
    await productsPage.headerSection.fieldSearch.press("Enter");
    //await expect(productsPage.productsSection.productFoundMsg).toHaveText('name', RegExp('Знайдено 5 оголошень на видимій території за запитом "123"'));
    await productsPage.productClick();
  });

  await test.step("Click on the 'Пошук оголошення за ключовими словами' search input and enter any specific symbol: !, @, #, $, %, ^, (, ), * After each Input press the 'Enter' button on the keyboard.", async () => {
    await productsPage.symbolFillEnterClick("!");
    await productsPage.symbolFillEnterClick("@");
    await productsPage.symbolFillEnterClick("#");
    await productsPage.symbolFillEnterClick("$");
    await productsPage.symbolFillEnterClick("%");
    await productsPage.symbolFillEnterClick("^");
    await productsPage.symbolFillEnterClick("(");
    await productsPage.symbolFillEnterClick(")");
    await productsPage.symbolFillEnterClick("*");
  });

  await test.step("Click on the 'Пошук оголошення за ключовими словами' search input and enter any specific symbol: <, >, ^, ;,{,},[,] After each Input press the 'Enter' button on the keyboard.", async () => {
    await productsPage.symbolFillEnterClick("<");
    await productsPage.symbolFillEnterClick(">");
    await productsPage.symbolFillEnterClick("^");
    await productsPage.symbolFillEnterClick(";");
    await productsPage.symbolFillEnterClick("{");
    await productsPage.symbolFillEnterClick("}");
    await productsPage.symbolFillEnterClick("[");
    await productsPage.symbolFillEnterClick("]");
  });

  await test.step("Return back to the main page and enter the non-existing keyword in the 'Пошук оголошення за ключовими словами' input: non-existent тест1234567890. Press the 'Enter' keyboard button.", async () => {
    await homePage.goToHomePage();
    await homePage.headerSection.fieldSearch.fill("тест1234567890");
  });

  await test.step("Return back to the previous page and click on the 'Пошук оголошення за ключовими словами' search input and enter 'Асфальтування'.", async () => {
    await homePage.goToHomePage();
    await homePage.headerSection.fieldSearch.fill("Асфальтування");
    await expect(homePage.searchWindow.firstRecommendedUnit).toHaveText(RegExp("Асфальтування"));
  });

  await test.step("Click the 'Асфальтування' in the 'Послуги' section in the dropdown.", async () => {
    await homePage.searchWindow.servicesAsphalting.click();
    await productsPage.filtersSection.btnArrowBuilding.click();
    await expect(productsPage.filtersSection.checkBoxAsphalting).toBeChecked();
  });

  await test.step("Return back to the previous page, click on the 'Пошук оголошення за ключовими словами' search input and enter 'Драглайн'", async () => {
    await homePage.goToHomePage();
    await homePage.headerSection.fieldSearch.fill("Драглайн");
    await expect(homePage.searchWindow.firstRecommendedUnit).toHaveText(RegExp("драглайн"));
  });

  await test.step("Click the 'драглайни' in the 'Категорії' section in the dropdown.", async () => {
    await homePage.searchWindow.categoriesDragLine.click();
    await expect(productsPage.filtersSection.checkBoxBuilding).toBeChecked();
    await expect(productsPage.filtersSection.checkBoxOther).toBeChecked();
    await expect(productsPage.filtersSection.checkBoxRural).toBeChecked();
  });

  await test.step("Return back to the previous page, click on the 'Пошук оголошення за ключовими словами' search input and enter the 'Ремонт'.", async () => {
    await homePage.goToHomePage();
    await homePage.headerSection.fieldSearch.click();
    await homePage.headerSection.fieldSearch.fill("Ремонт");
  });

  await test.step("Click on the 'X' button in the search input.", async () => {
    await homePage.searchWindow.closeBtn.click();
    await expect(homePage.searchWindow.categories).not.toBeVisible();
    await expect(homePage.searchWindow.categories).not.toBeVisible();
    await expect(homePage.searchWindow.services).not.toBeVisible();
  });
});
