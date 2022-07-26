import TaskSchema from "./TaskSchema.js";
//insert
export const insertTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};
// Select
export const getTasks = () => {
  return TaskSchema.find();
};

export const getSingleTask = (_id) => {
  return TaskSchema.findById(_id);
};
// update
export const updateTask = (_id, type) => {
  return TaskSchema.findByIdAndUpdate(_id, { type: type }, { new: true });
};
//delete single item by id
export const deleteTaskById = (_id) => {
  return TaskSchema.findByIdAndDelete(_id);
};

// delete multiple items by array of id
export const deleteManyTasks = (ids) => {
  return TaskSchema.deleteMany({
    _id: {
      $in: ids,
    },
  });
};
