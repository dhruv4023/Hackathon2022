import React from "react";
import StaffN from "./StaffN";
import "./staffDetails.css";
import { getAllStaffDetails } from "../../actions/staff";
import { useSelector } from "react-redux";
function StaffDetails({ setStaffAddData }) {
  const staffDetails = useSelector((s) => s.staffReducer)?.data;
  // console.log(staffDetails)
  return (
    <div className="container_app1">
      <div className="container_app2">
        <div className="heding_App">
          Staff Details
          <div className="add_new_btn" onClick={() => setStaffAddData(true)}>
            Add Staff Service
          </div>
        </div>

        <div className="staff_container">
          {staffDetails?.map((m) => {
            return (
              <StaffN
                key={m?._d}
                _pic={m?.picPath}
                _id={m?._id}
                _name={m?.name}
                _email={m?.email}
                _post={m?.post}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StaffDetails;
