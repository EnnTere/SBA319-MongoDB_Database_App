//////////////////////////
/// Server & Database ///
////////////////////////

// Server
import express from "express";
const app = express();
const port = process.env.PORT || 7000;

import { error } from "console";
import connectDB from "./config/connectDB.js"
// import mongoose from "mongoose";
// import "dotenv/config"

// Mongoose
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected w/ Mongoose"));

// MongoDB Connection
connectDB();


///// Middleware - Body Parsers /////
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));


//////////////////////
/////// Routes ///////
//////////////////////

import movieRoute from "./routes/movieRte.js";

// app.use(movieRoute);
app.use("/api", movieRoute)

// app.set ("", "")
// app.set ("", "")


// Root Routes
app.get("/", async (req, res) => {
  res.json("You are at root");
});

//import { connect } from "http2";

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

// 404 not found
// app.use((req, res, next) => {
//   next(new Error(404, "Resource Not Found"))
// });

// 404 not found
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