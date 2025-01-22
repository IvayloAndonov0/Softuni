
import { v4 as uuid } from "uuid";
import Movie from "../models/Movie.js";
import movies from "../movies.js";



export default {
   getAll(filter = {}) {
        let query =   Movie.find({});

        if (filter.search) {
            query = query.find({title:filter.search});
        }

        if (filter.genre) {
            query = query.find({genre:filter.genre});
        }

        if (filter.year) {
            query = query.find({year:Numebr(filter.year)});
        }

        return query;
    },
    getOne(movieId) {
        const result = Movie.findById(movieId);

        return result;
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
