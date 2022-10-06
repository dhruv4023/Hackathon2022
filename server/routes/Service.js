import express from "express";

import {
  postService,
  deleteService,
  getService,
  editService,
} from "../controllers/Service.js";

import auth from "../middlewares/auth.js";

import adminAuth from "../middlewares/adminAuth.js";

const router = express.Router();

router.post("/post", adminAuth, postService);
router.get("/get", getService);
router.delete("/delete/:id", adminAuth, deleteService);
router.patch("/edit/:id", adminAuth, editService);

export default router;
