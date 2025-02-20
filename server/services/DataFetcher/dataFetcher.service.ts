import * as cheerio from "cheerio";
import axios from "axios";

export default class DataFetcherService {
  static async getHtmlData() {
    try {
      const fetchedData = await axios.get(process.env.ECB_URL || "BaseURL");
      return fetchedData.data;
    } catch (error: any) {
      throw new Error(`Request failed: ${error.message}`);
    }
  }

  async processRawHtml() {
    try {
      const ಠ_ಠ = await DataFetcherService.getHtmlData();
      const $ = cheerio.load(ಠ_ಠ);
      const currencyData:any = {};
      $('tr').each((i, row) => {
        // Get currency code and spot rate from each row
        const currencyCode = $(row).find('td.currency').text();
        const spotRate = $(row).find('span.rate').text();
        
        // Only add to object if both values exist
        if (currencyCode && spotRate) {
          currencyData[currencyCode] = parseFloat(spotRate);
        }
      });
      console.log(currencyData);
      
    } catch (error: any) {
      throw new Error(`Error in Processing RawData: ${error.message}`);
    }
  }
}
