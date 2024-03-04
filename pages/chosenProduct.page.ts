import { Locator, Page, TestInfo } from "@fixtures/base.fixtures";
import BasePage from "./base.page";

export default class ChosenProductPage extends BasePage {
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
    containerServices: Locator;
    containerItemComplexWork: Locator;
    containerItemLoadUnload: Locator;
    containerItemAsphalting: Locator;
    containerItemRoadWork: Locator;
    containerItemPlowing: Locator;
    containerItemLift: Locator;
    containerItemTransporting: Locator;
  };

  public productCharacteristics: {
    categorySowingComplexes: Locator;
    categoryTractors: Locator;
    categorySprayers: Locator;
    categoryExcavators: Locator;
    categoryLoaders: Locator;
    categoryElevators: Locator;
    categoryUtilVehicles: Locator;
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
      containerServices: page.locator('[class*="UnitCharacteristics_services_container"]'),
      containerItemComplexWork: page.getByText("Комплекс робіт"),
      containerItemLoadUnload: page.locator('[class*="UnitCharacteristics_services_container"]').getByText("Навантаження та розвантаження"),
      containerItemAsphalting: page.locator('[class*="UnitCharacteristics_services_container"]').getByText("Асфальтування"),
      containerItemRoadWork: page.locator('[class*="UnitCharacteristics_services_container"]').getByText("Дорожні роботи"),
      containerItemPlowing: page.locator('[class*="UnitCharacteristics_services_container"]').getByText("Орання землі"),
      containerItemLift: page.locator('[class*="UnitCharacteristics_services_container"]').getByText("Підйомні роботи"),
      containerItemTransporting: page.locator('[class*="UnitCharacteristics_services_container"]').getByText("Перевезення матеріалів"),
    };

    this.productCharacteristics = {
      categorySowingComplexes: page.getByText("посівні комплекси").nth(1),
      categoryTractors: page.getByText("трактори колісні").nth(1),
      categorySprayers: page.getByText("Обприскувачі причіпні").nth(1),
      categoryExcavators: page.getByText("багатоковшові екскаватори").nth(1),
      categoryLoaders: page.getByText("телескопічні навантажувачі").nth(0),
      categoryElevators: page.getByText("Підіймачі телескопічні ").nth(1),
      categoryUtilVehicles: page.getByText("інша комунальна техніка").nth(1),
    };
  }
}
