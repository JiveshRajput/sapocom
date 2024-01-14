import { connect } from "mongoose";

export async function connectToDatabase() {
  try {
    await connect("mongodb://localhost:27017/mydatabase");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}
