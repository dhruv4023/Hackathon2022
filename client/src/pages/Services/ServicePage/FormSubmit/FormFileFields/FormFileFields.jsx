import React, { useState } from "react";
import { ImCheckmark } from "react-icons/im";
import { useDispatch } from "react-redux";
import { editService } from "../../../../../actions/service";
import SubDoc from "./SubDoc";

function FormFileFields({ adminUser, Sid, servN, currentUsersFormData }) {
  const arryNm = "LabelDocs";
  const dispatch = useDispatch();

  const [ReqFileField, setSetReqFileField] = useState();
  const addReqField = () => {
    if (ReqFileField) {
      dispatch(
        editService({
          id: Sid,
          serviceBody: { data: ReqFileField, operation: -1, arryNm: arryNm },
        })
      );
    }
    setSetReqFileField("");
  };
  const obj = currentUsersFormData;
  let formId = null;
  if (obj) {
    formId = obj["_id"];
  }
  const AllLableDocArray = [
    "select",
    "Aadhar Card",
    "Ration Card",
    "Election Card",
    "Leaving Certificate",
  ];
  const toRemove = new Set(servN?.LabelDocs);

  const LableDocArray = AllLableDocArray.filter((x) => !toRemove.has(x));
  // console.log(toRemove);

  return (
    <>
      <div className="SubmitedData_FormView">
        <div className="heading_txt_servisesPage">
          Upload Document Files :
          {adminUser && (
            <b className="add_btn_servicePage">
              <select onChange={(e) => setSetReqFileField(e.target.value)}>
                {LableDocArray.map((m) => {
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

        <SubDoc  Sid={Sid} adminUser={adminUser} servN={servN} currentUsersFormData={currentUsersFormData} fId={formId} />
      </div>
    </>
  );
}

export default FormFileFields;
