import React, { useState } from "react";
import { ImCheckmark } from "react-icons/im";
import { useDispatch } from "react-redux";
import { editService } from "../../../../../actions/service";
import FormView from "../../FormView/FormView";
import FieldList from "./FieldList";

function FormDataFields({
  Sid,
  servN,
  adminUser,
  currentUsersFormData,
  currentUser,
}) {
  const arryNm = "LabelField";
  const dispatch = useDispatch();
  const [reqFieldLabel, setReqFieldLabel] = useState("");

  const addReqField = () => {
    if (reqFieldLabel) {
      dispatch(
        editService({
          id: Sid,
          serviceBody: { data: reqFieldLabel, operation: -1, arryNm: arryNm },
        })
      );
    }
    setReqFieldLabel("");
  };
  const AllLables = [
    "Select",
    "Name",
    "NameOfFather",
    "DOB",
    "AadharcardNo",
    "Address",
    "Taluka",
    "District",
    "State",
    "Village",
    "Pincode",
    "MobileNo",
    "Gender",
  ];

  const toRemove = new Set(servN?.LabelField);

  const LableArray = AllLables.filter((x) => !toRemove.has(x));
  // console.log(servN);
  return (
    <>
      <div className="headings_servisesPage">
        <div className="heading_txt_servisesPage">Form :</div>
        {adminUser && (
          <b className="add_btn_servicePage">
            <select onChange={(e) => setReqFieldLabel(e.target.value)}>
              {LableArray.map((m) => {
                return (
                  <option value={m} key={m}>
                    {m}
                  </option>
                );
              })}
            </select>
            <ImCheckmark onClick={() => addReqField()} />
          </b>
        )}
      </div>
      {currentUsersFormData ? (
        <>
          <FormView
            LableArray={servN?.LabelField}
            currentUsersFormData={currentUsersFormData}
          />
        </>
      ) : (
        <>
          <FieldList
            adminUser={adminUser}
            Sid={Sid}
            LableArray={servN?.LabelField}
            currentUser={currentUser}
          />
        </>
      )}
    </>
  );
}

export default FormDataFields;
