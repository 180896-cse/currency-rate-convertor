import { Router } from "express";
import conversionRateController from "../controllers/index.controller";

const router = Router();


router.get("/getConversionRate",():void=>{
    conversionRateController
})


export default router;