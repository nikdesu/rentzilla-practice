import { Locator, Page, TestInfo, expect } from "@fixtures/base.fixtures";
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
  };

  public servicesSection: {
    btnPopularServices: Locator;
    btnComplexWorks: Locator;
    btnLoadUnload: Locator;
    btnAsphalting: Locator;
    btnRoadWorks: Locator;
    btnPlowing: Locator;
    btnLifting: Locator;
    btnTransportation: Locator;
    btnRuralServices: Locator;
    btnBuildServices: Locator;
    btnOtherServices: Locator;
  };

  public specialEqSection: {
    btnPopularSpecialEq: Locator;
    btnPlanters: Locator;
    btnTractors: Locator;
    btnSprayers: Locator;
    btnExcavator: Locator;
    btnLoaders: Locator;
    btnElevators: Locator;
    btnUtilVehicles: Locator;
    btnRuralSpecialEq: Locator;
    btnBuildSpecialEq: Locator;
    btnOtherSpecialEq: Locator;
  };

  public footerSection: {
    labelAboutUs: Locator;
    labelForUsers: Locator;
    labelContacts: Locator;
    logoFooter: Locator;
    linkPrivacyPolicy: Locator;
    linkCookiePolicy: Locator;
    linkTermsConditions: Locator;
    btnProducts: Locator;
    btnTenders: Locator;
    btnRequests: Locator;
    textCopyright: Locator;
    linkEmail: Locator;
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
      btnLogo: page.getByTestId("Navbar").getByRole("link").first(),
      btnProducts: page.locator('[href="/products/"]').nth(0),
      btnRequests: page.locator('[href="/requests-map/"]').nth(0),
      btnTenders: page.locator('[href="/tenders-map/"]').nth(0),
      btnCreateUnit: page.locator('[class*="Navbar_addAnnouncement"]'),
    };

    this.mainSection = {
      btnMap: page.locator('[data-testid="mapButton"]'),
    };

    this.servicesSection = {
      btnPopularServices: page.locator('[data-testid="services__populyarni"]'),
      btnComplexWorks: page.locator('[data-testid="service__kompleks-robit"]'),
      btnLoadUnload: page.locator('[data-testid="service__navantazhennya-ta-rozvantazhennya"]'),
      btnAsphalting: page.locator('[data-testid="service__asfaltuvannya"]'),
      btnRoadWorks: page.locator('[data-testid="service__dorozhni-roboti"]'),
      btnPlowing: page.locator('[data-testid="service__orannya-zemli"]'),
      btnLifting: page.locator('[data-testid="service__pidiomni-roboti"]'),
      btnTransportation: page.locator('[data-testid="service__perevezennya-materialiv"]'),
      btnRuralServices: page.locator('[data-testid="services__silskogospodarski"]'),
      btnBuildServices: page.locator('[data-testid="services__budivelni"]'),
      btnOtherServices: page.locator('[data-testid="services__inshi"]'),
    };

    this.specialEqSection = {
      btnPopularSpecialEq: page.locator('[data-testid="specialEquipment__populyarna"]'),
      btnPlanters: page.locator('[data-testid="category__sivalki"]'),
      btnTractors: page.locator('[data-testid="category__traktori"]'),
      btnSprayers: page.locator('[data-testid="category__obpriskuvachi"]'),
      btnExcavator: page.locator('[data-testid="category__ekskavatori"]'),
      btnLoaders: page.locator('[data-testid="category__navantazhuvachi"]'),
      btnElevators: page.locator('[data-testid="category__pidiomniki"]'),
      btnUtilVehicles: page.locator('[data-testid="category__komunalni-mashini"]'),
      btnRuralSpecialEq: page.locator('[data-testid="specialEquipment__silskogospodarska"]'),
      btnBuildSpecialEq: page.locator('[data-testid="specialEquipment__budivelna"]'),
      btnOtherSpecialEq: page.locator('[data-testid="specialEquipment__insha"]'),
    };

    this.footerSection = {
      labelAboutUs: page.locator('[data-testid="content"]'),
      labelForUsers: page.getByText("Користувачам"),
      labelContacts: page.getByText("Контакти"),
      logoFooter: page.locator('[data-testid="logo"]').nth(1),
      linkPrivacyPolicy: page.locator('[href="/privacy-policy/"]'),
      linkCookiePolicy: page.locator('[href="/cookie-policy/"]'),
      linkTermsConditions: page.locator('[href="/terms-conditions/"]'),
      btnProducts: page.locator('[href="/products/"]').nth(1),
      btnTenders: page.locator('[href="/tenders-map/"]').nth(1),
      btnRequests: page.locator('[href="/requests-map/"]').nth(1),
      textCopyright: page.locator('[data-testid="copyright"]'),
      linkEmail: page.locator('[href="mailto:info@rentzila.com.ua"]'),
    };

    this.signInWindow = {
      inputEmail: page.locator("#email"),
      inputPwd: page.locator("#password"),
      btnLogin: page.getByText("Увійти"),
    };
  }

  async goToHomePage(): Promise<void> {
    await super.goto();
  }

  async checkIfServicesIsvisible(): Promise<void> {
    await this.servicesSection.btnPopularServices.scrollIntoViewIfNeeded();
    await expect(this.servicesSection.btnPopularServices).toBeVisible();
  }

  async checkIfSpecialEqIsVisible(): Promise<void> {
    await this.specialEqSection.btnPopularSpecialEq.scrollIntoViewIfNeeded();
    await expect(this.specialEqSection.btnPopularSpecialEq).toBeVisible();
  }
}
