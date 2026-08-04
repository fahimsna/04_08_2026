let express = require("express");
let mongoose = require("mongoose");
const enquiryRouter = require("./App/routes/web/enquiryRoutes");
require("dotenv").config();
let app = express();

app.use(express.json());
//Routes
app.use("/api/website/enquiry", enquiryRouter);


//conect to mongodb
mongoose
  .connect(process.env.dbURL)
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server is running on port " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
