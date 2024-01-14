// JobModel.js
import { Schema, models, model } from "mongoose";

const jobSchema = new Schema({
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
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const JobModel = models.Job || model("Job", jobSchema);

const _JobModel = JobModel;
export { _JobModel as JobModel };
