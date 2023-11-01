const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const { NotFound } = require("./middleware/NotFound");
const path = require("path");
const { ErrorHandler } = require("./middleware/ErrorHandler");
const morgan = require("morgan");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// app.use("/posts", postsRoutes);

app.use("/media", express.static(path.join(__dirname, "media")));

// Not Found Path
app.use(NotFound);

// Error Handler
app.use(ErrorHandler);

connectDb();
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
