require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRouter");
const usersRouter = require("./routes/usersRouter");
// const categoryRouter = require("./routes/categoryRouter");
// const postRouter = require("./routes/postRouter");
const path = require("path");

const app = express();
// always at the top
app.use(express.json());

mongoose.connect(
  process.env.MONGO_URL,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    return console.log("DB Connected");
  }
);

//routes after db setup
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
// app.use("/api/employees", empRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on port: ${PORT}`));
