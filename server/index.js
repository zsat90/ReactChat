const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoute = require("./routes/userRoute");

const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoute);

app.listen(port, (req, res) => {
  console.log(`app listening on port: ${port}`);
});

mongoose
  .connect(uri, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection established");
  })
  .catch((err) => {
    console.log("MongoDB connection error: ", err.message);
  });
