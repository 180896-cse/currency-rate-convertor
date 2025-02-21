import fs from "fs";
import path from "path";

export default class FileProcessingHelper {

// Function to write data on file
  static writeData(data: object): string {
    fs.writeFile(
      path.join(__dirname, "../data/data.json"),
      JSON.stringify(data),
      (err) => {
        if (err) {
          throw err.message;
        } else {
          return "Success!!";
        }
      }
    );
    return "Data Written successfully!!";
  }

// Function to Read data from File
  static async readData() {
    return new Promise((resolve, reject) => {
      fs.readFile(path.join(__dirname, "../data/data.json"), 'utf-8',(err, data) => {
        if (err) {
          reject(`Error Reading File: ${err.message}`);
        } else {
          try {
            const exchangeRates = JSON.parse(data);
            resolve(exchangeRates);
          } catch (error) {
            reject("Error parsing JSON: " + error);
          }
        }
      });
    });
  }
}
