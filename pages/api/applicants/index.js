// Import necessary modules
import { connectToDatabase } from "../../../utils/db";
import { ApplicantModel } from "../../../models/applicant";

import formidable from "formidable";
import path from "path";

export const config = {
  api: {
    bodyParser: false, // Disable the built-in bodyParser
  },
};

// GET /api/applicants
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Connect to the database
      await connectToDatabase();

      // Fetch all applicants from the database
      const applicants = await ApplicantModel.find({
        isDeleted: false,
      });

      // Return the applicants as the response
      res.status(200).json(applicants);
    } catch (error) {
      // Handle any errors
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      const form = formidable({
        uploadDir: path.join(process.cwd(), "public", "uploads"),
        keepExtensions: true,
      });

      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error("Error parsing form data:", err);
          res.status(500).json({ error: "Internal Server Error" });
          return;
        }
        const fieldsObject = {};

        for (const key in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, key)) {
            fieldsObject[key] = fields[key][0];
          }
        }

        // Extract the fields and files from the form data
        const resume = files.resume[0].newFilename;

        // Connect to the database
        await connectToDatabase();

        // Create a new applicant in the database
        const newApplicant = await ApplicantModel.create({
          ...fieldsObject,
          resume,
        });

        res.status(201).json(newApplicant);
      });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "DELETE") {
    try {
      // Connect to the database
      await connectToDatabase();

      // Delete the applicant from the database
      const deletedApplicant = await ApplicantModel.findByIdAndUpdate(
        req.query.id,
        { isDeleted: true },
        { new: true }
      );

      // Return the deleted applicant as the response
      res.status(204).json(deletedApplicant);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    // Handle unsupported HTTP methods
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
