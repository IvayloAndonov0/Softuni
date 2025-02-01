import { Router } from "express";

import  movieService from "../services/movieService.js";
import castService from "../services/castService.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const movieController = Router();

movieController.get(`/create`,isAuth,(req,res) => {
    
    res.render(`create`)
});
movieController.get(`/:id/details`,async (req,res) => {
    const movieId = req.params.id;

    const movie = await movieService.getOne(movieId).populate(`casts`);
    const isCreator =  movie.creator?.equals(req.user.id);
    
    res.render(`movie/details`,{movie,isCreator})
});
movieController.post(`/create`,isAuth,async (req,res) => {
  const newMovie = req.body;
  const userId = req.user?.id;
    await  movieService.create(newMovie,userId);
   res.redirect(`/`);
});
movieController.get(`/search`, async (req,res) => { 
    const filter = req.query;
    const movies = await  movieService.getAll(filter);

    res.render('search', { movies, filter });

});
movieController.get(`/:movieId/attach-cast`,isAuth, async (req,res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);
    const casts = await castService.getAll();
    res.render('movie/cast-attach',{movie,cast:casts});

});
movieController.post(`/:movieId/attach-cast`,isAuth, async (req,res) => {
    const movieId = req.params.movieId;
    const castId = req.body.cast;
    await movieService.attachCast(movieId,castId);
    res.redirect(`/movies/${movieId}/details`);

});
movieController.get(`/:movieId/delete`,isAuth, async (req,res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);
   if(!movie.creator.equals(req.user.id)){
        return res.redirect(`/404`);
   };
   await movieService.delete(movieId);
    res.redirect(`/`);

});
function getCategoriesData(category){
    let categories = {
        "tv-show":"TV Show",
        "animation":"Animation",
        "movie":"Movie",
        "documentary":"Documentary",
        "short-film":"Short Film"
        
    };
    const categoreis= Object.keys(categories).map(categoryValue=>({
        value:categoryValue,
        label:categories[categoryValue],
        selected: categoryValue===category ? `selected` : ``
    }));
    return categoreis
}
movieController.get(`/:movieId/edit`,isAuth, async (req,res) => {
    
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);
    const categories = getCategoriesData(movie.category);
    
   res.render(`movie/edit`,{movie,categories});
});
movieController.post(`/:movieId/edit`,isAuth, async (req,res) => {
    const movieId = req.params.movieId;
    const movie = req.body;
    await movieService.update(movieId,movie);
    res.redirect(`/movies/${movieId}/details`);
});



export default movieController;