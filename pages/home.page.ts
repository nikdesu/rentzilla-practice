import { Locator, Page, TestInfo } from "@fixtures/base.fixtures";
import BasePage from "./base.page";

export default class HomePage extends BasePage {
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

  public mainSection: {
    btnMap: Locator;
    btnPopularServices: Locator;
    btnRuralServices: Locator;
    btnBuildServices: Locator;
    btnOtherServices: Locator;
    btnPopularSpecialEq: Locator;
    btnRuralSpecialEq: Locator;
    btnBuildSpecialEq: Locator;
    btnOtherSpecialEq: Locator;
  };

  public footerSection: {
    linkPrivacyPolicy: Locator;
    linkCookiePolicy: Locator;
    linkTermsConditions: Locator;
    btnProducts: Locator;
    btnTenders: Locator;
    btnRequests: Locator;
  };

  public signInWindow: {
    inputEmail: Locator;
    inputPwd: Locator;
    btnLogin: Locator;
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
      btnLogo: page.locator('data-testid="logo"').nth(0),
      btnProducts: page.locator('[href="/products/"]').nth(0),
      btnRequests: page.locator('[href="/requests-map/"]').nth(0),
      btnTenders: page.locator('[href="/tenders-map/"]').nth(0),
      btnCreateUnit: page.locator('[class*="Navbar_addAnnouncement"]'),
    };

    this.mainSection = {
      btnMap: page.locator('[data-testid="mapButton"]'),
      btnPopularServices: page.locator('[data-testid="services__populyarni"]'),
      btnRuralServices: page.locator('[data-testid="services__silskogospodarski"]'),
      btnBuildServices: page.locator('[data-testid="services__budivelni"]'),
      btnOtherServices: page.locator('[data-testid="services__inshi"]'),
      btnPopularSpecialEq: page.locator('[data-testid="specialEquipment__populyarna"]'),
      btnRuralSpecialEq: page.locator('[data-testid="specialEquipment__silskogospodarska"]'),
      btnBuildSpecialEq: page.locator('[data-testid="specialEquipment__budivelna"]'),
      btnOtherSpecialEq: page.locator('[data-testid="specialEquipment__insha"]'),
    };

    this.footerSection = {
      linkPrivacyPolicy: page.locator('[href="/privacy-policy/"]'),
      linkCookiePolicy: page.locator('[href="/cookie-policy/"]'),
      linkTermsConditions: page.locator('[href="/terms-conditions/"]'),
      btnProducts: page.locator('[href="/products/"]').nth(1),
      btnTenders: page.locator('[href="/tenders-map/"]').nth(1),
      btnRequests: page.locator('[href="/requests-map/"]').nth(1),
    };

    this.signInWindow = {
      inputEmail: page.locator("#email"),
      inputPwd: page.locator("#password"),
      btnLogin: page.getByText("Увійти"),
    };
  }
}
