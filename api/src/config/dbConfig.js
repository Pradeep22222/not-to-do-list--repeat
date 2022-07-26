import mongoose from "mongoose";
export const dbConnect = () => {
  try {
    const MONGO_ClIENT = "mongodb://localhost/not_to_do_mine";
    const conn = mongoose.connect(MONGO_ClIENT);
    conn && console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
