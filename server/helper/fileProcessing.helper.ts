import fs from "fs/promises";
import path from "path";

export default class FileProcessingHelper {
  private static dataPath = path.join(__dirname, "../data/data.json");

  /**
   * Writes data to a JSON file
   * @param data Object to write to file
   * @returns Promise that resolves with success message
   */

  // Function to write data on file
  static async writeData(data: object): Promise<string> {
    try {
      // Ensure the directory exists
      const dir = path.dirname(this.dataPath);
      await fs.mkdir(dir, { recursive: true });

      // Write the file
      await fs.writeFile(this.dataPath, JSON.stringify(data, null, 2));

      return "Data written successfully!";
    } catch (error: any) {
      throw new Error(`Failed to write data: ${error.message}`);
    }
  }

  /**
   * Reads data from the JSON file
   * @returns Promise that resolves with parsed JSON data
   */

  // Function to Read data from File
  static async readData(): Promise<any> {
    try {
      const data = await fs.readFile(this.dataPath, "utf8");
      return JSON.parse(data);
    } catch (error:any) {
      throw new Error(`Failed to read data: ${error.message}`);
    }
  }
}
