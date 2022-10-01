import React from "react";

function DocsView({ uploadedDocsObj }) {
  return (
    <div className="SubmitedData_FormView">
      {(uploadedDocsObj)
        ?.map((m) => {
          return (
            <div key={m?.titleP} className="InputField_cont_servicePage">
              <div className="label_FormSubmit">{m?.titleP}</div>
              <i className="inputTag_FormSubmit">: <a target="_blank" href={`${process.env.REACT_APP_SERVER}/${m?.pathP}`}>Click To View</a> </i>
            </div>
          );
        })}
    </div>
  );
}

export default DocsView;
