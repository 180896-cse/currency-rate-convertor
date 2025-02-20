import * as cheerio from "cheerio";
import request from "request"

export default class DataFetcherService {
  async getHtml() {
    const $ = await request('https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html', function (error, response, body) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // console.log('body:', body); // Print the HTML for the Google homepage.
      const $ = cheerio.load(body)
      const divsWithClass = $('div.jumbo-box');
      divsWithClass.each((i, div) => {
        console.log($(div).text());
      })
    });
    return 
    
  }
}
