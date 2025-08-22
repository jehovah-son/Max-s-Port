import mongoose from "mongoose";



const MongooseConnection = async () => {
  try {
    // Connect to the MongoDB instance using the MONGO environment variable.
    await mongoose.connect(process.env.MONGO );
  } catch (error) {
    // If the connection fails, throw an error with a descriptive message.
    throw new Error("Failed to connect to MongoDB", error);
  }
};




export default MongooseConnection;