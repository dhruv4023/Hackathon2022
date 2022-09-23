import Services from "../models/service.js";

export const postService = async (req, res) => {
  const postDoubtsData = req.body;
  // console.log(postDoubtsData)
  const postDoubt = new Services(postDoubtsData);
  try {
    await postDoubt.save();
    res.status(200).json("Posted a Service successfully");
  } catch (error) {
    console.log(error);
    res.status(400).json("could't post a Service");
  }
};

export const deleteService = async (req, res) => {};
export const getService = async (req, res) => {};
export const editService = async (req, res) => {};
