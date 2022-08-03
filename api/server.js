import express from "express";
import helmet from "helmet";
import cors from "cors";
import path from "path"; // is used to create absolute path using path.resolve
const app = express();
const PORT = 8000;
import taskRouter from "./src/routers/taskRouter.js";
// absolute path for the porjection
const __dirname = path.resolve();
// middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());
// middlewares  defining build is the static folder using the express.static middleware
app.use(express.static(path.join(__dirname, "/frontend/build")));
// db connect
import { dbConnect } from "./src/config/dbConfig.js";
dbConnect();

// static content serve

app.use("/api/v1/task", taskRouter);

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"));
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
