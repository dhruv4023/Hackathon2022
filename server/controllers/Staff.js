import Staff from "../models/Staff.js";
import mongoose from "mongoose";
import fs from "fs"
export const postStaff = async (req, res, next) => {
  // console.log("123")
  // console.log(req.file);
  if (req.file === undefined) {
    res
      .status(404)
      .json({ message: "Plz Upload a '.png' or '.jpje' image File Only" });
  } else {
    // const postStaffData = req.body;
    // // console.log(postStaffData)
    // const postStaff = new Staff(postStaffData);
    try {
      // console.log(req.file);
      // console.log(req.body);
      const staffFile = new Staff({
        picName: req.file.originalname,
        picPath: req.file.path,
        picType: req.file.mimetype,
        picSize: req.file.size,

        name: req.body.name,
        email: req.body.email,
        post: req.body.post,
      });
      await staffFile.save();
      res.status(200).json("Posted a Staff successfully");
    } catch (error) {
      console.log(error);
      res.status(400).json("could't post a Staff Details");
    }
  }
};

export const deleteStaff = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Staff unavailable...");
  }
  try {
    const pth = await Staff.findById(_id);
    fs.unlinkSync(pth.picPath);
    await Staff.findByIdAndRemove(_id);
    res.status(200).json({ message: "Staff Successfully deleted ..." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getStaff = async (req, res) => {
  try {
    const StaffsList = await Staff.find();
    res.status(200).json(StaffsList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const editStaff = async (req, res) => {
  const { id: _id } = req.params;
  const { StaffBody } = req.body;
  // console.log(_id, StaffBody)
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Staff unavailable...");
  }
  try {
    const updatedQuestion = await Staff.findByIdAndUpdate(_id, {
      $set: { StaffBody: StaffBody },
    });
    // console.log("hm")
    res.status(200).json(updatedQuestion);
  } catch (error) {
    // console.log("edi cmt")
    res.status(400).json("error");
  }
};
