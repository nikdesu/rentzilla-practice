import { test, expect } from "@fixtures/base.fixtures";
import moment from "moment";

test("Create tender and delete it after", async ({ tenderApi }) => {
  await test.step("Get jwt", async () => {
    await tenderApi.setJwt({ email: process.env.AUTH_EMAIL, password: process.env.AUTH_PASS });
  });
  await test.step("Create tender", async () => {
    await tenderApi.tenderCreate({
      name: "Test_Tender",
      description: "Test_TenderTest_TenderTest_TenderTest_TenderTest_TenderTest_Tender",
      lat: 50.453,
      lng: 30.516,
      start_price: 100,
      currency: "UAH",
      type_of_work: "HOUR",
      start_propose_date: moment().add(2, "days").format(),
      end_propose_date: moment().add(3, "days").format(),
      start_tender_date: moment().add(4, "days").format(),
      end_tender_date: moment().add(5, "days").format(),
      customer: 3098,
      category: 4,
      services: [396],
    });
  });
  await test.step("Patch tender", async () => {
    await tenderApi.tenderPatch({
      is_closed: true,
    });
  });
  await test.step("Delete tender", async () => {
    await tenderApi.tenderDelete();
  });
  await test.step("Confirm tender was deleted", async () => {
    await tenderApi.tenderGet();
    await expect(tenderApi.deleteResponse).toContain("There is no tender with given id");
  });
});
 