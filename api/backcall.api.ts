import { APIRequestContext } from "@fixtures/base.fixtures";
import BaseApi from "./base.api";
import { Backcall, CallBack } from "./interfaces";

export default class BackcallApi extends BaseApi {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async getBackcalls(data?: Backcall): Promise<Array<CallBack>> {
    const request = await this.request.get("https://stage.rentzila.com.ua/api/backcall/", {
      headers: { Authorization: `Bearer ${this.jwt.access}` },
      data,
    });
    if (request.ok()) return await request.json();
    else throw new Error(await request.json());
  }
}
