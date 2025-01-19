import homeConroller from "./controller/homeController.js"
import { Router } from "express"
import movieController from "./controller/movieContorller.js"

const routes = Router();
routes.use(homeConroller);
routes.use(`/movies`,movieController);



export default routes;