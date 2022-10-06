import mongoose from "mongoose";
import homeData from "../models/homePage.js";

export const postHomeData = async (req, res) => {
  const postHomeData = req.body;
  const postHome = new homeData(postHomeData);
  try {
    await postHome.save();
    res.status(200).json("Posted a Data successfully");
  } catch (error) {
    console.log(error);
    res.status(400).json("could't post a Data");
  }
};

export const deleteHomeData = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Data unavailable...");
  }
  try {
    await homeData.findByIdAndRemove(_id);
    res.status(200).json({ message: "Data Successfully deleted ..." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getHomeData = async (req, res) => {
  try {
    const HomeDatasList = await homeData.find();
    res.status(200).json(HomeDatasList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const editHomeData = async (req, res) => {
  const { id: _id } = req.params;
  const { arryData } = req.body;
  // console.log(_id,arryData)
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Data unavailable...");
  }
  try {
    const updatedHomeData = await homeData.findByIdAndUpdate(_id, {
      $set: { arryData: arryData },
    });
    res.status(200).json(updatedHomeData);
  } catch (error) {
    res.status(400).json("error");
  }
};
