const express = require("express");
const cors = require("cors");
const foodRouter = require("./routes/foodRoute");
const userRouter = require("./routes/userRoutes");

// Express app
const app = express();

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/food/", foodRouter);
app.use("/api/user/", userRouter);

module.exports = app;
