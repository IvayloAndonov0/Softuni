
import { v4 as uuid } from "uuid";
import movies from "../movies.js";



export default {
    findOne(movieId){
    return movies.find(movie => movie.id == movieId);
    },
    create(movieData){
        const newId = uuid();

        movies.push({
            id: newId,
            ...movieData,
        });

        return newId;
    }
}
