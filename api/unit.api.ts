import { APIRequestContext } from "@fixtures/base.fixtures";
import BaseApi from "./base.api";
import { CreateUnit, UnitResponse } from "./interfaces";

export default class UnitApi extends BaseApi {
  constructor(request: APIRequestContext) {
    super(request);
  }

  public response;
  public deleteResponse;

  async unitCreate(data?: CreateUnit): Promise<Array<UnitResponse>> {
    const request = await this.request.post("https://stage.rentzila.com.ua/api/units/", {
      headers: { Authorization: `Bearer ${this.jwt.access}` },
      data,
    });
    this.response = await request.json();
    console.log(this.response);
    if (request.ok()) return await request.json();
    else throw new Error(await request.json());
  }

  async unitDelete(): Promise<void> {
    const request = await this.request.delete("https://stage.rentzila.com.ua/api/units/" + this.response.id + "/", {
      headers: { Authorization: `Bearer ${this.jwt.access}` },
    });
    // if (request.ok()) return await request.json();
    // else throw new Error(await request.json());
  }

  async unitGet(): Promise<void> {
    const request = await this.request.get("https://stage.rentzila.com.ua/api/units/" + this.response.id + "/", {
      headers: { Authorization: `Bearer ${this.jwt.access}` },
    });
    this.deleteResponse = await request.json();
    console.log(this.deleteResponse)
    if (request.ok()) return await request.json();
    else throw new Error(await request.json());
  }
}
