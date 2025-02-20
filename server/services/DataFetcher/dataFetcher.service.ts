import * as cheerio from "cheerio";
import axios from "axios";
import fs from "fs"
import path from "path"

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
      const currencyData: any = {};
      $("tr").each((i, row) => {
        // Get currency code and spot rate from each row
        const currencyCode = $(row).find("td.currency").text();
        const spotRate = $(row).find("span.rate").text();

        // Only add to object if both values exist
        if (currencyCode && spotRate) {
          currencyData[currencyCode] = parseFloat(spotRate);
        }
      });
      // This file operation can be in another service as file operation service
      fs.writeFile(path.join(__dirname,"../../Data/data.json"),JSON.stringify(currencyData),err =>{
        if(err){
          console.error(err);
        }
        else{
          console.log("Data Written successfully!!");
          
        }
      })
    } catch (error: any) {
      throw new Error(`Error in Processing RawData: ${error.message}`);
    }
  }
}
