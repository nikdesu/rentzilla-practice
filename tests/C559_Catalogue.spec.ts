import { test, expect } from "@fixtures/base.fixtures";
import endpoints from "endpoints/endpoints";

test("C599:Verify 'Каталог'", async ({ page, homePage, productsPage }) => {
  await test.step("Open home page", async () => {
    await homePage.goToHomePage();
  });

  await test.step("Verify the 'Каталог' button is displayed in the top left corner under the logo", async () => {
    await expect(homePage.headerSection.btnCatalogue).toBeVisible();
  });

  await test.step("Click on the 'Каталог' button.", async () => {
    await homePage.headerSection.btnCatalogue.click();
    await expect(homePage.catalogueWindow.specialEquipment).toBeVisible();
    await expect(homePage.catalogueWindow.services).toBeVisible();
  });

  await test.step("Hover the 'Спецтехніка' label", async () => {
    await homePage.catalogueWindow.specialEquipment.hover();
    await expect(homePage.catalogueWindow.buildingEq).toBeVisible();
    await expect(homePage.catalogueWindow.utilityEq).toBeVisible();
    await expect(homePage.catalogueWindow.ruralEq).toBeVisible();
    await expect(homePage.catalogueWindow.storageEq).toBeVisible();
  });

  await test.step("Click on 'Будівельна техніка'", async () => {
    await homePage.catalogueWindow.specialEquipment.hover();
    await homePage.catalogueWindow.buildingEq.click();
    await expect(page).toHaveURL(RegExp(endpoints.building_equipment));
    await expect(productsPage.filtersSection.buildingEqFilter).toBeVisible();
  });

  await test.step("Click on 'Комунальна техніка'", async () => {
    await homePage.headerSection.btnCatalogue.click();
    await homePage.catalogueWindow.specialEquipment.hover();
    await homePage.catalogueWindow.utilityEq.click();
    await expect(page).toHaveURL(RegExp(endpoints.utility_equipment));
    await expect(productsPage.filtersSection.utilityEqFilter).toBeVisible();
  });

  await test.step("Click on 'Сільськогосподарська техніка'", async () => {
    await homePage.headerSection.btnCatalogue.click();
    await homePage.catalogueWindow.specialEquipment.hover();
    await homePage.catalogueWindow.ruralEq.click();
    await expect(page).toHaveURL(RegExp(endpoints.rural_equipment));
    await expect(productsPage.filtersSection.ruralEqFilter).toBeVisible();
  });

  await test.step("Click on 'Складська техніка'", async () => {
    await homePage.headerSection.btnCatalogue.click();
    await homePage.catalogueWindow.specialEquipment.hover();
    await homePage.catalogueWindow.storageEq.click();
    await expect(page).toHaveURL(RegExp(endpoints.storage_equipment));
    await expect(productsPage.filtersSection.storageEqFilter).toBeVisible();
  });

  await test.step("Open the main page again. Click on 'Каталог'. Hover 'Спецтехніка'. Hover 'Будівельна техніка'", async () => {
    await homePage.goToHomePage();
    await homePage.verifyLabelsVisibiltyBuildingEq();
    await homePage.verifyCorrectURLBuildingEq();
  });

  await homePage.logoClickCatalogueClickSpecialEqHover();

  await test.step("Hover 'Комунальна техніка'", async () => {
    await homePage.catalogueWindow.utilityEq.hover();
    await homePage.verifyLabelsVisibiltyUtilityEq();
    await homePage.verifyCorrectURLUtilityEq();
  });

  await homePage.logoClickCatalogueClickSpecialEqHover();

  await test.step("Hover 'Сільськогосподарська техніка'", async () => {
    await homePage.catalogueWindow.ruralEq.hover();
    await homePage.verifyLabelsVisibiltyRuralEq();
    await homePage.verifyCorrectURLRuralEq();
  });

  await homePage.logoClickCatalogueClickSpecialEqHover();

  await test.step("Hover 'Складська техніка'", async () => {
    await homePage.catalogueWindow.storageEq.hover();
    await homePage.verifyLabelsVisibiltyStorageEq();
    await homePage.verifyCorrectURLStorageEq();
  });

  await homePage.logoClickCatalogueClickSpecialEqHover();

  await test.step("Hover the 'Послуги' label.", async () => {
    await homePage.catalogueWindow.services.hover();
    await expect(homePage.catalogueWindow.servicesBuilding).toBeVisible();
    await expect(homePage.catalogueWindow.servicesOther).toBeVisible();
    await expect(homePage.catalogueWindow.servicesRural).toBeVisible();
  });

  await test.step("Hover the 'Будівельні' label", async () => {
    await homePage.catalogueWindow.services.hover();
    await homePage.catalogueWindow.servicesBuilding.hover();
    await expect(homePage.catalogueWindow.servicesBuildingRoadworkds).toBeVisible();
    await expect(homePage.catalogueWindow.servicesBuildingLoadUnload).toBeVisible();
  });

  await test.step("Hover the 'Інші' label", async () => {
    await homePage.catalogueWindow.services.hover();
    await homePage.catalogueWindow.servicesOther.hover();
    await expect(homePage.catalogueWindow.servicesOtherTrees).toBeVisible();
    await expect(homePage.catalogueWindow.servicesOtherLoadMaterials).toBeVisible();
  });

  await test.step("Hover the 'Сільськогосподарські' label", async () => {
    await homePage.catalogueWindow.services.hover();
    await homePage.catalogueWindow.servicesRural.hover();
    await expect(homePage.catalogueWindow.servicesRuralSowing).toBeVisible();
    await expect(homePage.catalogueWindow.servicesRuralSpraying).toBeVisible();
  });

  await test.step("Click on any label displayed on the right menu.", async () => {
    await homePage.catalogueWindow.services.hover();
    await homePage.catalogueWindow.servicesRural.hover();
    await homePage.catalogueWindow.servicesRuralSowing.click();
    await expect(page).toHaveURL(RegExp(endpoints.products));
    await expect(productsPage.filtersSection.sowingFilter).toBeVisible;
  });

  await homePage.logoClickCatalogueClickServicesHover();

  //await test.step("", async () => {});
});
