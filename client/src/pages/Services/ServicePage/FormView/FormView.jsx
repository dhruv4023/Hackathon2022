import React from "react";
import SubDoc from "../SumitDoc/SubDoc";
import "./FormView.css";
function FormView({ currentUsersFormData }) {
  const obj = currentUsersFormData;
  const Arr = ["Aadhar Card", "Ration Card"];
  return (
    <>
      <div className="SubmitedData_FormView">
        {Object.keys(obj).map((k, i) => {
          return (
            <div key={i} className="InputField_cont_servicePage">
              <div className="label_FormSubmit">{k}</div>
              <div className="inputTag_FormSubmit">:{obj[k]}</div>
            </div>
          );
        })}
      </div>
      <div className="SubmitedData_FormView">
        <div className="heading_txt_servisesPage">Upload Document Files :</div>
        {obj["picPath"].length === 0 ? (
          <>
            <SubDoc fId={obj["_id"]} />
          </>
        ) : (
          <>
            {/* {obj["picPath"].map((m) => {
              return <>
              
              </>;
            })} */}
          </>
        )}
      </div>
    </>
  );
}

export default FormView;
