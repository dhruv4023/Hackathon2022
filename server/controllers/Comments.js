import Comment from "../models/Comments.js";
import mongoose from "mongoose";
import doubts from "../models/doubts.js";

export const postcomment = async (req, res) => {
  const postComentsData = req.body;

  const postComent = new Comment(postComentsData);
  try {
    await postComent.save();
    const doubt = await doubts.findById( postComentsData?.dataId );
    await doubts.findByIdAndUpdate(postComentsData?.dataId, {
      $set: { comments: doubt.comments + 1 },
    });
    res.status(200).json("Posted a Comment successfully");
  } catch (error) {
    // console.log(error);
    res.status(400).json("could't post a Comment");
  }
};

export const deletecomment = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("comment unavailable...");
  }
  try {
    const comm = await Comment.findById(_id);
    await Comment.findByIdAndRemove(_id);
    // console.log(comm?.dataId)
    const doubt = await doubts.findById(comm?.dataId);
    // console.log(doubt?.comments)
    await doubts.findByIdAndUpdate(comm?.dataId, {
      $set: { comments: doubt.comments - 1 },
    });
    res.status(200).json({ message: "Comment Successfully deleted ..." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getcomment = async (req, res) => {
  try {
    const commentsList = await Comment.find();
    res.status(200).json(commentsList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const editcomment = async (req, res) => {
  const { id: _id } = req.params;
  const { commentBody } = req.body;
  // console.log(_id, commentBody)
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Comment unavailable...");
  }
  try {
    const updatedQuestion = await Comment.findByIdAndUpdate(_id, {
      $set: { commentBody: commentBody },
    });
    // console.log("hm")
    res.status(200).json(updatedQuestion);
  } catch (error) {
    // console.log("edi cmt")
    res.status(400).json("error");
  }
};
