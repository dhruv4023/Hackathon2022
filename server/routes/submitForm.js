import express from "express";

import {
  postSubmitForm,
  deleteSubmitForm,
  getSubmitForm,
  editSubmitForm,updateFormStatus,
} from "../controllers/SubmitForm.js";
import upload from "../helpers/filehelpers.js";

const router = express.Router();

// console.log(upload.array('files'))
router.post("/post", postSubmitForm);
router.get("/get", getSubmitForm);
router.delete("/delete/:id", deleteSubmitForm);
router.patch("/edit/:id", upload.single("file"), editSubmitForm);
router.patch("/updateStatus/:id",updateFormStatus);


export default router;
