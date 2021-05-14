import express from "express";
import controller from "../../../controllers/guests/cards";

const router = express.Router();

router.get("/getByHandle/:handle", controller.getByHandle);

export default router;
