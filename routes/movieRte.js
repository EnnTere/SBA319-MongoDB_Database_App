import express from "express";
// { response, Router } 
const router = express.Router();
//const app = express();

// Model
import { getMovies, getAllMovies, getOneMovie, createAndSaveMovie, createMovie, updateMovie, deleteMovie } from "../controllers/movieC.js";


// Routes
// GET /api/movies
// POST /api/movies
// GET /api/movies/:id
// PUT /api/movies/:id
// DELETE /api/movies/:id


router.get("/", getMovies);
router.get("/all", getAllMovies); // - For Testing
// router.post("/movies", createAndSaveMovie);
router.post("/", createMovie);



router.get("/", getAllMovies);
router.post("/", createMovie);
// router.post("/", createAndSaveMovie); // Alternative Option

// router.get("/movies", getAllMovies);
// router.post("/movies", createMovie);
// // router.post("/movies", createAndSaveMovie); // Alternative Option


// Routes for specific movies
router.route("/:id")
  // .get(getOneMovie) - For Testing
  .get(getOneMovie)
  .put(updateMovie)
  .delete(deleteMovie)

//   router.get("/movies", getAllMovies);
// // router.post("/movies", createAndSaveMovie);
// router.post("/movies", createMovie);

// // Routes for specific movies
// router.route("/movies/:id")
//   .get(getOneMovie)
//   .put(updateMovie)
//   .delete(deleteMovie)

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
