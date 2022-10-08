import React from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
// import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateFormStatus } from "../../../../actions/submitform";
import DocsView from "../FormView/DocsView";
import FormView from "../FormView/FormView";
import emailjs from "@emailjs/browser";

function FormViewAdminSide() {
  const dispatch = useDispatch();
  const currentUser = useSelector((s) => s.currentUserReducer)?.result;

  const { sFId, Sid } = useParams();
  const SubmitedFormData = useSelector(
    (s) => s.submitFormReducer
  )?.data?.filter((q) => q?.ServiceId === Sid && q._id === sFId)[0];
  // console.log(SubmitedFormData);
  const LableFiedl = useSelector((s) => s.serviceReducer)
    ?.data?.filter((q) => q?._id === Sid)
    ?.map((m) => m)[0]?.LabelField;
  // console.log(sFId)
  const handleStatusUpdate = (status, picLbl) => {
    // console.log(status)
    if (status === 1) {
      if (window.confirm("do you want to set status as Verified !"))
        dispatch(updateFormStatus({ id: sFId, status, titleP: picLbl }));
    } else if (status === -1) {
      if (window.confirm("do you want to set documents is't valid !"))
        dispatch(updateFormStatus({ id: sFId, status, titleP: picLbl }));
    } else if (picLbl === undefined) {
      if (window.confirm("do you want to set status as Verified !")) {
        // emailjs
        //   .sendForm(
        //     "service_y1u4siu",
        //     "template_r9se9qi",
        //     "dhruv20345@gmail.com",
        //     "R0lpkcNWBDY0cvbQh"
        //   )
        //   .then(
        //     (result) => {
        //       console.log(result.text);
        //     },
        //     (error) => {
        //       console.log(error.text);
        //     }
        //   );
        // console.log("done!");
        dispatch(
          updateFormStatus({ id: sFId, status: "true", titleP: picLbl })
        );
      }
    }
  };
  // console.log(currentUser?.email , process.env.REACT_APP_ADMIN_ID )
  const uploadedDocsObj = SubmitedFormData?.docFilePic;
  // console.log(SubmitedFormData);
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
            <DocsView
              uploadedDocsObj={uploadedDocsObj}
              handleStatusUpdate={handleStatusUpdate}
            />
          </div>
          <>
            {currentUser?.email === process.env.REACT_APP_ADMIN_ID && (
              <>
                {SubmitedFormData?.status ? (
                  <>
                    {" "}
                    <b className="Status_subDoc">
                      <b style={{ margin: "0 auto", padding: "0.2rem" }}>
                        Verified
                      </b>
                      <b style={{ margin: "0 auto", padding: "0.2rem" }}>
                        <ImCheckboxChecked size={22} />
                      </b>
                    </b>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </>
            )}
          </>
          {/* {!SubmitedFormData?.status ? (
            <>
              {currentUser?.email === process.env.REACT_APP_ADMIN_ID ? (
                <>
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
                </>
              ) : (
                <>
                  <b
                    className="Status_subDoc"
                    style={{ cursor: "not-allowed" }}
                  >
                    <b style={{ margin: "0 auto", padding: "0.2rem" }}>
                      Pending verify
                    </b>
                    <b style={{ margin: "0 auto", padding: "0.2rem" }}>
                      <ImCheckboxUnchecked size={22} />
                    </b>
                  </b>
                </>
              )}
            </>
          ) : (
            <b className="Status_subDoc">
              <b style={{ margin: "0 auto", padding: "0.2rem" }}>Verified</b>
              <b style={{ margin: "0 auto", padding: "0.2rem" }}>
                <ImCheckboxChecked size={22} />
              </b>
            </b>
          )} */}
        </div>
      </div>
    </>
  );
}

export default FormViewAdminSide;
