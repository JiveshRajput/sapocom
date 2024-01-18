import { connect } from "mongoose";

export async function connectToDatabase() {
  try {
    await connect(
      "mongodb+srv://princeverma360p:e9QGzKyLf9xm19Ib@cluster0.smaku2s.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}
