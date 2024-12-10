const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const postRouter = require("./src/routes/post.route");
const userRouter = require("./src/routes/user.route");

//Middleware
app.use(cors());
app.use(express.json());

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use("/posts", postRouter);
app.use("/user", userRouter);

//Database connection
app.get("/", (req, res) => {
  res.send("Server is up and running");
});

app.listen(port, () => {
  console.log(`Server is running on the port: ${port}`);
});
