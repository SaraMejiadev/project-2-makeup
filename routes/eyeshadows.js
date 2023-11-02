import { Router } from "express";
import * as controllers from "../controllers/eyeshadows.js";

const router = Router();

router.get("/", controllers.getEyeshadows);
router.get("/:id", controllers.getEyeshadow);
router.post("/", controllers.createEyeshadow);
router.put("/:id", controllers.updateEyeshadow);
router.delete("/:id", controllers.deleteEyeshadow);

export default router;