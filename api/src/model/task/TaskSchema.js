import mongoose from "mongoose";
const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      require: true,
      maxlength: 40,
    },
    hr: {
      type: Number,
      require: true,
      max: 168,
    },
    type: {
      type: String,
      require: true,
      default: "entry ",
    },
  },
  { timestamps: true }
);
export default mongoose.model("Task", taskSchema);
