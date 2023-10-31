import { Router } from "express";
import * as controllers from "../controllers/lipsticks.js";

const router = Router();

router.get("/", controllers.getLipstick);
router.get("/:id", controllers.getLipstick);
router.post("/", controllers.createLipstick);
router.put("/:id", controllers.updateLipstick);
router.delete("/:id", controllers.deleteLipstick);

export default router;