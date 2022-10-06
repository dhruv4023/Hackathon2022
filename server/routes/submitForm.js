import express from "express";

import {
  postSubmitForm,
  deleteSubmitForm,
  getSubmitForm,
  editSubmitForm,updateFormStatus,
} from "../controllers/SubmitForm.js";
import upload from "../helpers/filehelpers.js";
import adminAuth from "../middlewares/adminAuth.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

// console.log(upload.array('files'))
router.post("/post",auth, postSubmitForm);
router.get("/get",auth, getSubmitForm);
router.delete("/delete/:id", deleteSubmitForm);
router.patch("/edit/:id", upload.single("file"), editSubmitForm);
router.patch("/updateStatus/:id",adminAuth, updateFormStatus);


export default router;
