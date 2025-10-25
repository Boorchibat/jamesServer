const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors")
const authRouter = require("./src/routes/auth")
const propertyRouter = require("./src/routes/property")

const app = express();
const port = 9000;

app.use(cors({
origin: ["http://localhost:9000"],
credentials: true,
}));

app.use(express.json())

app.get("/", async (request, response) => {
  response.send("Intro to MongoDb and MonGoose");
});

app.use("/auth", authRouter)
app.use("/property", propertyRouter)

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