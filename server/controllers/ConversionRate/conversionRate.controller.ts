import { Response, Request } from "express";
import { serviceObj } from "../../services/index.service";
import GetConversionRate from "../../services/ConversionRate/conversionRate.service";

export default class GetConversionRateController {
  async fetchRate(request: Request, response: Response) {
    response.status(200).send({"data":await GetConversionRate.processData(request.body)});
  }
}
