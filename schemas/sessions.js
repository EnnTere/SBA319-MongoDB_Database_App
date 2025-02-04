var sessions = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    jwt: {
        type: String,
        required: true
    }
});