import * as cheerio from "cheerio";
import axios, { AxiosResponse } from "axios";
import FileProcessingHelper from "../../helper/fileProcessing.helper";

export default class DataFetcherService {
  static async getHtmlData():Promise<any> {
    try {
      const fetchedData:AxiosResponse<any, any> = await axios.get(process.env.ECB_URL || "BaseURL");
      return fetchedData.data;
    } catch (error: any) {
      throw new Error(`Request failed: ${error.message}`);
    }
  }

  async processRawHtml():Promise<any> {
    try {
      const ಠ_ಠ = await DataFetcherService.getHtmlData();
      const $:cheerio.CheerioAPI = cheerio.load(ಠ_ಠ);
      const currencyData: any = {};
      $("tr").each((i, row) => {
        // Get currency code and spot rate from each row
        const currencyCode:string = $(row).find("td.currency").text();
        const spotRate:string = $(row).find("span.rate").text();

        // Only add to object if both values exist
        if (currencyCode && spotRate) {
          currencyData[currencyCode] = parseFloat(spotRate);
        }
      });
      const isDataReceived = await FileProcessingHelper.writeData(currencyData)
      return isDataReceived;
    } catch (error: any) {
      return new Error(`Error in Processing RawData: ${error.message}`);
    }
  }
}
