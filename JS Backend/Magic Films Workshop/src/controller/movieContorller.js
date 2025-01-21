import { Router } from "express";
import movies from "../movies.js"
import  movieService from "../services/movieService.js";

const movieController = Router();

movieController.get(`/create`,(req,res)=>{
    res.render(`create`)
});
movieController.get(`/:id/details`,(req,res)=>{
    const movieId = req.params.id;

    const movie = movieService.findOne(movieId);
    
    res.render(`details`,{movie})
});




export default movieController;