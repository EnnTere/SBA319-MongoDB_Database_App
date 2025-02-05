//////////////////////////
/// Server & Database ///
////////////////////////

// Server
import express from "express";
const app = express();
const port = 7000;

import error from "console";
import mongoose from "mongoose";
import "dotenv/config"

// Mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected w/ Mongoose"));



//////////////////////
/////// Routes ///////
//////////////////////

import embedMovieRoute from "./routes/embedMovieRte.js";

app.use(embedMovieRoute);


// app.set ("", "")
// app.set ("", "")


// Root Route
app.get("/", async (req, res) => {
  res.json("You are at root");
});




///// Test movie document obj /////


// Models
import embeddedMovieModel from "./models/embedded_movies.js";


//// POST ////

// Inserting new data w/ Save

// 1. Instantiate
const newActionMovie = new embeddedMovieModel({
  genres: "action",
  year: 1914,
  type: "movie", 
  title: "Action Movie",
});

// 2. Save
newActionMovie.year = 1814;

async () => {
  await newActionMovie.save();
};
//console.log("newActionMovie Saved: " + newActionMovie);



// Inserting new data w/ Create 
// Instantiates & Saves
const newDramaMovie = await embeddedMovieModel.create({
  genres: "drama",
  year: 1954,
  type: "movie", 
  title: "Drama Movie",
});

//console.log("newDramaMovie Saved: " + newDramaMovie);


//// GET ////

// Finding & Retrieving data
// const firstMovie = await embeddedMovieModel.findOne({});
// const actionMovie = await embeddedMovieModel.findOne({ title: "Action Movie" });
// //console.log(`firstMovie found: ${firstMovie} actionMovie found: ${actionMovie}`);
// const findMovie = await embeddedMovieModel.findById("67a2d6b7b915e9e054d20e62").exec();
// console.log("Found movie: " + findMovie);


// Projecting (specify or restrict fields to return)
// const projectActionMovie = await embeddedMovieModel.findById("67a2d6b7b915e9e054d20e62", "genres type title").exec();
// console.log("Action Movie Projection: " + projectActionMovie);


//// PATCH ////

// Update the new data
// console.log("newDramaMovie Year Before Update: " + newDramaMovie.year);
// newDramaMovie.year = 1915;
// await newDramaMovie.save();
// console.log("newDramaMovie Year After Update: " + newDramaMovie.year);


//// DELETE ////

// const movieDelete1 = await embeddedMovieModel.deleteOne({ title: "Action Movie" });
// console.log("Deleted Movie 1: " + movieDelete1);

// const movieDelete2 = await embeddedMovieModel.deleteMany({ title: "Action Movie" });
// console.log("Deleted Movie 2: " + movieDelete2);








////// Test Routes //////

// GET + PATCH
// Retrieving & set new property
// app.get("/", async (req, res) => {
//   // let badMovie = await embedMovie.findOne({ title: "BAD Movie" });
//   // console.log(badMovie);

//   badMovie.bagsOfPopcorn = 5;
//   await badMovie.save();
  
//   res.send("BadMovie sent");
//   console.log("BadMovie sent");
//   console.log("BadMovie title: " + badMovie.title);
// });






//////////////////////
///// Middleware /////
//////////////////////

///// Body Parsers /////
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));


///// Request Logging /////
app.use((req, res, next) => {
  const logTime = new Date();
  console.log(`
    -------
    ${logTime.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}
    `);
  if (Object.keys(req.body).length > 0) {
    console.log(`Data contained: ${JSON.stringify(req.body)}`);
    // console.log();  
  }
});



///// Errors /////

// 404 not found
app.use((req, res, next) => {
  next(error(404, "Resource Not Found"))
});

// General Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message })
});




//////////////////////
//////// Port ////////
//////////////////////

app.listen(port, () => {
  console.log(`Server listening to ${port}`);
});