import express from "express";
import  handlebars  from "express-handlebars";
import routes from "./routes.js"
import showRatingHelper from "./helpers/rating-helper.js";
import mogoose from "mongoose"
import mongoose from "mongoose";

const app = express();


try {
    const uri= `mongodb://127.0.0.1:27017/magic-movies-jan2025`;
    await mongoose.connect(uri);
    console.log(`DB connected successfuly!`);
    
} catch (err) {
    console.error(err.message)
}

app.engine(`hbs`,handlebars.engine({
    extname:`hbs`,
    helpers:{showRating : showRatingHelper},
    runtimeOptions:{
        allowProtoPropertiesByDefault:true
    }
}));

app.set(`view engine`,`hbs`);
app.set(`views`,`./src/views`);

app.use(`/static`,express.static(`src/public`));
app.use(express.urlencoded({extended:false}));



app.use(routes);


app.get(`*`,(req,res)=>{
    res.render(`404`);
});

app.listen(5000,()=>console.log(`Server is listening on http://localhost:5000......`));