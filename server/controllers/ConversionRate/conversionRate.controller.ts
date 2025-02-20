import conversionRateService from "../../services/index.service";

export default class GetConversionRateController {
  fetchRate() {
    return conversionRateService;
  }
}
