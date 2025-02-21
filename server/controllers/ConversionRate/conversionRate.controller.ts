import { Response, Request } from "express";
import { serviceObj } from "../../services/index.service";
import GetConversionRate from "../../services/ConversionRate/conversionRate.service";

export default class GetConversionRateController {
  async fetchRate(request: Request, response: Response) {
    await serviceObj.dataFetcherService();
    response.status(200).json({
      status: "Success",
      message: await GetConversionRate.processData(request.body)
    });
  }
}
