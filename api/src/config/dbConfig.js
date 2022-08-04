import mongoose from "mongoose";
export const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_ClIENT);
    conn && console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
