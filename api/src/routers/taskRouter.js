import express from "express";
import { getTasks } from "./../model/task/TaskModel.js";
import { getSingleTask } from "./../model/task/TaskModel.js";
import { updateTask } from "./../model/task/TaskModel.js";
import { insertTask, deleteManyTasks } from "./../model/task/TaskModel.js";

const router = express.Router();

router.get("/:_id?", async (req, res, next) => {
  try {
    //here we are expecting to get all the data from the data base
    // so we query the database and get all the data here
    const { _id } = req.params;

    const result = _id ? await getSingleTask(_id) : await getTasks();
    res.json({
      status: "success", // either or success or error
      message: "you hit the specific url get endpoint",
      result,
    });
  } catch (error) {
    (error.status = 500), next(error);
  }
});
router.post("/", async (req, res, next) => {
  // call db query to store data in the database
  try {
    const result = await insertTask(req.body);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "The new task has been added",
        })
      : res.json({
          status: "error",
          message: "error, unable to add new task Please try again later",
        });
  } catch (error) {
    (error.status = 500), next(error);
  }
});
router.patch("/", async (req, res, next) => {
  try {
    const { _id, type } = req.body;
    const result = await updateTask(_id, type);
    res.json({
      status: "success",
      message: "return from patch method",
      result,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});
// router.delete("/:_id?", async (req, res, next) => {    It was for deleting just one item but in our case we either want to delete 1 item or multiple item
//   try {
//     const { _id } = req.params;
//     const result = await deleteTaskById(_id);
//     res.json({
//       status: "success", // either or success or error
//       message: "return from delete method",
//       result,
//     });
//   } catch (error) {
//     error.status = 500;
//     next(error);
//   }
// });
router.delete("/", async (req, res, next) => {
  try {
    const ids = req.body;
    const result = await deleteManyTasks(ids);
    // console.log(result);
    res.json({
      status: "success", // either or success or error
      message: "the selected item has been deleted",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});
export default router;
