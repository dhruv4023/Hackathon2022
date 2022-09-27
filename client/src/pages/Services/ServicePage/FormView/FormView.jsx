import React from "react";
import "./FormView.css";
function FormView({ currentUsersFormData, LableArray }) {
  const obj = currentUsersFormData;
  // console.log((obj));
  return (
    <>
      <div className="SubmitedData_FormView">
        {Object.keys(obj)
          ?.filter((q) => (LableArray.includes(q)))
          .map((k, i) => {
            return (
              <div key={i} className="InputField_cont_servicePage">
                <div className="label_FormSubmit">{k}</div>
                <div className="inputTag_FormSubmit">:{obj[k]}</div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default FormView;
