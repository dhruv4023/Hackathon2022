import React from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateFormStatus } from "../../../../actions/submitform";
import DocsView from "../FormView/DocsView";
import FormView from "../FormView/FormView";

function FormViewAdminSide() {
  const dispatch = useDispatch();

  const { sFId, Sid } = useParams();
  const SubmitedFormData = useSelector(
    (s) => s.submitFormReducer
  )?.data?.filter((q) => q?.ServiceId === Sid && q._id === sFId)[0];
  console.log(SubmitedFormData);
  const LableFiedl = useSelector((s) => s.serviceReducer)
    ?.data?.filter((q) => q?._id === Sid)
    ?.map((m) => m)[0]?.LabelField;
  const handleStatusUpdate = () => {
    if (window.confirm("do you want to set status as Verified !")) {
      const id = sFId;
      dispatch(updateFormStatus(id));
    }
  };
console.log(SubmitedFormData?.status)
  return (
    <>
      <div className="container_app1">
        <div className="container_app2">
          <div className="headings_servisesPage">
            <div className="heading_txt_servisesPage">Form :</div>
          </div>
          <div className="item_servicepage">
            <FormView
              currentUsersFormData={SubmitedFormData}
              LableArray={LableFiedl}
            />
          </div>
          <div className="headings_servisesPage">
            <div className="heading_txt_servisesPage">Documents :</div>
          </div>
          <div className="item_servicepage">
            <DocsView uploadedDocsObj={SubmitedFormData?.docFilePic} />
          </div>

          {!SubmitedFormData?.status ? (
            <b
              className="Status_subDoc"
              onClick={() => handleStatusUpdate()}
              style={{ cursor: "pointer" }}
            >
              <b style={{ margin: "0 auto", padding: "0.2rem" }}>
                Click To set Verified
              </b>
              <b style={{ margin: "0 auto", padding: "0.2rem" }}>
                <ImCheckboxUnchecked size={22} />
              </b>
            </b>
          ) : (
            <b className="Status_subDoc">
              <b style={{ margin: "0 auto", padding: "0.2rem" }}>Verified</b>
              <b style={{ margin: "0 auto", padding: "0.2rem" }}>
                <ImCheckboxChecked size={22} />
              </b>
            </b>
          )}
        </div>
      </div>
    </>
  );
}

export default FormViewAdminSide;
