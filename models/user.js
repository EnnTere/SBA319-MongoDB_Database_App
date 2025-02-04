const { Mongoose } = require("mongoose");

const userSchema = new Mongoose.schema({
  name: {
    type: String,
    required: true,
  },
  unique: true,
});