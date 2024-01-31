// EventModel.js
import { Schema, models, model } from "mongoose";

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  eventTime: {
    type: String,
    required: true,
  },
});

const EventModel = models.Event || model("Event", eventSchema);

export { EventModel };
