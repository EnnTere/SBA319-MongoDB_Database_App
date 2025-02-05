// business logic for handling CRUD operations. Each function interacts with the model to perform database operations.
//routes -> controller -> model -> controller -> view

// Embedded Movies Model
import { embeddedMovieModel } from "../models/embedMovie_Model.js";




//// GET ////

// Finding & Retrieving data
const getAllMovies = async (req, res) => {
  try {
    const allMovies = await embeddedMovieModel.find();
    res.status(200).json({
      success: true,
      movies: allMovies,
    });
    console.log("All movies retrieved: " + getAllMovies);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// const firstMovie = await embeddedMovieModel.findOne({});
// const actionMovie = await embeddedMovieModel.findOne({ title: "Action Movie" });
// //console.log(`firstMovie found: ${firstMovie} actionMovie found: ${actionMovie}`);
// const findMovie = await embeddedMovieModel.findById("67a2d6b7b915e9e054d20e62").exec();
// console.log("Found movie: " + findMovie);


//Projecting (specify or restrict fields to return)
// const projectActionMovie = await embeddedMovieModel.findById("67a2d6b7b915e9e054d20e62", "genres type title").exec();
// console.log("Action Movie Projection: " + projectActionMovie);



//// POST ////

// Inserting new data w/ Save
const createAndSaveMovie = async (req, res) => {
  try {
    const { genres, year, type, title } = req.body;
    const newMovie = new embeddedMovieModel({ genres, year, type, title }); // 1. Instantiate
    await newMovie.save(); // 2. Save
    res.status(201).json({
      success: true,
      movie: newMovie,
    }); 
    console.log("newMovie Create & Save: " + newMovie); // bug 
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// Inserting new data w/ Create
const createMovie = async (req, res) => {
  try { 
    const { genres, year, type, title } = req.body;
    const newMovie = new embeddedMovieModel.create({ genres, year, type, title }); // Instantiates & Saves
    res.status(201).json({
      success: true,
      movie: newMovie,
    });  
    console.log("newMovie Created: " + newMovie);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};




//// PATCH ////

const updateMovie = async (req, res) => {
  try { 
    const { id } = req.params;
    const { genres, year, type, title } = req.body;
    const updatedMovie = await embeddedMovieModel.findByIdAndUpdate(
      id,
      { genres, year, type, title },
      { new: true }
    );
    res.status(201).json({
      success: true,
      movie: updatedMovie,
    });  
    console.log("Movie updated: " + updateMovie);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};



//// DELETE ////
const deleteMovie = async (req, res) => {
  try { 
    const { id } = req.params;
    const deletedMovie = await embeddedMovieModel.findByIdAndDelete(id);
    if (!deletedMovie) {
      return res.status(404).json({ message: "Movie entry not found"})
    }
    res.status(201).json({
      success: true,
      message: "Movie entry deleted",
    });  
    console.log("Deleted movie: " + deleteMovie);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export { 
  getAllMovies, 
  createAndSaveMovie, 
  createMovie, 
  updateMovie, 
  deleteMovie 
};


