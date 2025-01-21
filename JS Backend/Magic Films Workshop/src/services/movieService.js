
import { v4 as uuid } from "uuid";
import movies from "../movies.js";



export default {
    getAll(){return movies},
    findOne(movieId){
    return movies.find(movie => movie.id == movieId);
    },
    create(movieData){
        const newId = uuid();

        movies.push({
            id: newId,
            ...movieData,
            rating:Number(movieData.rating)
        });

        return newId;
    }
}
