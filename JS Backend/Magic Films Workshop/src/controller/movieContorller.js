import { Router } from "express";
import movies from "../movies.js"

const movieController = Router();

movieController.get(`/create`,(req,res)=>{
    res.render(`create`)
})




export default movieController;