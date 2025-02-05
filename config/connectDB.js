
import { mongoose } from "mongoose";
import "dotenv/config"

const connectDB = async () => {
  mongoose.set('autoIndex', false)
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected w/ Mongoose: ${connection.connection.host}`);
  } catch (error) {
    console.error(error.message);
    //process.exit(1);
  }
};

export default connectDB;