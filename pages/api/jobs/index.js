// Import necessary modules
import { connectToDatabase } from "../../../utils/db";
import { JobModel } from "../../../models/job";

// GET /api/jobs
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Connect to the database
      await connectToDatabase();

      // Fetch all jobs from the database
      const jobs = await JobModel.find({
        isDeleted: false,
      });

      // Return the jobs as the response
      res.status(200).json(jobs);
    } catch (error) {
      // Handle any errors
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      // Connect to the database
      await connectToDatabase();

      // Create a new job in the database
      const newJob = await JobModel.create(req.body);

      // Return the newly created job as the response
      res.status(201).json(newJob);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "PUT") {
    try {
      // Connect to the database
      await connectToDatabase();

      // Update the job in the database
      const updatedJob = await JobModel.findByIdAndUpdate(
        req.query.id,
        req.body,
        { new: true }
      );

      // Return the updated job as the response
      res.status(200).json(updatedJob);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "DELETE") {
    try {
      // Connect to the database
      await connectToDatabase();

      // Delete the job from the database
      const deletedJob = await JobModel.findByIdAndUpdate(
        req.query.id,
        { isDeleted: true },
        { new: true }
      );

      // Return the deleted job as the response
      res.status(204).json(deletedJob);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    // Handle unsupported HTTP methods
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
