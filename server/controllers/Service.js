import Services from "../models/service.js";
import mongoose from "mongoose";
import { reqDocEditFun } from "./ServiceFun/ServFun.js";
export const postService = async (req, res) => {
  const postServicessData = req.body;
  console.log(postServicessData);
  const postServices = new Services(postServicessData);
  try {
    await postServices.save();
    res.status(200).json("Posted a Service successfully");
  } catch (error) {
    // console.log(error);
    res.status(400).json("could't post a Service");
  }
};

export const getService = async (req, res) => {
  try {
    const ServiceList = await Services.find();
    res.status(200).json(ServiceList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const editService = async (req, res) => {
  const { id: _id } = req.params;
  const { serviceBody } = req.body;
  console.log(_id, serviceBody);
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("service unavailable...");
  }

  try {
    reqDocEditFun(serviceBody.arryNm, serviceBody, _id, res);
  } catch (error) {
    // console.log("edi cmt");
    res.status(400).json("error");
  }
};

export const deleteService = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Services unavailable...");
  }
  try {
    await Services.findByIdAndRemove(_id);
    res.status(200).json({ message: "Services Successfully deleted ..." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
