import express, { response, Router } from "express";
const router = express.Router();
const app = express();

// Model
import embeddedMovieModel from "../models/embedded_movies.js";

// Retrieving & set new property

// GET, POST
router
  .route("/movies")
  .get(async (req, res) => {
    const movies = await embeddedMovieModel.findOne({});
    //let movies = await embeddedMovieModel.find({}).limit(10);
    //let badMovie = await embeddedMovieModel.findOne({ title: "BAD Movie" });

    try {
        res.json(movies);
    } catch (error) {
      res.status(500).send(error);
    }
  
    // Setting new property & saving
    // badMovie.bagsOfPopcorn = 5;
    // await badMovie.save();
    
    console.log("Embedded Movies GET");
  })


router
  .route("/movie")
  .post(async (req, res) => {
    const movie = new embeddedMovieModel(req.body);

    try {
      await movie.save();
      res.json(movie);
    } catch (error) {
      res.status(500).send(error);
    }
  
    // Setting new property & saving
    // badMovie.bagsOfPopcorn = 5;

  
    console.log("Embedded Movies POST");
  })







export default app;
