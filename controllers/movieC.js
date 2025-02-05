// business logic for handling CRUD operations. Each function interacts with the model to perform database operations.
//routes -> controller -> model -> controller -> view

// Embedded Movies Model
import { movieModel } from "../models/movieM.js";
import pagination from "../utils/pagination.js";



//// GET ////

const getMovies = async (req, res, next) => {
  try {
    let query = movieModel.find();

    // Pagination
    const { skip, limit } = pagination(req);

    // Sorting
    const sort = req.query.sort || 'year';
    const order = req.query.order === 'desc' ? -1 : 1;
    query = query.skip(skip).limit(limit).sort({ [sort]: order });

    // Queries
    if (req.query.yearFrom && req.query.yearTo) query = query.findByYearRange(req.query.yearFrom, req.query.yearTo);
    if (req.query.title) query = query.byTitle(req.query.titles);
    if (req.query.genre) query = query.findByGenre(req.query.genre);
    if (req.query.director) query = query.findByDirector(req.query.director);
    if (req.query.metacritic) query = query.findByScore(req.query.metacritic);

    const movies = await query

    res.status(200).json({
      success: true,
      movies: movies,
    });
    console.log("Movies retrieved");
  } catch (error) {
    // res.status(500).json({
    //   success: false,
    //   message: "Server Error",
    // });
    next(error);
  }
};


/////////// For Testing ///////////
// Get all movies  
const getAllMovies = async (req, res, next) => {
  try {
    const allMovies = await movieModel.find();
    res.status(200).json({
      success: true,
      movies: allMovies,
    });
    console.log("All movies retrieved");
  } catch (error) {
    // res.status(500).json({
    //   success: false,
    //   message: "Server Error",
    // });
    next(error);
  }
};

// Get movie by ID
const getOneMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneMovie = await movieModel.findById(id).exec();
    res.status(200).json({
      success: true,
      movies: oneMovie,
    });
    console.log("One movie retrieved");
  } catch (error) {
    // res.status(500).json({
    //   success: false,
    //   message: "Server Error",
    // });
    next(error);
  }
};




// const firstMovie = await movieModel.findOne({});
// const actionMovie = await movieModel.findOne({ title: "Action Movie" });
// //console.log(`firstMovie found: ${firstMovie} actionMovie found: ${actionMovie}`);
// const findMovie = await movieModel.findById("67a2d6b7b915e9e054d20e62").exec();
// console.log("Found movie: " + findMovie);


//Projecting (specify or restrict fields to return)
// const projectActionMovie = await movieModel.findById("67a2d6b7b915e9e054d20e62", "genres type title").exec();
// console.log("Action Movie Projection: " + projectActionMovie);




//// POST ////

// Inserting new data w/ Save
const createAndSaveMovie = async (req, res, next) => {
  try {
    const { genres, year, type, title } = req.body;
    const newMovie = new movieModel({ genres, year, type, title }); // 1. Instantiate
    await newMovie.save(); // 2. Save
    res.status(200).json({
      success: true,
      movie: newMovie,
    }); 
    console.log("newMovie Created & Saved"); // bug 
  } catch (error) {
    // res.status(500).json({
    //   success: false,
    //   message: "Server Error",
    // });
    next(error);
  }
};


// Inserting new data w/ Create
const createMovie = async (req, res, next) => {
  try { 
    const { genres, year, type, title } = req.body;
    const newMovie = await movieModel.create({ genres, year, type, title }); // Instantiates & Saves
    res.status(200).json({
      success: true,
      movie: newMovie,
    });  
    console.log("newMovie Created");
  } catch (error) {
    // res.status(500).json({
    //   success: false,
    //   message: "Server Error",
    // });
    next(error);
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
    res.status(200).json({
      success: true,
      movie: updatedMovie,
    });  
    console.log("Movie updated");
  } catch (error) {
    // res.status(500).json({
    //   success: false,
    //   message: "Server Error",
    // });
    next(error);
  }
};



//// DELETE ////
const deleteMovie = async (req, res, next) => {
  try { 
    const { id } = req.params;
    const deletedMovie = await movieModel.findByIdAndDelete(id);
    if (!deletedMovie) {
      return res.status(404).json({ message: "Movie entry not found"})
    }
    res.status(200).json({
      success: true,
      message: "Movie entry deleted",
    });  
    console.log("Movie Deleted");
  } catch (error) {
    // res.status(500).json({
    //   success: false,
    //   message: "Server Error",
    // });
    next(error);
  }
};


export { 
  getMovies,
  getAllMovies, 
  getOneMovie,
  createAndSaveMovie, 
  createMovie, 
  updateMovie, 
  deleteMovie 
};