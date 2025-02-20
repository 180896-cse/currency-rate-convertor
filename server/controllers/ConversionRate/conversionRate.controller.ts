import { Response, Request } from "express";
import { serviceObj } from "../../services/index.service";

export default class GetConversionRateController {
  fetchRate(request: Request, response: Response) {
    response.status(200).send(serviceObj.conversionRateService());
  }
}
