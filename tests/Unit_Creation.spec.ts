import { test, expect } from "@fixtures/base.fixtures";

test("Create unit and delete it after", async ({ unitApi }) => {
  await test.step("Get jwt", async () => {
    await unitApi.setJwt({ email: process.env.AUTH_EMAIL, password: process.env.AUTH_PASS });
  });
  await test.step("Create unit", async () => {
    await unitApi.unitCreate({
      name: "Test_Unit_Test_Unit",
      first_name: "Foo",
      last_name: "Bar",
      model_name: "Test_Model",
      description: "Test_Description",
      features: "Test_Feature",
      type_of_work: "CHANGE",
      time_of_work: "FOUR",
      phone: "+380991231235",
      minimal_price: 100,
      money_value: "UAH",
      payment_method: "CASH_OR_CARD",
      lat: 50.453,
      lng: 30.516,
      manufacturer: 35,
      owner: 3098,
      category: 310,
      services: [36],
    });
  });
  await test.step("Delete unit", async () => {
    await unitApi.unitDelete();
  });
  await test.step("Confirm unit was deleted", async () => {
    await unitApi.unitGet();
    expect (unitApi.deleteResponse).toContain("The unit with this id does not exist")
  });
});
