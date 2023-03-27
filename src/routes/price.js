import express from "express";
import * as pricesController from "../controllers/price";

const router = express.Router();

router.get("/all", pricesController.getPrices);

export default router;
