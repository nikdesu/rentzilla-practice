import { test, expect } from "@fixtures/base.fixtures";

test("C214: Verify 'У Вас залишилися питання?' form", async ({ page, homePage, backcallApi, helperApi }) => {
  await test.step("Open home page", async () => {
    await homePage.goToHomePage();
  });

  await test.step("Scroll down to the 'У Вас залишилися питання?' form.", async () => {
    await homePage.questionsForm.formQuestions.scrollIntoViewIfNeeded();
  });

  await test.step("Click on the 'Замовити консультацію' button.", async () => {
    await homePage.questionsForm.btnOrderCons.click();
    await expect(homePage.questionsForm.errorMsgEmptyNameField).toBeVisible();
    await expect(homePage.questionsForm.errorMsgEmptyPhoneField).toBeVisible();
  });

  await test.step("Input the 'Test' into the 'Ім'я' field and click on the 'Замовити консультацію' button.", async () => {
    await homePage.questionsForm.inputName.fill("Test");
    await homePage.questionsForm.btnOrderCons.click();
    await expect(homePage.questionsForm.errorMsgEmptyPhoneField).toBeVisible();
  });

  await test.step("Click on the 'Номер телефону' field.", async () => {
    await homePage.questionsForm.inputPhone.click();
    await expect(homePage.questionsForm.inputPhone).toHaveAttribute("value", "+380");
  });

  await test.step("Input the valid phone number into the 'Номер' field:+380506743060", async () => {
    await homePage.questionsForm.inputPhone.fill("+380506743060");
    await homePage.questionsForm.inputName.clear();
    await homePage.questionsForm.btnOrderCons.click();
    await expect(homePage.questionsForm.errorMsgEmptyNameField).toBeVisible();
  });

  await test.step("Input the 'Test' into the 'Ім'я' field. Enter the invalid phone number:+38063 111 111 +1 1111111111111. After each input click on the 'Замовити консультацію' button.", async () => {
    await homePage.questionsForm.inputName.fill("Test");
    await homePage.questionsForm.inputPhone.fill("+38063 111 111");
    await homePage.questionsForm.btnOrderCons.click();
    await expect(homePage.questionsForm.errorMsgInvalidPhone).toBeVisible();
    await homePage.questionsForm.inputPhone.fill("+1 1111111111111");
    await homePage.questionsForm.btnOrderCons.click();
    await expect(homePage.questionsForm.errorMsgInvalidPhone).toBeVisible();
  });

  await test.step("Input the valid phone number into the 'Номер' field: +380506743060", async () => {
    await homePage.questionsForm.inputPhone.fill("+380506743060");
    await page.on("dialog", (dialog) => dialog.accept());
    await homePage.questionsForm.btnOrderCons.click();
  });

  await test.step("Verify feedback presency", async () => {
    await backcallApi.setJwt({ email: process.env.AUTH_EMAIL, password: process.env.AUTH_PASS });
    await expect(await helperApi.sortBackcalls({ name: "Test", phone: "+380506743060"})).not.toHaveLength(0);
  });
});
