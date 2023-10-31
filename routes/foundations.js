import { Router } from "express";
import * as controllers from "../controllers/foundations.js";

const router = Router();

router.get("/", controllers.getFoundation);
router.get("/:id", controllers.getFoundation);
router.post("/", controllers.createFoundation);
router.put("/:id", controllers.updateFoundation);
router.delete("/:id", controllers.deleteFoundation);

export default router;