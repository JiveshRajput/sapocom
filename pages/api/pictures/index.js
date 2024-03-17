import formidable from "formidable";

import { connectToDatabase } from "@/lib/db";
import { PictureModel } from "@/models/picture";
import { protectRoute } from "@/lib/auth";
import cloudinary from "@/lib/cloudinary";


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
      const form = formidable({
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
          if (Object.prototype.hasOwnProperty.call(fields, key)) {
            fieldsObject[key] = fields[key][0];
          }
        }

        const fileStr = fieldsObject.imageBlob;

        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
          upload_preset: 'sapocom',
        });

        // console.log("CLOUDINARY IMAGE:", uploadResponse);
        const link = uploadResponse.url;

        await connectToDatabase();
        const newPicture = await PictureModel.create({ ...fieldsObject, link, cloudinaryImageId: uploadResponse.public_id });

        res.status(201).json({ message: "File Uploaded Successfully!", newPicture });
      });

    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error", error });
    }
  } else if (req.method === "DELETE") {
    try {
      await connectToDatabase();

      const authenticatedUser = await protectRoute(req, res);
      if (!authenticatedUser) return;

      const picture = await PictureModel.findById(req.query.id);
      // console.log("PICTURE:", picture);
      // console.log("CLOUDINARY ID:", picture.cloudinaryImageId);
      
      await cloudinary.v2.uploader.destroy(picture.cloudinaryImageId);
      await PictureModel.deleteOne({ _id: req.query.id })
      
      // await PictureModel.findByIdAndUpdate(
      //   req.query.id,
      //   { isDeleted: true },
      //   { new: true }
      // );

      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default handler;
