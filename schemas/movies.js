var movies = new Schema({
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
            type: Schema.Types.Mixed
        },
        votes: {
            type: Schema.Types.Mixed
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
        fresh: {
            type: Number
        },
        critic: new Schema({
            rating: {
                type: Number
            },
            numReviews: {
                type: Number
            },
            meter: {
                type: Number,
                required: true
            }
        }),
        rotten: {
            type: Number
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
        dvd: {
            type: Date
        },
        production: {
            type: String
        },
        website: {
            type: String
        }
    }),
    num_mflix_comments: {
        type: Number,
        required: true
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