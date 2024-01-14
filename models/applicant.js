// ApplicantModel.js
const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  relevantExperience: {
    type: String,
    required: true,
  },
  highestGraduation: {
    type: String,
    required: true,
  },
  graduationYear: {
    type: Number,
    required: true,
  },
});

const ApplicantModel =
  mongoose.models.Applicant || mongoose.model("Applicant", applicantSchema);

exports.ApplicantModel = ApplicantModel;
