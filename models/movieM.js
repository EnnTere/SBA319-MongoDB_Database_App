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
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    plot: {
        type: String
    },
    genres: [
        {
            type: String
        }
    ],
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
        required: true
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
    directors: [
        {
            type: String
        }
    ],
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
        type: Schema.Types.Mixed
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
        type: Number
    },
    writers: [
        {
            type: String
        }
    ]
});

export const movieModel = model("MovieModel", movieSchema);