
import { v4 as uuid } from "uuid";
import Movie from "../models/Movie.js";
import movies from "../movies.js";



export default {
   getAll(filter = {}) {
        let result =   Movie.find({});

       // if (filter.search) {
      //      result = result.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()));
      //  }

     //   if (filter.genre) {
       //     result = result.filter(movie => movie.genre.toLowerCase() === filter.genre);
     //   }

      //  if (filter.year) {
     //       result = result.filter(movie => movie.year === filter.year);
     //   }

        return result;
    },
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
