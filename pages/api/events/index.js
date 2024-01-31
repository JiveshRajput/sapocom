// Import necessary modules
import { connectToDatabase } from "@/lib/db";
import { EventModel } from "@/models/event";
const { protectRoute } = require("@/lib/auth");

// GET /api/events
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectToDatabase();

      //getting events if query is present
      const events = await EventModel.find({
        isDeleted: false,
        ...(req.query && req.query),
      });

      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      await connectToDatabase();

      const authenticatedUser = await protectRoute(req, res);
      if (!authenticatedUser) return;

      const newJob = await EventModel.create(req.body);

      res.status(201).json(newJob);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "PUT") {
    try {
      await connectToDatabase();

      const authenticatedUser = await protectRoute(req, res);
      if (!authenticatedUser) return;

      const updatedJob = await EventModel.findByIdAndUpdate(
        req.query.id,
        req.body,
        { new: true }
      );

      res.status(200).json(updatedJob);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "DELETE") {
    try {
      await connectToDatabase();

      const authenticatedUser = await protectRoute(req, res);
      if (!authenticatedUser) return;

      await EventModel.findByIdAndUpdate(
        req.query.id,
        { isDeleted: true },
        { new: true }
      );

      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
