// business logic for handling CRUD operations. Each function interacts with the model to perform database operations.
//routes -> controller -> model -> controller -> view

// Embedded Movies Model
import { movieModel } from "../models/movieM.js";




//// GET ////

// Finding & Retrieving data
const getAllMovies = async (req, res, next) => {
  try {
    const allMovies = await movieModel.find();
    res.status(200).json({
      success: true,
      movies: allMovies,
    });
    console.log("All movies retrieved");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getOneMovie = async (req, res, next) => {
  try {
    const { id } = req.params.id;
    const oneMovie = await movieModel.findById(id).exec();
    res.status(200).json({
      success: true,
      movies: oneMovie,
    });
    console.log("One movie retrieved");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// const firstMovie = await movieModel.findOne({});
// const actionMovie = await movieModel.findOne({ title: "Action Movie" });
// //console.log(`firstMovie found: ${firstMovie} actionMovie found: ${actionMovie}`);

// const findMovie = await movieModel.findById("67a2d6b7b915e9e054d20e62").exec();
// console.log("Found movie: " + findMovie);


// Projecting (specify or restrict fields to return)
// const projectActionMovie = await movieModel.findById("67a2d6b7b915e9e054d20e62", "genres type title").exec();
// console.log("Action Movie Projection: " + projectActionMovie);



//// POST ////

// Inserting new data w/ Save
const createAndSaveMovie = async (req, res, next) => {
  try {
    const { genres, year, type, title } = req.body;
    const newMovie = new movieModel({ genres, year, type, title }); // 1. Instantiate
    await newMovie.save(); // 2. Save
    res.status(201).json({
      success: true,
      movie: newMovie,
    }); 
    console.log("newMovie Created & Saved"); // bug 
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// Inserting new data w/ Create
const createMovie = async (req, res, next) => {
  try { 
    const { genres, year, type, title } = req.body;
    const newMovie = new movieModel.create({ genres, year, type, title }); // Instantiates & Saves
    res.status(201).json({
      success: true,
      movie: newMovie,
    });  
    console.log("newMovie Created");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};




//// PUT ////

const updateMovie = async (req, res, next) => {
  try { 
    const { id } = req.params;
    const { genres, year, type, title } = req.body;
    const updatedMovie = await movieModel.findByIdAndUpdate(
      id,
      { genres, year, type, title },
      { new: true }
    );
    res.status(201).json({
      success: true,
      movie: updatedMovie,
    });  
    console.log("Movie updated");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};



//// DELETE ////
const deleteMovie = async (req, res, next) => {
  try { 
    const { id } = req.params.id;
    const deletedMovie = await movieModel.findByIdAndDelete(id);
    if (!deletedMovie) {
      return res.status(404).json({ message: "Movie entry not found"})
    }
    res.status(201).json({
      success: true,
      message: "Movie entry deleted",
    });  
    console.log("Movie Deleted");
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


