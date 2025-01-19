import homeConroller from "./controller/homeController.js"
import { Router } from "express"

const router = Router();
router.use(homeConroller);



export default router;