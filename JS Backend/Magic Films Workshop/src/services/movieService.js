import movies from "../movies.js";



export default {
    findOne(movieId){
    return movies.find(movie => movie.id == movieId);
}
}
