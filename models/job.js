// JobModel.js
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  isClosed: {
    type: Boolean,
    default: false,
  },
});

const JobModel = mongoose.models.Job || mongoose.model("Job", jobSchema);

exports.JobModel = JobModel;
