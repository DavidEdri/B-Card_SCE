import express from "express";
import controller from "../../../controllers/guests/data";

const router = express.Router();

router.get("/cities", controller.getCities);
router.get("/jobTitles", controller.getJobTitles);

export default router;
