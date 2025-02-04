// Server
const express = require("express");
const app = express();
const port = 7000;

const { error } = require("console");
const { default: mongoose } = require("mongoose");

// Mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected w/ Mongoose"));

// app.set ("", "")
// app.set ("", "")

// Root Route
app.get("/", (req, res) => {
  res.json("You are at root");
});


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
  next(error(404, "Resoure Not Found"))
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