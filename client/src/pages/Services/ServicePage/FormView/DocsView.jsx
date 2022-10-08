import React from "react";
import { ImCheckmark } from "react-icons/im";
import { CgClose } from "react-icons/cg";
import "./DocView.css";
import { useSelector } from "react-redux";
import { VscTrash } from "react-icons/vsc";
function DocsView({ uploadedDocsObj, handleStatusUpdate, handleDel }) {
  const adminUser = useSelector((s) => s.authReducer)?.data;
  return (
    <div className="SubmitedData_FormView">
      {uploadedDocsObj?.map((m) => {
        return (
          <div key={m?.titleP} className="InputField_cont_servicePage">
            <div className="label_FormSubmit">{m?.titleP}</div>
            <i className="inputTag_FormSubmit">
              :{" "}
              <a
                className="view_subDoc_docView"
                target="_blank"
                href={`${process.env.REACT_APP_SERVER}/${m?.pathP}`}
              >
                Click To View
              </a>{" "}
              {adminUser ? (
                <>
                  {m?.status === 0 ? (
                    <>
                      <div className="inptag_cros">
                        <b
                          size={20}
                          className={"wrongDoc_DocView"}
                          onClick={() => handleStatusUpdate(-1, m?.titleP)}
                        >
                          X
                        </b>
                      </div>
                      <div className="inptag_cros">
                        <ImCheckmark
                          className="okDOc_DocView"
                          onClick={() => handleStatusUpdate(1, m?.titleP)}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {m?.status === 1 ? (
                        <>
                          <div className="inptag_cros">
                            <ImCheckmark style={{ cursor: "not-allowed" }} />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="inptag_cros">
                            <CgClose
                              size={20}
                              style={{ cursor: "not-allowed" }}
                            />
                          </div>
                        </>
                      )}
                    </>
                  )}
                </>
              ) : (
                <>
                  {m?.status === -1 && (
                    <>
                      <VscTrash
                        size={22}
                        className="wrongDoc_DocView"
                        onClick={() => handleDel(m?.pathP)}
                      />
                      <i style={{ color: "red", fontSize: "small" }}>
                        <b>Plz Re-upload your document</b>
                      </i>
                    </>
                  )}
                </>
              )}
            </i>
          </div>
        );
      })}
    </div>
  );
}

export default DocsView;
