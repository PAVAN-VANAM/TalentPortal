const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  address: {
    houseNo: { type: String },
    street: { type: String },
    addressLineOne: { type: String, required: true },
    addressLineTwo: { type: String },
    pincode: { type: Number, required: true },
    district: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
  yearsOfExperience: { type: Number, required: true },
  type: {
    type: String,
    enum: ["STUDENT", "ALUMNI"],
    required: true,
  },
  education: [
    {
      instituteName: { type: String, required: true },
      courseName: { type: String, required: true },
      branch: { type: String, required: true },
      yearOfPassing: { type: Date, required: true },
      grade: { type: String, required: true },
    },
  ],
  socialMediaProfiles: [
    {
      linkedIn: { type: String, required: true },
      Github: { type: String, required: true },
      emailId: { type: String, required: true },
    },
  ],
  user_rating: { type: Number },
  testimonials: { type: String },
  techStack: [{ type: String, required: true }],
  reviews: { type: String },
  workExperience: [
    {
      companyName: { type: String, required: true },
      startDate: { type: Date, required: true },
      endDate: { type: Date },
      designation: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
  // imageId: { type: mongoose.Schema.Types.ObjectId, ref: "uploads.files" }, // Reference to the image file in GridFS
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Add pre-save hook to automatically update updatedAt timestamp
profileSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
