import { Response, Request } from "express";
import { serviceObj } from "../../services/index.service";

export default class DataFetcherController {
  fetchData(request: Request, response: Response) {
    response.status(200).send(serviceObj.dataFetcherService());
  }
}
