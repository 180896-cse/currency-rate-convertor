import GetConversionRate from "./ConversionRate/conversionRate.service";

const objConversionRateService = new GetConversionRate();

export const serviceObj = {
  conversionRateService: objConversionRateService.getFetchedRate
}
