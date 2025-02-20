import GetConversionRateController from "./ConversionRate/conversionRate.controller";
import getHealth from "./health.controller";

const conversionRateController = new GetConversionRateController();

export { getHealth, conversionRateController };
