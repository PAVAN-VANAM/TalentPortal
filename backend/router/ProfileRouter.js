const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");
const multer = require("multer");

// Create storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "../uploads");
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// POST endpoint to upload image and create a new profile
router.post("/api/new-profile", async (req, res) => {
  console.log(req.body);

  try {
    const {
      name,
      designation,
      address,
      yearsOfExperience,
      type,
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
      type,
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
});

// GET endpoint to retrieve image
router.get("/file/:filename", (req, res) => {
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

router.get("/profiles", async (req, res) => {
  try {
    // Fetch all users from the database using the Profile model
    console.log(req.query);
    const profiles = await Profile.find(req.query);
    console.log(profiles);
    // Send the users as a response in JSON format
    res.json(profiles);
  } catch (error) {
    // Handle any errors that might occur during the database query
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
  }
});

module.exports = router;
