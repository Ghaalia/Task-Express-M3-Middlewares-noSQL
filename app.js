const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/posts", postsRoutes);

app.use((req, res, next) => {
  res.status(404).json("404 ERROR Path NOT Found !!!");
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ message: error.message });
});

connectDb();
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
