import { Router } from "express";
import userActions from "../api/users/userActions";
import cards from "../api/users/cards";

const router = Router();

router.use("/profile", userActions);
router.use("/cards", cards);

export default router;
