require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./src/app");

// connect to DB
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    console.log("Datbase connection is succesfull");
  })
  .catch((error) => {
    console.log(error);
  });

// listen for request
app.listen(process.env.PORT, () => {
  console.log("listen on port", process.env.PORT);
});
