const mongoose = require("mongoose");

exports.connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydatabase");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};
