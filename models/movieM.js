import { mongoose } from "mongoose";
const { Schema, model } = mongoose;


////// Validation Options //////
//// Only run on create or save methods
// type: <data type>
// required: <boolean>
// immutable: <boolean> - unable to be changed
// lowercase: <boolean> - converts
// default: <value> default if nothing is entered
// ex. default: () => Date.now()

// const Schema = mongoose.Schema?? What is this for


const movieSchema = new Schema({
    // _id: {
    //     type: Schema.Types.ObjectId,
    //     required: true
    // },
    plot: {
        type: String
    },
    genres: {
        type: [String],
        index: true
    },
    runtime: {
        type: Number
    },
    cast: [
        {
            type: String
        }
    ],
    poster: {
        type: String
    },
    title: {
        type: String,
        required: true,
        //index: true
    },
    fullplot: {
        type: String
    },
    languages: [
        {
            type: String
        }
    ],
    released: {
        type: Date
    },
    directors: {
        type: [String],
        //index: true
    },
    rated: {
        type: String
    },
    awards: {
        wins: {
            type: Number
        },
        nominations: {
            type: Number
        },
        text: {
            type: String
        }
    },
    lastupdated: {
        type: Date,
        //required: true
    },
    year: {
        type: Schema.Types.Mixed,
        validate: {
            validator: function(val) {
                return val <= new Date().getFullYear();
            },
            message: "They haven't made any movies for that year yet!" 
        },
        index: true
    },
    imdb: {
        rating: {
            type: Schema.Types.Mixed
        },
        votes: {
            type: Schema.Types.Mixed
        },
        id: {
            type: Number
        }
    },
    countries: [
        {
            type: String
        }
    ],
    type: {
        type: String,
        required: true
    },
    tomatoes: {
        viewer: {
            rating: {
                type: Number
            },
            numReviews: {
                type: Number
            },
            meter: {
                type: Number
            }
        },
        fresh: {
            type: Number
        },
        critic: {
            rating: {
                type: Number
            },
            numReviews: {
                type: Number
            },
            meter: {
                type: Number,
                //required: true
            }
        },
        rotten: {
            type: Number
        },
        lastUpdated: {
            type: Date,
            //required: true
        },
        boxOffice: {
            type: String
        },
        consensus: {
            type: String
        },
        dvd: {
            type: Date
        },
        production: {
            type: String
        },
        website: {
            type: String
        }
    },
    num_mflix_comments: {
        type: Number,
        //required: true
    },
    metacritic: {
        type: Number,
        //index: true
    },
    writers: [
        {
            type: String
        }
    ]
});

////////////////
// Queries 
////////////////

movieSchema.query.byTitle = function(title) {
    return this.where({ title: title})
}

movieSchema.statics.findByGenre = function(genres) {
    return this.find({ genres: genres });
};

movieSchema.statics.findByDirector = function(director) {
    return this.find({ director: director });
};

//Attempts at year range

movieSchema.statics.findByYearRange = function(yearFrom, yearTo) {
    return this.find({ year: { $gte: yearFrom, $lte: yearTo } });
};

movieSchema.virtual('yearRange').get(function () {
    return this.year >= 2000 && this.year < 2010;
});






// // GET Queries
// // Limit Results and Pagination
// GET /api/movies?limit=10&page=2

// // By Title
// GET /api/movies?title=Inception

// // By Year
// GET /api/movies?year=2020

// // Within A Year Range
// GET /api/movies?yearFrom=2010&yearTo=2020

// // General Sorting by year (ascending/descending)
// GET /api/movies?sort=year&order=asc
// GET /api/movies?sort=year&order=desc

// // By Genre
// GET /api/movies?genre=Action
// GET /api/movies?genres=["Action", "Sci-Fi"]

// // By Director
// GET /api/movies?director=Christopher Nolan




// Indexes // Testing these vs secondary in schema
movieSchema.index({ title: 1 });
//movieSchema.index({ genres: 1 });
//movieSchema.index({ year: -1 });
movieSchema.index({ directors: 1 });
movieSchema.index({ metacritic: 1 });


export const movieModel = model("MovieModel", movieSchema, "movies");