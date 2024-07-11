const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const multer = require("multer");

// database imports
const User = require("./models/user");
const Profile = require("./models/Profile");

dotenv.config({ path: "./.env" });
const port = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173", // Allow only from this origin
  })
);

// MiddleWare
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

//Basic root api
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// MongoDB Connection
const dbURI = process.env.DB_URL;
mongoose
  .connect(dbURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error: " + err));

// create a new database USer
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

// Upload files

// Create storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// POST endpoint to upload image and create a new profile
app.post(
  "/api/new-profile",
  async (req, res) => {
    console.log(req.body);

    try {
      const {
        name,
        designation,
        address,
        yearsOfExperience,
        education,
        socialMediaProfiles,
        user_rating,
        testimonials,
        techStack,
        reviews,
        workExperience,
      } = req.body;

      const newProfileData = {
        name,
        designation,
        address,
        yearsOfExperience,
        education,
        socialMediaProfiles,
        user_rating,
        testimonials,
        techStack,
        reviews,
        workExperience,
      };
      /* if (req.file) {
        newProfileData.imageId = req.file.filename; // Add imageId to the profile data
      } */

      console.log("Profile :", newProfileData);

      const newProfile = new Profile(newProfileData); // Pass newProfileData directly
      await newProfile.save();
      res.status(201).send(newProfile);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
);




// GET endpoint to retrieve image
app.get("/file/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists",
      });
    }
    // Check if image
    if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: "Not an image",
      });
    }
  });
});

// Data Of Profiles

app.get("/post", async (req, res) => {
  try {
    // Fetch all users from the database using the User model
    const profiles = await Profile.find();

    // Send the users as a response in JSON format
    res.json(profiles);
  } catch (error) {
    // Handle any errors that might occur during the database query
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
  }
});

// login Authorization Service End point
app.post("/api/login", async (req, res) => {
  //Authorization User after it done by Authetication

  const { email, password } = req.body;

  const ExistUser = { email: email, password: password };

  const accessToken = jwt.sign(ExistUser, process.env.ACCESS_TOKEN);

  res.json({ accessToken: accessToken });
});

function AutheticationToken(req, res, next) {
  const authHeader = req.headers["Authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
