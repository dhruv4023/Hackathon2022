import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editService } from "../../../../actions/service";
import AddInoutBox from "../../../../Components/DisplayEditInputBox/AddInoutBox";
import FieldList from "./FieldList";

import "./FormSubmit.css";
function FormSubmit({ servN, Sid, adminUser }) {
  const arryNm = "LabelField";
  const dispatch = useDispatch();
  const [reqFieldLabel, setReqDoc] = useState("");

  const addReqDoc = () => {
    if (reqFieldLabel) {
      dispatch(
        editService({
          id: Sid,
          serviceBody: { data: reqFieldLabel, operation: -1, arryNm: arryNm },
        })
      );
    }
    setReqDoc("");
  };
  const LableArray = [
    "Name",
    "Name of Father",
    "Age",
    "Aadharcard No",
    "Address",
    "Taluka",
    "District",
    "Pincode",
    "Gender",
  ];
  const [val, setVal] = useState({
    Name: "",
    NameOfFather: "",
    Age: "",
    AadharcardNo: "",
    Address: "",
    Taluka: "",
    District: "",
    Pincode: "",
    Gender: "",
  });
  return (
    <div className="part_cont_servicePage">
      <div className="headings_servisesPage">
        <div className="heading_txt_servisesPage">Form :</div>
        {adminUser && (
          <b className="add_btn_servicePage">
            <AddInoutBox
              placHold_txt={"Enter To add"}
              val={reqFieldLabel}
              setVal={setReqDoc}
              handleSave={addReqDoc}
            />
          </b>
        )}
      </div>
      <FieldList />
      {/* {LableArray.map((rd) => {
        return (
          <FieldList
            key={rd}
            lableInp={rd}
            setVal={setVal}
            arryNm={arryNm}
            Sid={Sid}
            adminUser={adminUser}
          />
        );
      })} */}
    </div>
  );
}

export default FormSubmit;
