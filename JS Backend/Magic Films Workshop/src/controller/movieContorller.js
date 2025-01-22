import { Router } from "express";

import  movieService from "../services/movieService.js";

const movieController = Router();

movieController.get(`/create`,(req,res)=>{
    res.render(`create`)
});
movieController.get(`/:id/details`,async (req,res)=>{
    const movieId = req.params.id;

    const movie = await movieService.getOne(movieId);
    
    res.render(`details`,{movie})
});
movieController.post(`/create`,async (req,res)=>{
  const newMovie = req.body;
    await  movieService.create(newMovie);
   res.redirect(`/`);
});
movieController.get(`/search`, async (req,res)=>{
    const filter = req.query;
    const movies = await  movieService.getAll(filter);

    res.render('search', { movies, filter });

});




export default movieController;