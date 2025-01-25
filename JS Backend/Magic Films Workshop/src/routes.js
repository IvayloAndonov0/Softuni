import homeConroller from "./controller/homeController.js"
import { Router } from "express"
import movieController from "./controller/movieContorller.js"
import castController from "./controller/castController.js";

const routes = Router();
routes.use(homeConroller);
routes.use(`/movies`,movieController);
routes.use(`/cast`,castController);

routes.get(`*`,(req,res)=>{
    res.render(`404`);
});



export default routes;