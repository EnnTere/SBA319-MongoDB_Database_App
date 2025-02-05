import express from "express";
// { response, Router } 
const router = express.Router();
//const app = express();

// Model
import { embeddedMovieModel } from "../models/embedMovie_Model.js";
// import { embeddedMovieModel } from "../controllers/embedMovie_Ctrl.js";

//import * as movieControls from "../controllers/embedMovie_Ctrl.js";


import { getAllMovies, createAndSaveMovie, createMovie, updateMovie, deleteMovie } from "../controllers/embedMovie_Ctrl.js";



router.get("/movies", getAllMovies);
router.post("/movies", createAndSaveMovie);
// router.post("/movies", createMovie);
// router.put("/movies/:id", updateMovie);
// router.delete("/movies/:id", deleteMovie);



// Routes for specific movies
router.route("/movies/:id")
  .get(getAllMovies)
  .put(updateMovie)
  .delete(deleteMovie)




export default router;









// Retrieving & set new property

// GET, POST
// router
//   .route("/movies")
//   .get(async (req, res) => {
//     const movies = await embeddedMovieModel.findOne({});
//     //let movies = await embeddedMovieModel.find({}).limit(10);
//     //let badMovie = await embeddedMovieModel.findOne({ title: "BAD Movie" });

//     try {
//         res.json(movies);
//     } catch (error) {
//       res.status(500).send(error);
//     }
  
//     // Setting new property & saving
//     // badMovie.bagsOfPopcorn = 5;
//     // await badMovie.save();
    
//     console.log("Embedded Movies GET");
//   })


// router
//   .route("/movie")


//   .post(async (req, res) => {
//     const movie = new embeddedMovieModel(req.body);

//     try {
//       await movie.save();
//       res.json(movie);
//     } catch (error) {
//       res.status(500).send(error);
//     }
  
//     // Setting new property & saving
//     // badMovie.bagsOfPopcorn = 5;

  
//     console.log("Embedded Movies POST");
//   })

//   .patch(async (req, res) => {
//     const movie = new embeddedMovieModel(req.body);

//     try {
//       await movie.save();
//       res.json(movie);
//     } catch (error) {
//       res.status(500).send(error);
//     }
  
//     // Setting new property & saving
//     // badMovie.bagsOfPopcorn = 5;

  
//     console.log("Embedded Movies POST");
//   })







//export default app;
