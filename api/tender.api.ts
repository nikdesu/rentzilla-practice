import { APIRequestContext } from "@fixtures/base.fixtures";
import BaseApi from "./base.api";
import { CreateTender, DeleteTender, PatchTender, TenderID } from "./interfaces";

export default class TenderApi extends BaseApi {
  constructor(request: APIRequestContext) {
    super(request);
  }

  public response;
  public deleteResponse;

  async tenderCreate(data?: CreateTender): Promise<Array<TenderID>> {
    const request = await this.request.post("https://stage.rentzila.com.ua/api/tenders/", {
      headers: { Authorization: `Bearer ${this.jwt.access}` },
      data,
    });
    this.response = await request.json();
    console.log(this.response);
    if (request.ok()) return await request.json();
    else throw new Error(await request.json());
  }

  async tenderPatch(data?: PatchTender): Promise<void> {
    const request = await this.request.patch("https://stage.rentzila.com.ua/api/tender/" + this.response.id + "/", {
      headers: { Authorization: `Bearer ${this.jwt.access}` },
      data,
    });
    if (request.ok()) return await request.json();
    else throw new Error(await request.json());
  }

  async tenderDelete(): Promise<void> {
    const request = await this.request.delete("https://stage.rentzila.com.ua/api/tender/" + this.response.id + "/", {
      headers: { Authorization: `Bearer ${this.jwt.access}` },
    });
  }

  async tenderGet(): Promise<void> {
    const request = await this.request.get("https://stage.rentzila.com.ua/api/tender/" + this.response.id + "/", {
      headers: { Authorization: `Bearer ${this.jwt.access}` },
    });
    this.deleteResponse = await request.json();
    console.log(this.deleteResponse);
  }
}
