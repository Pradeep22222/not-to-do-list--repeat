import express from "express";
import helmet from "helmet";
import cors from "cors";
const app = express();
const PORT = 8000;
import taskRouter from "./src/routers/taskRouter.js";
// middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());
// db connect
import { dbConnect } from "./src/config/dbConfig.js";
dbConnect();
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  const jf = {
    status: "success", // either or success or error
    message: "you hit the  url get endpoint",
  };
  res.json(jf);
});
app.use((error, req, res, next) => {
  const status = error.status || 500;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
});
app.listen(PORT, (err) => {
  err && console.log(error);
  console.log(`server running at port ${PORT}`);
});
