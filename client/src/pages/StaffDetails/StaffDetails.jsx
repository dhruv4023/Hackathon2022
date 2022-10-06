import React from "react";
import StaffN from "./StaffN";
import "./staffDetails.css";
import spin from "../../Components/Navbar/LoginPageBlure/spin.gif";

import { useSelector } from "react-redux";
function StaffDetails({ setStaffAddData }) {
  const staffDetails = useSelector((s) => s.staffReducer)?.data;
  const adminUser = useSelector((s) => s.authReducer)?.data;
  // console.log(adminUser,currentUser)

  return (
    <div className="container_app1">
      <div className="container_app2">
        <div className="heding_App">
          Staff details
          {adminUser && (
            <div className="add_new_btn" onClick={() => setStaffAddData(true)}>
              Add Staff Service
            </div>
          )}
        </div>

        <div className="staff_container">
          {staffDetails ? (
            <>
              {staffDetails?.map((m) => {
                return (
                  <StaffN
                    adminUser={adminUser}
                    key={m?._d}
                    _pic={m?.picPath}
                    _id={m?._id}
                    _name={m?.name}
                    _email={m?.email}
                    _post={m?.post}
                  />
                );
              })}
            </>
          ) : (
            <>
              {" "}
              <div className="loading_App">
                <div className="loading_App2">
                  <img src={spin} alt="Loading..." />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default StaffDetails;
