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
      const firstValue = Number(receivedData[firstCountry]);
      const secondValue = Number(receivedData[secondCountry]);
      const finalData = secondValue/firstValue
      return finalData.toFixed(3)
  }
}
