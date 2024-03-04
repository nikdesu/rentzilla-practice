import { test, expect } from "@fixtures/base.fixtures";
import endpoints from "endpoints/endpoints";

test("C212: Checking 'Послуги' section on the main page", async ({ page, homePage, productsPage, chosenProductPage }) => {
  await test.step("Open home page", async () => {
    await homePage.goToHomePage();
  });

  await homePage.checkIfServicesIsvisible();

  await test.step("Click on 'Комплекс робіт'", async () => {
    await homePage.servicesSection.btnComplexWorks.click();
    await expect(page).toHaveURL(endpoints.products);
    await productsPage.filtersSection.btnArrowBuilding.click();
    //await expect(productsPage.filtersSection.checkBoxComplexWorks).toBeChecked();
  });

  await test.step("Click on the first relevant unit.", async () => {
    await productsPage.productClick();
    await expect(chosenProductPage.mainSection.containerItemComplexWork).toBeVisible();
  });

  await productsPage.logoClick();

  await homePage.checkIfServicesIsvisible();

  await test.step("Click on 'Навантаження та розвантаження'", async () => {
    await homePage.servicesSection.btnLoadUnload.click();
    await expect(page).toHaveURL(endpoints.products);
    await expect(productsPage.filtersSection.checkBoxLoadUnload).toBeChecked();
  });

  await test.step("Click on the first relevant unit.", async () => {
    await productsPage.productClick();
    await expect(chosenProductPage.mainSection.containerItemLoadUnload).toBeVisible;
  });

  await productsPage.logoClick();

  await homePage.checkIfServicesIsvisible();

  await test.step("Click on 'Асфальтування'", async () => {
    await homePage.servicesSection.btnAsphalting.click();
    await expect(page).toHaveURL(endpoints.products);
    await expect(productsPage.filtersSection.checkBoxAsphalting).toBeChecked();
  });

  await test.step("Click on the first relevant unit.", async () => {
    await productsPage.productClick();
    await expect(chosenProductPage.mainSection.containerItemAsphalting).toBeVisible();
  });

  await productsPage.logoClick();

  await homePage.checkIfServicesIsvisible();

  await test.step("Click on 'Дорожні роботи'", async () => {
    await homePage.servicesSection.btnRoadWorks.click();
    await expect(page).toHaveURL(endpoints.products);
    await expect(productsPage.filtersSection.checkBoxRoadWorks).toBeChecked();
  });

  await test.step("Click on the first relevant unit.", async () => {
    await productsPage.productClick();
    await expect(chosenProductPage.mainSection.containerItemRoadWork).toBeVisible();
  });

  await productsPage.logoClick();

  await homePage.checkIfServicesIsvisible();

  await test.step("Click on 'Орання землі'", async () => {
    await homePage.servicesSection.btnPlowing.click();
    await expect(page).toHaveURL(endpoints.products);
    await expect(productsPage.filtersSection.checkBoxPlowing).toBeChecked();
  });

  await test.step("Click on the first relevant unit.", async () => {
    await productsPage.productClick();
    await expect(chosenProductPage.mainSection.containerItemPlowing).toBeVisible();
  });

  await productsPage.logoClick();

  await homePage.checkIfServicesIsvisible();

  await test.step("Click on 'Підйомні роботи'", async () => {
    await homePage.servicesSection.btnLifting.click();
    await expect(page).toHaveURL(endpoints.products);
    await expect(productsPage.filtersSection.checkBoxLifting).toBeChecked();
  });

  await test.step("Click on the first relevant unit.", async () => {
    await productsPage.productClick();
    await expect(chosenProductPage.mainSection.containerItemLift).toBeVisible();
  });

  await productsPage.logoClick();

  await homePage.checkIfServicesIsvisible();

  await test.step("Click on 'Перевезення матеріалів'", async () => {
    await homePage.servicesSection.btnTransportation.click();
    await expect(page).toHaveURL(endpoints.products);
    await expect(productsPage.filtersSection.checkBoxTrasportation).toBeChecked();
  });

  await test.step("Click on the first relevant unit.", async () => {
    await productsPage.productClick();
    await expect(chosenProductPage.mainSection.containerItemTransporting).toBeVisible();
  });
});
