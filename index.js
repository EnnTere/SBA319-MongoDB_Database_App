//////////////////////////
/// Server & Database ///
////////////////////////

// Server
import express from "express";
const app = express();
const port = process.env.PORT || 7000;

import { error } from "console"; // unsure where this came from & didn't have time to look in to
import connectDB from "./config/connectDB.js"

// MongoDB Connection
connectDB();


///// Middleware - Body Parsers /////
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));


//////////////////////
/////// Routes ///////
//////////////////////

import movieRoute from "./routes/movieRte.js";

// app.use("/api", <Route Placeholder>); // did not include other routes because was not able to implement other routes due to time
app.use("/api/movies", movieRoute)


// Root Route
app.get("/", async (req, res) => {
  res.json("You are at root");
});

//import { connect } from "http2"; // unsure where this came from & didn't have time to look in to

//////////////////////
///// Middleware /////
//////////////////////

///// Request Logging /////
app.use((req, res, next) => {
  const logTime = new Date();
  console.log(
    `-------
    ${logTime.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}`
  );
  if (Object.keys(req.body).length > 0) {
    console.log(`Data contained: ${JSON.stringify(req.body)}`); 
  }
  next();
});


///// Errors /////

// 404 not found - unsure if optimized
app.use((req, res, next) => {
  const err = new Error("Resource Not Found");
  err.status = 404;
  next(err);
});

// General Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message })
});


///////////////////////////////
//////// Server Start ////////
/////////////////////////////

app.listen(port, () => {
  console.log(`Server listening to ${port}`);
});