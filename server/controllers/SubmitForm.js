import SubmitForm from "../models/SubmitForm.js";
import mongoose from "mongoose";
import fs from "fs";
export const postSubmitForm = async (req, res) => {
  const postSubmitFormData = req.body;
  const postSubmitForm = new SubmitForm(postSubmitFormData);
  try {
    await postSubmitForm.save();
    res.status(200).json("Posted a SubmitForm successfully");
  } catch (error) {
    console.log(error);
    res.status(400).json("could't post a SubmitForm");
  }
};

export const deleteSubmitForm = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("SubmitForm unavailable...");
  }
  try {
    const pth = await SubmitForm.findById(_id);
    fs.unlinkSync(pth.picPath);
    await SubmitForm.findByIdAndRemove(_id);
    res.status(200).json({ message: "SubmitForm Successfully deleted ..." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getSubmitForm = async (req, res) => {
  try {
    const SubmitFormsList = await SubmitForm.find();
    res.status(200).json(SubmitFormsList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const editSubmitForm = async (req, res) => {
  const { id: _id } = req.params;
  // console.log(req.file);
  const { title } = req.body;
  if (req.file === undefined) {
    res
      .status(404)
      .json({ message: "Plz Upload a '.png' or '.jpeg' image File Only" });
  } else {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("SubmitForm unavailable...");
    }
    // console.log(_id);
    try {
      // updateFormData("picTitle", title, _id, res);
      // updateFormData("picName", req.file.filename, _id, res);
      // updateFormData("picPath", req.file.path, _id, res);
      await SubmitForm.findByIdAndUpdate(_id, {
        $addToSet: { docFilePic: [{ titleP: title, pathP: req.file.path }] },
      });
      res.status(200).json("Files Uploaded !");
    } catch (error) {
      res.status(400).json("error");
    }
  }
};

// const updateFormData = async (arryNm, arrayData, _id, res) => {
//   console.log(arryNm, arrayData);
//   const updateForm = await SubmitForm.findByIdAndUpdate(_id, {
//     $addToSet: { [arryNm]: arrayData },
//   });
// };
