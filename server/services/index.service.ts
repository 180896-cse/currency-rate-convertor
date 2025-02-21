import DataFetcherService from "./DataFetcher/dataFetcher.service";

//Object intilization of Services
const objDataFetcherService = new DataFetcherService();

//Exporting the required functions
export const serviceObj = {
  dataFetcherService: objDataFetcherService.processRawHtml,
};
