import React from "react";
import "./FormView.css";
import moment from "moment";
function FormView({ currentUsersFormData, LableArray }) {
  const obj = currentUsersFormData;
  return (
    <>
      <div className="SubmitedData_FormView">
        {Object.keys(obj)
          ?.filter((q) => LableArray?.includes(q))
          .map((k, i) => {
            return (
              <div key={i} className="InputField_cont_servicePage">
                <div className="label_FormSubmit">{k}</div>
                {k === "DOB" ? (
                  <>
                    <div className="inputTag_FormSubmit">
                      :{moment(obj[k]).format("DD/MM/YYYY")}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="inputTag_FormSubmit">:{obj[k]}</div>
                  </>
                )}
              </div>
            );
          })}
        <div className="InputField_cont_servicePage">
          <div className="label_FormSubmit">Form Submited on</div>
          <div className="inputTag_FormSubmit">
            :{moment(obj["ServicedOn"]).format("DD/MM/YYYY")}
          </div>
        </div>
        <div className="InputField_cont_servicePage">
          <div className="label_FormSubmit">Form Id</div>
          <div className="inputTag_FormSubmit">:{obj["_id"]}</div>
        </div>
      </div>
    </>
  );
}

export default FormView;
