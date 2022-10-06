import express from "express";

import {
  postStaff,
  deleteStaff,
  getStaff,
  editStaff,
} from "../controllers/Staff.js";
import upload from "../helpers/filehelpers.js";
import adminAuth from "../middlewares/adminAuth.js";

const router = express.Router();

router.post("/post", adminAuth, upload.single("file"), postStaff);
router.get("/get", getStaff);
router.delete("/delete/:id", adminAuth, deleteStaff);
router.patch("/edit/:id", adminAuth, editStaff);

export default router;
