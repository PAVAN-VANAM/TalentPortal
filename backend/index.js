const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// database imports
const User = require("./models/user");

dotenv.config({ path: "./.env" });
const port = process.env.PORT;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const dbURI = process.env.DB_URL;
mongoose
  .connect(dbURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error: " + err));

app.post("/api/user", async (req, res) => {
  try {
    const { name, email, password, usertype, active } = req.body;

    const newUser = new User({
      name,
      email,
      password,
      usertype,
      active,
    });

    const response = await newUser.save();
    console.log(response);
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// PUT route to update an existing user
app.put("/api/users/:userid", async (req, res) => {
  try {
    const userId = req.params.userid;
    const update = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    user.name = update.name || user.name;
    user.email = update.email || user.email;
    user.password = update.password || user.password;
    user.usertype = update.usertype || user.usertype;
    user.active = update.active !== undefined ? update.active : user.active;

    const response = await user.save();
    console.log(response);
    res.status(200).json({ message: "User updated successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update user." });
  }
});


app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
