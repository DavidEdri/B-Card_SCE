import { Router } from "express";
import auth from "../api/guests/auth";
import data from "../api/guests/data";
import cards from "../api/guests/cards";

const router = Router();

router.use("/auth", auth);
router.use("/cards", cards);
router.use("/data", data);

export default router;
