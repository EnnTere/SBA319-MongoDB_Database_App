var embedded_movies = new Schema({
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
    num_mflix_comments: {
        type: Number,
        required: true
    },
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
    writers: [
        {
            type: String
        }
    ],
    awards: new Schema({
        wins: {
            type: Number
        },
        nominations: {
            type: Number
        },
        text: {
            type: String
        }
    }),
    lastupdated: {
        type: Date,
        required: true
    },
    year: {
        type: Schema.Types.Mixed
    },
    imdb: new Schema({
        rating: {
            type: Number
        },
        votes: {
            type: Number
        },
        id: {
            type: Number
        }
    }),
    countries: [
        {
            type: String
        }
    ],
    type: {
        type: String,
        required: true
    },
    tomatoes: new Schema({
        viewer: new Schema({
            rating: {
                type: Number
            },
            numReviews: {
                type: Number
            },
            meter: {
                type: Number
            }
        }),
        production: {
            type: String
        },
        lastUpdated: {
            type: Date,
            required: true
        },
        boxOffice: {
            type: String
        },
        consensus: {
            type: String
        },
        critic: new Schema({
            meter: {
                type: Number
            },
            numReviews: {
                type: Number,
                required: true
            },
            rating: {
                type: Number
            }
        }),
        dvd: {
            type: Date
        },
        fresh: {
            type: Number
        },
        rotten: {
            type: Number
        },
        website: {
            type: String
        }
    }),
    plot_embedding: [
        {
            type: Number
        }
    ],
    metacritic: {
        type: Number
    },
    rated: {
        type: String
    }
});