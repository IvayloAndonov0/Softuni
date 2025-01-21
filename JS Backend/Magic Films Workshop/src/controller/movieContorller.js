import { Router } from "express";

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
movieController.post(`/create`,(req,res)=>{
  const newMovie = req.body;
  movieService.create(newMovie);
   res.redirect(`/`);
});




export default movieController;