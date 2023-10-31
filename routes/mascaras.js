import { Router } from "express";
import * as controllers from "../controllers/mascaras.js";

const router = Router();

router.get("/", controllers.getMascara);
router.get("/:id", controllers.getMascara);
router.post("/", controllers.createMascara);
router.put("/:id", controllers.updateMascara);
router.delete("/:id", controllers.deleteMascara);

export default router;