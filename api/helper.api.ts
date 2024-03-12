import BackcallApi from "./backcall.api";
import { Backcall } from "./interfaces";
import moment from "moment";

export default class HelperApi {
  public backcallApi: BackcallApi;

  constructor(backcallApi: BackcallApi) {
    this.backcallApi = backcallApi;
  }

  async sortBackcalls(data: { name: string; phone: string }): Promise<Array<Backcall>> {
    let backcalls = await this.backcallApi.getBackcalls(data);
    backcalls = backcalls.filter(
      (backcall) => backcall.created_date.includes(moment().format("YYYY-MM-DDTHH")) && backcall.name === data.name && backcall.phone === data.phone
    );
    const filteredBackcalls: Backcall[] = [];
    for (const backcall of backcalls) {
      if (Math.abs(moment(backcall.created_date).diff(moment(), "seconds")) <= 60) filteredBackcalls.push(backcall);
    }
    console.log(filteredBackcalls);

    return filteredBackcalls;
  }
}
