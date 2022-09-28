import doubt from "../models/doubts.js";
import mongoose from "mongoose";
import Comment from "../models/Comments.js";

export const postdoubt = async (req, res) => {
  const postDoubtsData = req.body;
  // console.log(postDoubtsData)
  const postDoubt = new doubt(postDoubtsData);
  try {
    await postDoubt.save();
    res.status(200).json("Posted a doubt successfully");
  } catch (error) {
    // console.log(error);
    res.status(400).json("could't post a doubt");
  }
};

export const deletedoubt = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("doubt unavailable...");
  }
  try {
    await doubt.findByIdAndRemove(_id);
    await Comment.deleteMany({ dataId: _id });
    // console.log("hello")
    res.status(200).json({ message: "doubt Successfully deleted ..." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getdoubt = async (req, res) => {
  try {
    const doubtsList = await doubt.find();
    res.status(200).json(doubtsList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const editdoubt = async (req, res) => {
  const { id: _id } = req.params;
  const { doubtBody } = req.body;
  // console.log(_id, doubtBody)
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("doubt unavailable...");
  }
  try {
    const updatedQuestion = await doubt.findByIdAndUpdate(_id, {
      $set: { doubtBody: doubtBody },
    });
    // console.log("hm")
    res.status(200).json(updatedQuestion);
  } catch (error) {
    // console.log("edi cmt")
    res.status(400).json("error");
  }
};
