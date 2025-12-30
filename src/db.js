import mongoose from "mongoose";

const connectDb = async (url) => {
    if(!url){
        throw new error("MongoDb connection string missing");
    }
  try {
    const dbConnectedInstance = await mongoose.connect(url, {
    });
    console.log("MongoDb connected");
    return dbConnectedInstance;
  } catch (error) {
    console.error("Error connecting to MongoDB with Mongoose:", error);
    throw error;
  }
};

export { connectDb };
