import { Router, Request, Response } from "express";
import {
  getHealth,
  conversionRateController,
} from "../controllers/index.controller";

const router = Router();

router.route("/health").get(getHealth);

router.route("/getConversionRate").get(conversionRateController.fetchRate);

export default router;
