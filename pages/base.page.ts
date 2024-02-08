import { Locator, Page, TestInfo } from "../fixtures/base.fixtures";

export default class BasePage {
  public page: Page;
  public testInfo: TestInfo;

  constructor(page: Page, testInfo: TestInfo) {
    this.testInfo = testInfo;
    this.usePage = page;
  }

  /**
   * Initialize page and locators
   */
  set usePage(page: Page) {
    this.page = page;
  }

  /**
   * This method follows URL (baseUrl + path)
   * @param path - page endpoint without `/` on the beggining
   */
  async goto(path = ""): Promise<void> {
    await this.page.goto("/" + path);
  }

  /**
   * Wait for page to be loaded
   */
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState("load");
    await this.page.waitForLoadState("networkidle");
    await this.page.waitForLoadState("domcontentloaded");
  }
}
