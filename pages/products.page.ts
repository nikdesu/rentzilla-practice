import { Locator, Page, TestInfo, expect, test } from "@fixtures/base.fixtures";
import BasePage from "./base.page";

export default class ProductsPage extends BasePage {
  public headerSection: {
    btnSignIn: Locator;
    fieldSearch: Locator;
    catalogueBtn: Locator;
    btnLogo: Locator;
    btnProducts: Locator;
    btnRequests: Locator;
    btnTenders: Locator;
    btnCreateUnit: Locator;
  };

  public filtersSection: {
    buildingEqFilter: Locator;
    utilityEqFilter: Locator;
    ruralEqFilter: Locator;
    storageEqFilter: Locator;
    sowingFilter: Locator;
    checkBoxBuilding: Locator;
    checkBoxOther: Locator;
    checkBoxRural: Locator;
    btnArrowRural: Locator;
    btnArrowOther: Locator;
    btnArrowBuilding: Locator;
    checkBoxComplexWorks: Locator;
    checkBoxLoadUnload: Locator;
    checkBoxAsphalting: Locator;
    checkBoxRoadWorks: Locator;
    checkBoxPlowing: Locator;
    checkBoxLifting: Locator;
    checkBoxTrasportation: Locator;
  };

  public productsSection: {
    productFoundMsg: Locator;
    linkFirstProduct: Locator;
  };

  constructor(page: Page, testInfo: TestInfo) {
    super(page, testInfo);
    this.usePage = page;
  }

  set usePage(page: Page) {
    super.usePage = page;
    this.headerSection = {
      btnSignIn: page.locator('[class*="NavbarAuthBlock_buttonEnter"]'),
      fieldSearch: page.locator('[data-testid="searchInput"]').nth(0),
      catalogueBtn: page.locator('[class*="NavbarCatalog_label"]'),
      btnLogo: page.locator('[data-testid="logo"]').nth(0),
      btnProducts: page.locator('[href="/products/"]').nth(0),
      btnRequests: page.locator('[href="/requests-map/"]').nth(0),
      btnTenders: page.locator('[href="/tenders-map/"]').nth(0),
      btnCreateUnit: page.locator('[class*="Navbar_addAnnouncement"]'),
    };

    this.filtersSection = {
      buildingEqFilter: page.locator('[data-testid="budivelna-tekhnika"]'),
      utilityEqFilter: page.locator('[data-testid="komunalna-tekhnika"]'),
      ruralEqFilter: page.locator('[data-testid="silskogospodarska-tekhnika"]'),
      storageEqFilter: page.locator('[data-testid="skladska-tekhnika"]'),
      sowingFilter: page.locator('[data-testid="posiv-tekhnichnikh-ta-zernovikh-kultur"]'),
      checkBoxBuilding: page.locator("#serviceCategory-3"),
      checkBoxOther: page.locator("#serviceCategory-4"),
      checkBoxRural: page.locator("#serviceCategory-14"),
      btnArrowBuilding: page.locator('[data-testid="rightArrow"]').nth(0),
      btnArrowOther: page.locator('[data-testid="rightArrow"]').nth(1),
      btnArrowRural: page.locator('[data-testid="rightArrow"]').nth(2),
      checkBoxComplexWorks: page.locator("#radio-27-11"),
      checkBoxLoadUnload: page.locator("#radio-50-14"),
      checkBoxAsphalting: page.locator("#radio-36-1"),
      checkBoxRoadWorks: page.locator("#radio-4-9"),
      checkBoxPlowing: page.locator("#radio-8-9"),
      checkBoxLifting: page.locator("#radio-58-8"),
      checkBoxTrasportation: page.locator("#radio-54-5"),
    };

    this.productsSection = {
      productFoundMsg: page.getByText('[class*="MapPagination_count"]').nth(0),
      linkFirstProduct: page.locator('[class*="UnitCard_infoWrapper"]').nth(0),
    };
  }

  async logoClick(): Promise<void> {
    await test.step("Click on the logo in the left corner of the page.", async () => {
      await this.page.mouse.wheel(0, -100000000);
      await this.headerSection.btnLogo.click();
    });
  }

  async productClick(): Promise<void> {
    await this.productsSection.linkFirstProduct.click();
    await this.waitForPageLoad();
    await expect(this.page).toHaveURL(/unit/);
  }

  async symbolFillEnterClick(symbol: string): Promise<void> {
    await this.headerSection.fieldSearch.fill(symbol);
    await this.headerSection.fieldSearch.press("Enter");
  }
}
