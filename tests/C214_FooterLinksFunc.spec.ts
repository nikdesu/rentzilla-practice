import { test, expect } from "@fixtures/base.fixtures";
import endpoints from "../endpoints";

test("C214: Verify that all elements on the footer are displayed and all links are clickable", async ({ page, homePage }) => {
  await test.step("Open home page", async () => {
    await homePage.goToHomePage();
  });

  await test.step("Scroll down to Footer", async () => {
    await homePage.footerSection.logoFooter.scrollIntoViewIfNeeded();
  });

  await test.step("Check that 'Про нас' label is displayed on the footer.", async () => {
    await expect(homePage.footerSection.labelAboutUs).toBeVisible();
  });

  await test.step("Check that 'Політика конфіденційності' link is displayed on the footer.", async () => {
    await expect(homePage.footerSection.linkPrivacyPolicy).toBeVisible();
  });

  await test.step("Check that 'Правила використання файлів cookie' link is displayed on the footer.", async () => {
    await expect(homePage.footerSection.linkCookiePolicy).toBeVisible();
  });

  await test.step("Check that 'Умови доступу та користування' link is displayed on the footer.", async () => {
    await expect(homePage.footerSection.linkTermsConditions).toBeVisible();
  });

  await test.step("Check that 'Користувачам' label is displayed on the footer.", async () => {
    await expect(homePage.footerSection.labelForUsers).toBeVisible();
  });

  await test.step("Check that 'Оголошення' link is displayed on the footer.", async () => {
    await expect(homePage.footerSection.btnProducts).toBeVisible();
  });

  await test.step("Check that 'Тендери' link is displayed on the footer.", async () => {
    await expect(homePage.footerSection.btnTenders).toBeVisible();
  });

  await test.step("Check that 'Контакти' link is displayed on the footer.", async () => {
    await expect(homePage.footerSection.btnTenders).toBeVisible();
  });

  await test.step("Check that the Rentzila logo is displayed on the footer.", async () => {
    await expect(homePage.footerSection.logoFooter).toBeVisible();
  });

  await test.step("Check that the 'Усі права захищені' label is displayed on the footer.", async () => {
    await expect(homePage.footerSection.textCopyright).toBeVisible();
  });

  await test.step("Click the 'Політика конфіденційності' link on the footer.", async () => {
    await homePage.footerSection.linkPrivacyPolicy.click();
    await expect(page).toHaveURL(endpoints.privacy_policy);
    await homePage.goToHomePage();
  });

  await test.step("Scroll down to the footer and click the 'Правила використання файлів cookie' link  on the footer.", async () => {
    await homePage.footerSection.linkCookiePolicy.scrollIntoViewIfNeeded();
    await homePage.footerSection.linkCookiePolicy.click();
    await expect(page).toHaveURL(endpoints.cookie_policy);
    await homePage.goToHomePage();
  });

  await test.step("Scroll down to the footer and click the 'Умови доступу та користування' link on the footer.", async () => {
    await homePage.footerSection.linkTermsConditions.scrollIntoViewIfNeeded();
    await homePage.footerSection.linkTermsConditions.click();
    await expect(page).toHaveURL(endpoints.terms_conditions);
    await homePage.goToHomePage();
  });

  await test.step("Scroll down to the footer and click on the 'Оголошення' link.", async () => {
    await homePage.footerSection.btnProducts.scrollIntoViewIfNeeded();
    await homePage.footerSection.btnProducts.click();
    await expect(page).toHaveURL(endpoints.products);
  });

  await test.step("Click the Rentzila logo on the header.", async () => {
    await homePage.headerSection.btnLogo.click();
    await expect(homePage.headerSection.fieldSearch).toBeVisible();
  });

  await test.step("Scroll down to the footer and click the 'Тендери' link.", async () => {
    await homePage.footerSection.btnTenders.click();
    await expect(page).toHaveURL(endpoints.tenders);
    await homePage.goToHomePage();
  });

  await test.step("Click on the 'info@rentzila.com.ua' email on the footer.", async () => {
    await homePage.footerSection.linkEmail.click();
    await expect(homePage.footerSection.linkEmail).toHaveAttribute("href", "mailto:info@rentzila.com.ua");
  });
});
