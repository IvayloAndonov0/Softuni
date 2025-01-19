import homeConroller from "./controller/homeController.js"
import { Router } from "express"

const routes = Router();
routes.use(homeConroller);



export default routes;