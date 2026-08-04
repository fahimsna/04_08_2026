let express = require("express");
let mongoose = require("mongoose");
require("dotenv").config();
let app = express();

//conect to mongodb
mongoose
  .connect(process.env.dbURL)
  .then(() => {
    app.listen(process.env.PORT||3000, () => {
      console.log("Server is running on port " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
