import { connectToDatabase } from "@/lib/db";
import { PictureModel } from "@/models/picture";

import formidable from "formidable";
import path from "path";
import fs from 'fs';
import { protectRoute } from "@/lib/auth";


export const config = {
  api: {
    bodyParser: false,
  },
};

// GET /api/pictures
const handler = async function (req, res) {
  if (req.method === "GET") {
    try {
      await connectToDatabase();

      const pictures = await PictureModel.find({
        isDeleted: false,
        ...(req.query && req.query),
      });

      res.status(200).json(pictures);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    try {
      if(fs.existsSync(path.join(process.cwd(), "public", "uploads"))) {
        console.log('PATH EXISTS')
        const form = formidable({
          uploadDir: path.join(process.cwd(), "public", "uploads"),
          keepExtensions: true,
        });
  
        form.parse(req, async (err, fields, files) => {
          if (err) {
            console.error("Error parsing form data:", err);
            res.status(500).json({ err, error: "Internal Server Error" });
            return;
          }
          const fieldsObject = {};
  
          for (const key in fields) {
            console.log(key, fields[key][0]);
            if (Object.prototype.hasOwnProperty.call(fields, key)) {
              fieldsObject[key] = fields[key][0];
            }
          }
          const link = files.picture[0].newFilename;
  
          await connectToDatabase();
  
          const newPicture = await PictureModel.create({
            ...fieldsObject,
            link,
          });
  
          res.status(201).json({message:"File Uploaded Successfully!", newPicture});  
        });
        
      } else {
        console.log('PATH DOESNT EXISTS');

        fs.mkdirSync(path.join(process.cwd(), "public", "uploads"))

        const form = formidable({
          uploadDir: path.join(process.cwd(), "public", "uploads"),
          keepExtensions: true,
        });

        form.parse(req, async (err, fields, files) => {
          if (err) {
            console.error("Error parsing form data:", err);
            res.status(500).json({ err, error: "Internal Server Error" });
            return;
          }
          const fieldsObject = {};

          for (const key in fields) {
            console.log(key, fields[key][0]);
            if (Object.prototype.hasOwnProperty.call(fields, key)) {
              fieldsObject[key] = fields[key][0];
            }
          }
          const link = files.picture[0].newFilename;
          console.log("LINK", link);
          await connectToDatabase();

          const newPicture = await PictureModel.create({
            ...fieldsObject,
            link,            
          });

          res.status(201).json({message:"File Uploaded Successfully!", newPicture});
        });
    }

    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error", error });
    }
  } else if (req.method === "DELETE") {
    try {
      await connectToDatabase();

      const authenticatedUser = await protectRoute(req, res);
      if (!authenticatedUser) return;

      await PictureModel.findByIdAndUpdate(
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
};

export default handler;
