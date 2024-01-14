// Import necessary modules
import { connectToDatabase } from "../../../utils/db";
import { ApplicantModel } from "../../../models/applicant";

// GET /api/applicants
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Connect to the database
      await connectToDatabase();

      // Fetch all applicants from the database
      const applicants = await ApplicantModel.find();

      // Return the applicants as the response
      res.status(200).json(applicants);
    } catch (error) {
      // Handle any errors
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      // Connect to the database
      await connectToDatabase();

      // Create a new applicant in the database
      const newApplicant = await ApplicantModel.create(req.body);

      // Return the newly created applicant as the response
      res.status(201).json(newApplicant);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    // Handle unsupported HTTP methods
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
