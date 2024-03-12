import { Locator, Page, TestInfo, expect, test } from "@fixtures/base.fixtures";
import BasePage from "./base.page";
import { buildingEqEndpoints } from "endpoints/buildingEq.endpoints";
import { utilityEqEndpoints } from "endpoints/utilityEq.endpoints";
import { ruralEqEndpoints } from "endpoints/ruralEq.endpoints";
import { storageEqEndpoints } from "endpoints/storageEq.endpoints";

export default class HomePage extends BasePage {
  public buildingEquipments: {
    cranes: Locator;
    drills: Locator;
    roadworks: Locator;
    excavator: Locator;
    other: Locator;
    rolers: Locator;
    containers: Locator;
    loaders: Locator;
    equipment: Locator;
    lifters: Locator;
    earthworks: Locator;
  };

  public utilityEquipments: {
    emergency: Locator;
    roadCleaning: Locator;
    cleaning: Locator;
    containers: Locator;
    transport: Locator;
    equipment: Locator;
  };

  public ruralEquipments: {
    tillage: Locator;
    reapers: Locator;
    otherRural: Locator;
    potato: Locator;
    combine: Locator;
    logging: Locator;
    accessories: Locator;
    postHarvest: Locator;
    sowingPlanting: Locator;
    ruralRealEstate: Locator;
    fertilizerEq: Locator;
    harvestHayEq: Locator;
    wateringIrrigationEq: Locator;
    gardenEq: Locator;
    animalEq: Locator;
    transportingEq: Locator;
    tractors: Locator;
  };

  public storageEquipments: {
    loadersEq: Locator;
    storageEquipment: Locator;
  };

  public headerSection: {
    btnSignIn: Locator;
    fieldSearch: Locator;
    btnCatalogue: Locator;
    btnLogo: Locator;
    btnProducts: Locator;
    btnRequests: Locator;
    btnTenders: Locator;
    btnCreateUnit: Locator;
  };

  public catalogueWindow: {
    specialEquipment: Locator;
    buildingEq: Locator;
    buildingEqCranes: Locator;
    buildingEqDrills: Locator;
    buildingEqRoadworks: Locator;
    buildingEqExcavator: Locator;
    buildingEqOther: Locator;
    buildingEqRolers: Locator;
    buildingEqContainers: Locator;
    buildingEqLoaders: Locator;
    buildingEquipment: Locator;
    buildingEqLifters: Locator;
    buildingEqEarthworks: Locator;
    utilityEq: Locator;
    utilityEqEmergency: Locator;
    utilityEqRoadCleaning: Locator;
    utilityEqCleaning: Locator;
    utilityEqContainers: Locator;
    utilityEqTransport: Locator;
    utilityEquipment: Locator;
    ruralEq: Locator;
    ruralEqTillage: Locator;
    ruralEqReapers: Locator;
    ruralEqOtherRural: Locator;
    ruralEqPotato: Locator;
    ruralEqCombine: Locator;
    ruralEqLogging: Locator;
    ruralEqAccessories: Locator;
    ruralEqPostHarvest: Locator;
    ruralEqSowingPlanting: Locator;
    ruralEqRuralRealEstate: Locator;
    ruralEqFertilizerEq: Locator;
    ruralEqHarvestHayEq: Locator;
    ruralEqWateringIrrigationEq: Locator;
    ruralEqGardenEq: Locator;
    ruralEqAnimalEq: Locator;
    ruralEqTransportingEq: Locator;
    ruralEqTractors: Locator;
    storageEq: Locator;
    storageLoadersEq: Locator;
    storageStorageEquipment: Locator;
    services: Locator;
    servicesBuilding: Locator;
    servicesBuildingRoadworkds: Locator;
    servicesBuildingLoadUnload: Locator;
    servicesOther: Locator;
    servicesOtherTrees: Locator;
    servicesOtherLoadMaterials: Locator;
    servicesRural: Locator;
    servicesRuralSowing: Locator;
    servicesRuralSpraying: Locator;
  };

  public searchWindow: {
    searchHistory: Locator;
    services: Locator;
    servicesAsphalting: Locator;
    categories: Locator;
    categoriesDragLine: Locator;
    firstRecommendedUnit: Locator;
    closeBtn: Locator;
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

  public questionsForm: {
    formQuestions: Locator;
    inputName: Locator;
    inputPhone: Locator;
    btnOrderCons: Locator;
    errorMsgEmptyNameField: Locator;
    errorMsgEmptyPhoneField: Locator;
    errorMsgInvalidPhone: Locator;
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
      btnCatalogue: page.locator('[class*="NavbarCatalog_label"]'),
      btnLogo: page.getByTestId("Navbar").getByRole("link").first(),
      btnProducts: page.locator('[href="/products/"]').nth(0),
      btnRequests: page.locator('[href="/requests-map/"]').nth(0),
      btnTenders: page.locator('[href="/tenders-map/"]').nth(0),
      btnCreateUnit: page.locator('[class*="Navbar_addAnnouncement"]'),
    };

    this.catalogueWindow = {
      specialEquipment: page.getByRole("banner").getByText("Спецтехніка"),
      buildingEq: page.getByRole("banner").getByText("Будівельна техніка"),
      buildingEqCranes: page.getByRole("banner").getByText("Автокрани"),
      buildingEqDrills: page.getByRole("banner").getByText("Бурові установки"),
      buildingEqRoadworks: page.getByRole("banner").getByText("Дорожньо-будівельна техніка"),
      buildingEqExcavator: page.getByRole("banner").getByText("Екскаватори"),
      buildingEqOther: page.getByRole("banner").getByText("Інша будівельна спецтехніка"),
      buildingEqRolers: page.getByRole("banner").getByText("Катки"),
      buildingEqContainers: page.getByRole("banner").getByText("Контейнери"),
      buildingEqLoaders: page.getByRole("banner").getByText("Навантажувачі"),
      buildingEquipment: page.getByRole("banner").getByText("Обладнання для спецтехніки"),
      buildingEqLifters: page.getByRole("banner").getByText("Підйомники"),
      buildingEqEarthworks: page.getByRole("banner").getByText("Техніка для земляних робіт"),
      utilityEq: page.getByRole("banner").getByText("Комунальна техніка").nth(0),
      utilityEqEmergency: page.getByRole("banner").getByText("Аварійні машини"),
      utilityEqRoadCleaning: page.getByRole("banner").getByText("Дорожньо-прибиральна техніка"),
      utilityEqCleaning: page.getByRole("banner").getByText("Клінінгове обладнання"),
      utilityEqContainers: page.getByRole("banner").getByText("Комунальні контейнери"),
      utilityEqTransport: page.getByRole("banner").getByText("Комунальні машини"),
      utilityEquipment: page.getByRole("banner").getByText("Обладнання для комунальної техніки"),
      ruralEq: page.getByText("Сільськогосподарська техніка").nth(0),
      ruralEqTillage: page.getByRole("banner").getByText("Ґрунтообробна техніка"),
      ruralEqReapers: page.getByRole("banner").getByText("Жатки"),
      ruralEqOtherRural: page.getByRole("banner").getByText("Інша сільгосптехніка"),
      ruralEqPotato: page.getByRole("banner").getByText("Картопляна техніка"),
      ruralEqCombine: page.getByRole("banner").getByText("Комбайни"),
      ruralEqLogging: page.getByRole("banner").getByText("Лісозаготівельна техніка"),
      ruralEqAccessories: page.getByRole("banner").getByText("Обладнання"),
      ruralEqPostHarvest: page.getByRole("banner").getByText("Післязбиральна техніка"),
      ruralEqSowingPlanting: page.getByRole("banner").getByText("Посівна та садильна техніка"),
      ruralEqRuralRealEstate: page.getByRole("banner").getByText("Сільськогосподарська нерухомість"),
      ruralEqFertilizerEq: page.getByRole("banner").getByText("Техніка для внесення добрив"),
      ruralEqHarvestHayEq: page.getByRole("banner").getByText("Техніка для заготівлі сіна"),
      ruralEqWateringIrrigationEq: page.getByRole("banner").getByText("Техніка для поливу та зрошення"),
      ruralEqGardenEq: page.getByRole("banner").getByText("Техніка для саду та городу"),
      ruralEqAnimalEq: page.getByRole("banner").getByText("Техніка для тваринництва"),
      ruralEqTransportingEq: page.getByRole("banner").getByText("Техніка для транспортування"),
      ruralEqTractors: page.getByRole("banner").getByText("Трактори"),
      storageEq: page.getByText("Складська техніка").nth(0),
      storageLoadersEq: page.getByRole("banner").getByText("Обладнання для навантажувачів"),
      storageStorageEquipment: page.getByRole("banner").getByText("Техніка для складування"),
      services: page.getByRole('banner').getByText('Послуги', { exact: true }),
      servicesBuilding: page.getByRole("banner").getByText("Будівельні"),
      servicesBuildingRoadworkds: page.getByRole("banner").getByText("Дорожні роботи"),
      servicesBuildingLoadUnload: page.getByRole("banner").getByText("Навантажування та розвантажування матеріалів"),
      servicesOther: page.getByRole("banner").getByText("Інші"),
      servicesOtherTrees: page.getByRole("banner").getByText("Корчування дерев, пнів"),
      servicesOtherLoadMaterials: page.getByRole("banner").getByText("Навантаження матеріалів"),
      servicesRural: page.getByRole("banner").getByText("Сільськогосподарські"),
      servicesRuralSowing: page.getByRole("banner").getByText("Посів технічних та зернових культур"),
      servicesRuralSpraying: page.getByRole("banner").getByText("Обприскування"),
    };

    this.buildingEquipments = {
      cranes: this.catalogueWindow.buildingEqCranes,
      drills: this.catalogueWindow.buildingEqDrills,
      roadworks: this.catalogueWindow.buildingEqRoadworks,
      excavator: this.catalogueWindow.buildingEqExcavator,
      other: this.catalogueWindow.buildingEqOther,
      rolers: this.catalogueWindow.buildingEqRolers,
      containers: this.catalogueWindow.buildingEqContainers,
      loaders: this.catalogueWindow.buildingEqLoaders,
      equipment: this.catalogueWindow.buildingEquipment,
      lifters: this.catalogueWindow.buildingEqLifters,
      earthworks: this.catalogueWindow.buildingEqEarthworks,
    };

    this.utilityEquipments = {
      emergency: this.catalogueWindow.utilityEqEmergency,
      roadCleaning: this.catalogueWindow.utilityEqRoadCleaning,
      cleaning: this.catalogueWindow.utilityEqCleaning,
      containers: this.catalogueWindow.utilityEqContainers,
      transport: this.catalogueWindow.utilityEqTransport,
      equipment: this.catalogueWindow.utilityEquipment,
    };

    this.ruralEquipments = {
      tillage: this.catalogueWindow.ruralEqTillage,
      reapers: this.catalogueWindow.ruralEqReapers,
      otherRural: this.catalogueWindow.ruralEqOtherRural,
      potato: this.catalogueWindow.ruralEqPotato,
      combine: this.catalogueWindow.ruralEqCombine,
      logging: this.catalogueWindow.ruralEqLogging,
      accessories: this.catalogueWindow.ruralEqAccessories,
      postHarvest: this.catalogueWindow.ruralEqPostHarvest,
      sowingPlanting: this.catalogueWindow.ruralEqSowingPlanting,
      ruralRealEstate: this.catalogueWindow.ruralEqRuralRealEstate,
      fertilizerEq: this.catalogueWindow.ruralEqFertilizerEq,
      harvestHayEq: this.catalogueWindow.ruralEqHarvestHayEq,
      wateringIrrigationEq: this.catalogueWindow.ruralEqWateringIrrigationEq,
      gardenEq: this.catalogueWindow.ruralEqGardenEq,
      animalEq: this.catalogueWindow.ruralEqAnimalEq,
      transportingEq: this.catalogueWindow.ruralEqTransportingEq,
      tractors: this.catalogueWindow.ruralEqTractors,
    };

    this.storageEquipments = {
      loadersEq: this.catalogueWindow.storageLoadersEq,
      storageEquipment: this.catalogueWindow.storageStorageEquipment,
    };

    this.searchWindow = {
      searchHistory: page.getByText("Історія пошуку"),
      services: page.getByTestId("searchDropdown").getByRole("heading", { name: "Послуги" }),
      servicesAsphalting: page.getByTestId("searchDropdown").getByTestId("services").getByText("Асфальтування"),
      categories: page.getByText("Категорії").nth(0),
      categoriesDragLine: page.getByText("драглайни"),
      firstRecommendedUnit: page.locator('[class*="CardInSearchPopup_unit__"]').nth(0),
      closeBtn: page.getByRole("banner").getByTestId("crossIcon"),
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

    this.questionsForm = {
      formQuestions: page.locator('[class*="ConsultationForm_container"]'),
      inputName: page.locator('[name="name"]'),
      inputPhone: page.locator('[type="tel"]'),
      btnOrderCons: page.locator('[type="submit"]'),
      errorMsgEmptyNameField: page.locator('//input[@name="name"]/following-sibling::p[@role="alert"]'),
      errorMsgEmptyPhoneField: page.locator('//input[@id="mobile"]/following-sibling::p[@role="alert"]'),
      errorMsgInvalidPhone: page.locator('//p[contains(text(), "Телефон не пройшов валідацію")]'),
    };
  }

  async goToHomePage(): Promise<void> {
    await super.goto();
  }

  async checkIfServicesIsvisible(): Promise<void> {
    await test.step("Scroll down until 'Послуги' is visible", async () => {
      await this.servicesSection.btnPopularServices.scrollIntoViewIfNeeded();
      await expect(this.servicesSection.btnPopularServices).toBeVisible();
    });
  }

  async checkIfSpecialEqIsVisible(): Promise<void> {
    await test.step("Scroll down until 'Спецтехніка' is visible", async () => {
      await this.specialEqSection.btnPopularSpecialEq.scrollIntoViewIfNeeded();
      await expect(this.specialEqSection.btnPopularSpecialEq).toBeVisible();
    });
  }

  async logoClickCatalogueClickSpecialEqHover(): Promise<void> {
    await test.step("Click on the logo in the top left corner. Click on the 'Каталог' button. Hover the 'Спецтехніка' label.", async () => {
      //await this.headerSection.btnLogo.click();
      await expect(this.headerSection.btnCatalogue).toBeVisible();
      await this.headerSection.btnCatalogue.click();
      await this.catalogueWindow.specialEquipment.hover();
      await expect(this.catalogueWindow.buildingEq).toBeVisible();
      await expect(this.catalogueWindow.utilityEq).toBeVisible();
      await expect(this.catalogueWindow.ruralEq).toBeVisible();
      await expect(this.catalogueWindow.storageEq).toBeVisible();
    });
  }

  async logoClickCatalogueClickServicesHover(): Promise<void> {
    await test.step("Click on the logo in the top left corner. Click on the 'Каталог' button. Hover the 'Послуги' label.", async () => {
      await this.headerSection.btnLogo.click();
      await this.headerSection.btnCatalogue.click();
      await this.catalogueWindow.services.hover();
    });
  }

  async verifyLabelsVisibiltyBuildingEq(): Promise<void> {
    await this.headerSection.btnCatalogue.click();
    await this.catalogueWindow.specialEquipment.hover();
    await this.catalogueWindow.buildingEq.hover();
    for (const buildingEquipment in this.buildingEquipments) await expect(this.buildingEquipments[buildingEquipment]).toBeVisible();
  }

  async verifyCorrectURLBuildingEq(): Promise<void> {
    await this.catalogueWindow.buildingEqCranes.click();
    await expect(this.page).toHaveURL(RegExp(buildingEqEndpoints.cranes));
    for (const buildingEquipment in this.buildingEquipments) {
      if (buildingEquipment !== "cranes") {
        await this.headerSection.btnCatalogue.click();
        await this.catalogueWindow.specialEquipment.hover();
        await this.catalogueWindow.buildingEq.hover();
        await this.buildingEquipments[buildingEquipment].click();
        await expect(this.page).toHaveURL(RegExp(buildingEqEndpoints[buildingEquipment]));
      }
    }
  }

  async verifyLabelsVisibiltyUtilityEq(): Promise<void> {
    await this.catalogueWindow.utilityEq.hover();
    for (const utilityEquipment in this.utilityEquipments) await expect(this.utilityEquipments[utilityEquipment]).toBeVisible();
  }

  async verifyCorrectURLUtilityEq(): Promise<void> {
    await this.catalogueWindow.utilityEqEmergency.click();
    await expect(this.page).toHaveURL(RegExp(utilityEqEndpoints.emergency));
    for (const utilityEquipment in this.utilityEquipments) {
      if (utilityEquipment !== "emergency") {
        await this.headerSection.btnCatalogue.click();
        await this.catalogueWindow.specialEquipment.hover();
        await this.catalogueWindow.utilityEq.hover();
        await this.utilityEquipments[utilityEquipment].click();
        await expect(this.page).toHaveURL(RegExp(utilityEqEndpoints[utilityEquipment]));
      }
    }
  }

  async verifyLabelsVisibiltyRuralEq(): Promise<void> {
    await this.catalogueWindow.ruralEq.hover();
    for (const ruralEquipment in this.ruralEquipments) await expect(this.ruralEquipments[ruralEquipment]).toBeVisible();
  }

  async verifyCorrectURLRuralEq(): Promise<void> {
    await this.catalogueWindow.ruralEqTillage.click();
    await expect(this.page).toHaveURL(RegExp(ruralEqEndpoints.tillage));
    for (const ruralEquipment in this.ruralEquipments) {
      if (ruralEquipment !== "tillage") {
        await this.headerSection.btnCatalogue.click();
        await this.catalogueWindow.specialEquipment.hover();
        await this.catalogueWindow.ruralEq.hover();
        await this.ruralEquipments[ruralEquipment].click();
        await expect(this.page).toHaveURL(RegExp(ruralEqEndpoints[ruralEquipment]));
      }
    }
  }

  async verifyLabelsVisibiltyStorageEq(): Promise<void> {
    await this.catalogueWindow.storageEq.hover();
    for (const storageEquipment in this.storageEquipments) await expect(this.storageEquipments[storageEquipment]).toBeVisible();
  }

  async verifyCorrectURLStorageEq(): Promise<void> {
    await this.catalogueWindow.storageLoadersEq.click();
    await expect(this.page).toHaveURL(RegExp(storageEqEndpoints.loadersEq));
    for (const storageEquipment in this.storageEquipments) {
      if (storageEquipment !== "tillage") {
        await this.headerSection.btnCatalogue.click();
        await this.catalogueWindow.specialEquipment.hover();
        await this.catalogueWindow.storageEq.hover();
        await this.storageEquipments[storageEquipment].click();
        await expect(this.page).toHaveURL(RegExp(storageEqEndpoints[storageEquipment]));
      }
    }
  }
}
