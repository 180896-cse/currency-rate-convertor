import GetConversionRate from "./ConversionRate/conversionRate.service";
import DataFetcherService from "./DataFetcher/dataFetcher.service";

//Object intilization of Services
const objConversionRateService = new GetConversionRate();
const objDataFetcherService = new DataFetcherService();

//Exporting the required functions
export const serviceObj = {
  conversionRateService: objConversionRateService.getFetchedRate,
  dataFetcherService: objDataFetcherService.getHtml,
};
