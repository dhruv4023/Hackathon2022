import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DocsView from "../FormView/DocsView";
import FormView from "../FormView/FormView";

function FormViewAdminSide() {
  const { sFId, Sid } = useParams();
  const SubmitedFormData = useSelector(
    (s) => s.submitFormReducer
  )?.data?.filter((q) => q?.ServiceId === Sid)[0];
  // console.log(SubmitedFormData);
  const LableFiedl = useSelector((s) => s.serviceReducer)
    ?.data?.filter((q) => q?._id === Sid)
    ?.map((m) => m)[0]?.LabelField;
  // console.log(LableFiedl);
  return (
    <>
      <div className="headings_servisesPage">
        <div className="heading_txt_servisesPage">Form :</div>
      </div>{" "}
      <div className="item_servicepage">
        <FormView
          currentUsersFormData={SubmitedFormData}
          LableArray={LableFiedl}
        />
        <DocsView uploadedDocsObj={SubmitedFormData?.docFilePic} />
      </div>
    </>
  );
}

export default FormViewAdminSide;
