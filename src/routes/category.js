import express from "express";
import * as categoriesController from "../controllers/category";

const router = express.Router();

router.get("/all", categoriesController.getCategories);

export default router;
