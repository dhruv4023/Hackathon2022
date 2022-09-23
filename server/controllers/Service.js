import Services from "../models/service.js";
import mongoose from "mongoose";
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
  // console.log(_id, serviceBody);
  const operation = serviceBody.operation;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("service unavailable...");
  }

  try {
    if (operation === -1) {
      const updatedQuestion = await Services.findByIdAndUpdate(_id, {
        $addToSet: { ReqDoc: serviceBody.data },
      });
      res.status(200).json(updatedQuestion);
    } else if (operation === "del") {
      // console.log(serviceBody.data,5)
      const updatedQuestion = await Services.findByIdAndUpdate(_id, {
        $pull: { ReqDoc: { $in: serviceBody.data } },
      });
      res.status(200).json(updatedQuestion);
    } else {
      const updatedQuestion = await Services.findByIdAndUpdate(
        _id,
        {
          $set: { "ReqDoc.$[filter]": serviceBody.data },
        },
        { arrayFilters: [{ filter: operation }] }
      );
      res.status(200).json(updatedQuestion);
    }
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
