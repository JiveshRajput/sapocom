import { MONGODB_URL, MONGODB_URL_DEMO,  } from "@/configs/config";
import { connect } from "mongoose";

export async function connectToDatabase() {
  try {
    await connect(MONGODB_URL_DEMO);
    // await connect(MONGODB_URL);
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}


// mongodb+srv://sapocomwebsiteadm:<password>@sapocomwebsite.saidz2h.mongodb.net/