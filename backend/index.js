const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./.env" });
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const dbURI = process.env.DB_URL;
console.log(dbURI);
mongoose
  .connect(dbURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error: " + err));

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
