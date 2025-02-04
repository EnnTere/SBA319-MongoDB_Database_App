// Server
import express from "express";
const app = express();
const port = 7000;

import { error } from "console";
import mongoose from "mongoose";
import "dotenv/config"

// Models
import embedMovie from "./models/embedded_movies.js";

// Mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected w/ Mongoose"));


// Test movie document obj /////

// Creating
const newMovie = new embedMovie({
  genres: "action",
  year: 1914,
  type: "movie", 
  title: "BAD Movie",
});

newMovie.year = 1814;
// Saving
async () => {
  await newMovie.save();
  console.log("saved");
};
console.log(newMovie);


const badMovie2 = await embedMovie.create({
  genres: "action",
  year: 1914,
  type: "movie", 
  title: "BAD Movie2",
});


// app.set ("", "")
// app.set ("", "")

////// Routes ////
// Root Route
app.get("/", async (req, res) => {
  res.json("You are at root");
});

// Retrieving & set new property
app.get("/", async (req, res) => {
  let badMovie = await embedMovie.findOne({ title: "BAD Movie" });
  console.log(badMovie);

  badMovie.bagsOfPopcorn = 5;
  await badMovie.save();
  
  res.send("BadMovie sent");
  console.log("BadMovie sent");
});



console.log(badMovie2.title);


// Routes
// Import Routes

// Routes

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

// Port
app.listen(port, () => {
  console.log(`Server listening to ${port}`);
});