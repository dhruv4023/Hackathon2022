import React from "react";
import AddServices from "../../pages/Services/AddServices";
import AddStaffData from "../../pages/StaffDetails/AddStaffData";
import "./AddData.css";
function AddData({
  staffAddData,
  setStaffAddData,
  AddserviceData,
  setAddserviceData,
}) {
  // console.log(AddserviceData)
  return (
    <>
      {staffAddData && <AddStaffData setStaffAddData={setStaffAddData} />}
      {AddserviceData && <AddServices setAddserviceData={setAddserviceData} />}
    </>
  );
}

export default AddData;
