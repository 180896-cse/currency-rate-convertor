import express, { Express } from "express";
import "dotenv/config";

const app: Express = express();
const PORT: string | Number = process.env.PORT || 3008;

app.listen(PORT, () => {
  console.log(`Server is up over http://localhost:${PORT}`);
});
