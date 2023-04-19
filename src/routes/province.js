import express from "express";
import * as provincesController from "../controllers/province";

const router = express.Router();

router.get("/all", provincesController.getProvince);

export default router;
