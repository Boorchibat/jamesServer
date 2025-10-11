const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = 9000;

app.use(express.json());

app.get("/", async (request, response) => {
  response.send("Intro to MongoDb and MonGoose");
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB succesfully!");
    app.listen(port, () => {
      console.log(`server is running on port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });