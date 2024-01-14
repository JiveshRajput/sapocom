// ApplicantModel.js
import { Schema, models, model } from "mongoose";

const applicantSchema = new Schema({
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
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const ApplicantModel = models.Applicant || model("Applicant", applicantSchema);

const _ApplicantModel = ApplicantModel;
export { _ApplicantModel as ApplicantModel };
