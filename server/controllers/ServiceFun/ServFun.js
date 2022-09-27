import Services from "../../models/service.js";
export const reqDocEditFun = async (ArrayNm, serviceBody, _id, res) => {
  //   console.log(ArrayNm, _id);
  const operation = serviceBody.operation;
  if (operation === -1) {
    const updatedQuestion = await Services.findByIdAndUpdate(_id, {
      $addToSet: { [ArrayNm]: serviceBody.data },
    });
    res.status(200).json(updatedQuestion);
  } else if (operation === "del") {
    const updatedQuestion = await Services.findByIdAndUpdate(_id, {
      $pull: { [ArrayNm]: { $in: serviceBody.data } },
    });
    res.status(200).json(updatedQuestion);
  } else {
    if (ArrayNm === "ReqDoc") {
      reqDoc(serviceBody, _id, res, operation);
    } 
  }
};
const reqDoc = async (serviceBody, _id, res, operation) => {
  const updatedQuestion = await Services.findByIdAndUpdate(
    _id,
    {
      $set: { "ReqDoc.$[filter]": serviceBody.data },
    },
    { arrayFilters: [{ filter: operation }] }
  );
  res.status(200).json(updatedQuestion);
};