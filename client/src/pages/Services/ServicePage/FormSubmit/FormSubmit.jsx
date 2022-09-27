import React from "react";
import { useState } from "react";
import { ImCheckmark } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { editService } from "../../../../actions/service";
import AddInoutBox from "../../../../Components/DisplayEditInputBox/AddInoutBox";
import FormView from "../FormView/FormView";
import FieldList from "./FieldList";

import "./FormSubmit.css";
function FormSubmit({ Sid, servN, adminUser }) {
  const arryNm = "LabelField";
  const dispatch = useDispatch();
  const [reqFieldLabel, setReqFieldLabel] = useState("");

  const currentUser = useSelector((s) => s.currentUserReducer)?.result;
  const currentUsersFormData = useSelector(
    (s) => s.submitFormReducer
  )?.data?.filter((q) => q.Uid === currentUser?._id && Sid === q?.ServiceId)[0];

  const addReqField = () => {
    if (reqFieldLabel) {
      dispatch(
        editService({
          id: Sid,
          serviceBody: { data: reqFieldLabel, operation: -1, arryNm: arryNm },
        })
      );
    }else{
      console.log(8)
    }
    setReqFieldLabel("");
  };
  // console.log(servN?.LabelField);
  const AllLables = [
    "Select",
    "Name",
    "NameOfFather",
    "DOB",
    "AadharcardNo",
    "Address",
    "Taluka",
    "District",
    "County",
    "State",
    "Village",
    "Pincode",
    "MobileNo",
    "Gender",
  ];
  const toRemove = new Set(servN?.LabelField);

  const LableArray = AllLables.filter((x) => !toRemove.has(x));
  return (
    <div className="part_cont_servicePage">
      <div className="headings_servisesPage">
        <div className="heading_txt_servisesPage">Form :</div>
        {adminUser && (
          <b className="add_btn_servicePage">
            <select onChange={(e) => setReqFieldLabel(e.target.value)}>
              {LableArray.map((m) => {
                return (
                  <option  value={m} key={m}>
                    {m}
                  </option>
                );
              })}
            </select>
            <ImCheckmark onClick={()=>addReqField()}/>
          </b>
        )}
      </div>
      {currentUsersFormData ? (
        <>
          <FormView currentUsersFormData={currentUsersFormData} />
        </>
      ) : (
        <>
          <FieldList Sid={Sid} LableArray={servN?.LabelField} currentUser={currentUser} />
        </>
      )}
    </div>
  );
}

export default FormSubmit;
