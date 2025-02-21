import FileProcessingHelper from "../../helper/fileProcessing.helper";

abstract class AGetConversionRate{
  static async getFetchedRate(){}
  static async processData(param1:any):Promise<string>{return ""}
}

export default class GetConversionRate extends AGetConversionRate {
  static async getFetchedRate() {
    try {
      let finalData: any = {};
      await FileProcessingHelper.readData()
        .then((data) => {
          finalData = data;
        })
        .catch((error) => {
          throw error;
        });
      return finalData;
    } catch (error) {
      throw error;
    }
  }
  static async processData(userQuery: any = ""): Promise<string> {
      const receivedData = await GetConversionRate.getFetchedRate();
      const {firstCountry,secondCountry} = userQuery;
      const normalizedFirstCountry = firstCountry.toUpperCase();
      const normalizedSecondCountry = secondCountry.toUpperCase();
      const firstValue = Number(receivedData[normalizedFirstCountry]);
      const secondValue = Number(receivedData[normalizedSecondCountry]);
      const finalData = secondValue/firstValue
      return finalData.toFixed(3)
  }
}
