import SubmitForm from "../models/SubmitForm.js";
import mongoose from "mongoose";
import fs from "fs"
export const postSubmitForm = async (req, res) => {
    const postSubmitFormData = req.body;
    // console.log(postSubmitFormData)
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
  const { SubmitFormBody } = req.body;
  // console.log(_id, SubmitFormBody)
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("SubmitForm unavailable...");
  }
  try {
    const updatedQuestion = await SubmitForm.findByIdAndUpdate(_id, {
      $set: { SubmitFormBody: SubmitFormBody },
    });
    // console.log("hm")
    res.status(200).json(updatedQuestion);
  } catch (error) {
    // console.log("edi cmt")
    res.status(400).json("error");
  }
};
