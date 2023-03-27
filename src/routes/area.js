import express from "express";
import * as areasController from "../controllers/area";

const router = express.Router();

router.get("/all", areasController.getAreas);

export default router;
