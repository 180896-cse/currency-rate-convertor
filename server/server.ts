import express, { Express } from "express";
import "dotenv/config";
import router from "./routes/index.routes";
const app: Express = express();
const PORT: string | Number = process.env.PORT || 3008;

app.use(express.json());
app.use(router);
// Handling Wildcard Resource request
app.use("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: "Resource not found",
  });
});
app.listen(PORT, () => {
  console.log(`Server is up over http://localhost:${PORT}`);
});
