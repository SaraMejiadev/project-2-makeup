import { Router } from "express";
import eyeshadowsRoutes from "./eyeshadows.js";
import foundationsRoutes from "./foundations.js";
import lipsticksRoutes from "./lipsticks.js";
import mascarasRoutes from "./mascaras.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root"));

router.use("/eyeshadows", eyeshadowsRoutes);
router.use("/foundations", foundationsRoutes);
router.use("/lipsticks", lipsticksRoutes);
router.use("/mascaras", mascarasRoutes);

export default router;