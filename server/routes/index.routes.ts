import { Router } from "express";
import {
  getHealth,
  conversionRateController,
  dataFetcherController,
} from "../controllers/index.controller";

const router = Router();

router.route("/health").get(getHealth);

router.route("/getConversionRate").get(conversionRateController.fetchRate);

router.route("/fetchData").get(dataFetcherController.fetchData);

export default router;
