import { Response, Request } from "express";
import { serviceObj } from "../../services/index.service";

export default class DataFetcherController {
  async fetchData(request: Request, response: Response) {  
    response.status(200).send({"data":await serviceObj.dataFetcherService()} );
  }
}
