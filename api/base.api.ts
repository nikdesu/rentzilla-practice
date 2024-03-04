import { APIRequestContext } from "@fixtures/base.fixtures";
import { LoginUser, TokenRefresh } from "./interfaces";

export default class BaseApi {
  public request: APIRequestContext;
  public jwt: TokenRefresh;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async setJwt(data: LoginUser) {
    this.jwt = await this.getJwt(data);
  }

  /**
   * Create token for existing user
   * @returns Access and Refresh tokens
   */
  async getJwt(data: LoginUser): Promise<TokenRefresh> {
    const request = await this.request.post("https://stage.rentzila.com.ua/api/auth/jwt/create/", {
      data,
    });
    if (request.ok()) return await request.json();
    else throw new Error(await request.json());
  }
}
