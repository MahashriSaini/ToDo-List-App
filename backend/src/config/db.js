//backend/src/config/db.js
import mongoose from "mongoose";
import {DB_URL} from "./config.js";

const connectDB = async () => {
  try {
    console.log("connecting to mongodb");
    await mongoose.connect(DB_URL);

    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
