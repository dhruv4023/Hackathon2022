import express from "express";

import {
  postStaff,
  deleteStaff,
  getStaff,
  editStaff,
} from "../controllers/Staff.js";
import upload from "../helpers/filehelpers.js";
// import auth from '../middlewares/auth.js'

const router = express.Router();


router.post("/post", upload.single("file"), postStaff);
router.get("/get", getStaff);
router.delete("/delete/:id", deleteStaff);
router.patch("/edit/:id", editStaff);

export default router;
