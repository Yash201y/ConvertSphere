import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { exec } from "child_process";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads/");
  },

  filename: (_, file, cb) => {
    cb(
      null,
      `${Date.now()}-${file.originalname}`
    );
  }
});

const upload = multer({ storage });

router.post(
  "/upload",
  upload.single("file"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No file uploaded"
        });
      }

      const uploadedFile = req.file;

      if (!uploadedFile) {
        return res.status(400).json({
        success: false,
        message: "No file uploaded"
       });
      }

      const inputPath = path.resolve(uploadedFile.path);

      const outputDir = path.resolve("converted");

      exec(
        `soffice --headless --convert-to pdf "${inputPath}" --outdir "${outputDir}"`,
        (error) => {
          if (error) {
            console.error(error);

            return res.status(500).json({
              success: false,
              message: "Conversion failed"
            });
          }

          const pdfName =
          path.parse(uploadedFile.filename).name + ".pdf";

          return res.json({
            success: true,
            pdfUrl: `http://localhost:4000/converted/${pdfName}`
          });
        }
      );
    } catch (error: any) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
);

export default router;