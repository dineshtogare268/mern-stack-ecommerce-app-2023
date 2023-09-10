// mongoose for mongoDB database access to provide more control to access mongoDB databse
// npm install mongoose
// https://mongoosejs.com/ for more details about mongoose

import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL); // connect to database
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white // add host
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;

// Note:- The purpose of async / await is to simplify the syntax necessary to consume promise-based APIs. The behavior of async / await is similar to combining generators and promises. Async functions always return a promise.
