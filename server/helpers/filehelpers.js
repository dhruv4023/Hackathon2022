"use strict";
// const multer = require('multer');
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    let name = String(file.id + file.title).replace(" ", "_");
    name = String(file.id + file.title).replace("-", "_");
    // name = String(file.id + file.title).replace(/:/g, "_");
    // console.log(req.file.title)
    // console.log(req.body)
    // console.log(file)
    const filename =
      String(req.body.title + "_" + req.body.id + "_").replace(" ", "_") +
      String(file.originalname)
        .replace(" " + "_")
        .replace("-" + "_")
        .replace("." + "_");
    cb(null, filename);
    // new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
  },
});
const filefilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    // console.log(file)
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: filefilter });

export default upload;
