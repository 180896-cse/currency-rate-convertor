import GetConversionRateController from "./ConversionRate/conversionRate.controller";
import DataFetcherController from "./DataFetcher/dataFetcher.controller";
import getHealth from "./health.controller";

const conversionRateController = new GetConversionRateController();
const dataFetcherController = new DataFetcherController();

export { getHealth, conversionRateController, dataFetcherController };
