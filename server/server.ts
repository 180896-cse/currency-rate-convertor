import express, { Express } from "express";
import "dotenv/config";
import router from "./routes/index.routes";
const app: Express = express();
const PORT: string | Number = process.env.PORT || 3008;

app.use(router)

app.listen(PORT, () => {
  console.log(`Server is up over http://localhost:${PORT}`);
});
