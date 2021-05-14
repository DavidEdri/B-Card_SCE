import express from "express";
import controller from "../../../controllers/users/cards";

const router = express.Router();

router.get("/", controller.get);

router.post("/", controller.create);

router.put("/settings/:id", controller.editCardSettings);
router.put("/", controller.editCard);

router.delete("/", controller.delCard);

export default router;
