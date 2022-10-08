import SubmitForm from "../models/submitForm.js";
import mongoose from "mongoose";
import fs from "fs";
export const postSubmitForm = async (req, res) => {
  const postSubmitFormData = req.body;
  const postSubmitForm = new SubmitForm(postSubmitFormData);
  try {
    await postSubmitForm.save();
    res.status(200).json("Posted a SubmitForm successfully");
  } catch (error) {
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
    await SubmitForm.findByIdAndRemove(_id);
    fs.unlinkSync(pth.picPath);
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
    try {
      await SubmitForm.findByIdAndUpdate(_id, {
        $addToSet: { docFilePic: [{ titleP: title, pathP: req.file.path }] },
      });
      res.status(200).json("Files Uploaded !");
    } catch (error) {
      res.status(400).json("error");
    }
  }
};
export const updateFormStatus = async (req, res) => {
  const { id: _id } = req.params;
  const { status, titleP } = req.body;
  // console.log(_id, status, titleP);

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("SubmitForm unavailable...");
  }
  try {
    if (status==="true") {
      // console.log("_id")
      const updateStatus = await SubmitForm.findByIdAndUpdate(_id, {
        $set: { status: true },
      });
      res.status(200).json(updateStatus);
    } else {
      const updateStatus = await SubmitForm.updateOne(
        {
          _id: _id,
          "docFilePic.titleP": titleP,
        },
        { $inc: { "docFilePic.$.status": status } }
      );
      res.status(200).json(updateStatus);
    }
  } catch (error) {
    res.status(400).json("error");
  }
};

export const delSubDoc = async (req, res) => {
  const { id: _id } = req.params;
  const { pathP } = req.body;
  // console.log(_id,pathP);
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("SubmitForm unavailable...");
  }
  try {
    const updateStatus = await SubmitForm.updateOne(
      {
        _id: _id,
      },
      { $pull: { docFilePic: { pathP: pathP } } }
    );
    fs.unlinkSync(pathP);
    res.status(200).json(updateStatus);
  } catch (error) {
    res.status(400).json("error");
  }
};

// {
//   $set: { "ReqDoc.$[filter]": serviceBody.data },
// },
