import React from "react";
import { useState } from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { useDispatch } from "react-redux";
import { editService } from "../../../../../actions/service";
import { editSubmitForm } from "../../../../../actions/submitform";
import DocsView from "../../FormView/DocsView";
import FileField from "./FileField";
import "./FormFileFields.css";
function SubDoc({ currentUsersFormData, adminUser, servN, fId, Sid }) {
  const uploadedDocsObj = currentUsersFormData?.docFilePic;
  const uploadedDocArr = uploadedDocsObj?.filter((q) => q).map((m) => m.titleP);
  const labelDocArr = servN?.LabelDocs;
  // console.log(labelDocArr)
  const [uploading, setUploading] = useState(0);
  const [aadharCard, setAadharCard] = useState("");
  const [Rationcard, setRationcard] = useState("");
  const [EleCard, setEleCard] = useState("");
  const [lcCerti, setLcCerti] = useState("");
  const [FathersLc, setFathersLc] = useState("");
  const [birthCerti, setBirthCerti] = useState("");
  const [passportSizePic, setPassportSizePic] = useState("");
  const singleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setUploading(percentage);
      if (percentage === 100) {
        setTimeout(function () {}, 3000);
      }
    },
  };
  const dispatch = useDispatch();
  const lableSetArr = {
    "Aadhar Card": setAadharCard,
    "Ration Card": setRationcard,
    "Election Card": setEleCard,
    "Leaving Certificate": setLcCerti,
    "Birth Certificate": setBirthCerti,
    "Father's Leaving Certificate": setFathersLc,
    "Passport Size Photo": setPassportSizePic,
  };
  // console.log(uploadedDocArr, uploadedDocsObj);
  // console.log(uploadedDocArr);
  const constraintOnFile = (file, LabelName) => {
    // console.log(file.size);
    if (
      !file &&
      labelDocArr.includes(LabelName) &&
      !uploadedDocArr.includes(LabelName)
    ) {
      alert("Please Attach " + LabelName);
      return true;
    } else if (file.size > 500000) {
      alert("Please Attach " + LabelName + " less than size of 500KB");
      return true;
    } else {
      return false;
    }
  };
  const handleFileupload = () => {
    const docsNm = Object.keys(lableSetArr);
    const docs = [
      aadharCard,
      Rationcard,
      EleCard,
      lcCerti,
      birthCerti,
      FathersLc,
      passportSizePic,
    ];
    if (constraintOnFile(aadharCard, "Aadhar Card")) {
    } else if (constraintOnFile(Rationcard, "Ration Card")) {
    } else if (constraintOnFile(EleCard, "Election Card")) {
    } else if (constraintOnFile(lcCerti, "Leaving Certificate")) {
    } else if (constraintOnFile(birthCerti, "Birth Certificate")) {
    } else if (constraintOnFile(FathersLc, "Father's Leaving Certificate")) {
    } else if (constraintOnFile(passportSizePic, "Passport Size Photo")) {
    } else {
      for (let i = 0; i < docs.length; i++) {
        if (docs[i]) {
          const fileData = new FormData();
          fileData.append("id", fId);
          fileData.append("title", docsNm[i]);
          fileData.append("file", docs[i]);
          dispatch(
            editSubmitForm(
              {
                id: fId,
                fileData,
                singleFileOptions,
              },
              setUploading
            )
          );
        }
      }
    }
  };
  const handleDelLabel = (lableInput) => {
    dispatch(
      editService({
        id: Sid,
        serviceBody: {
          data: lableInput,
          operation: "del",
          arryNm: "LabelDocs",
        },
      })
    );
  };
  return (
    <>
      <div>
        {Object.keys(lableSetArr)
          ?.filter(
            (q) => labelDocArr?.includes(q) && !uploadedDocArr?.includes(q)
          )
          ?.map((m) => {
            return (
              <FileField
                key={m}
                adminUser={adminUser}
                handleDelLabel={handleDelLabel}
                lableInput={m}
                setFile_={lableSetArr[m]}
                uploading={uploading}
              />
            );
          })}
        <DocsView
          uploadedDocsObj={uploadedDocsObj}
          uploadedDocArr={uploadedDocArr}
        />
      </div>
      <div className="submitBtn_formSubmit">
        {fId && (
          <>
            {uploadedDocsObj.length !== labelDocArr.length ? (
              <>
                {uploading === 0 ? (
                  <>
                    <input
                      onClick={() => handleFileupload()}
                      className="ibtn_AddData"
                      value={"Upload"}
                      type="submit"
                    />
                  </>
                ) : (
                  <>
                  
                  </>
                )}
              </>
            ) : (
              <>
                <b className="Status_subDoc">
                  <b style={{ margin: "0 auto", padding: "0.2rem" }}>
                    Submited Successfully
                  </b>
                  <b style={{ margin: "0 auto", padding: "0.2rem" }}>
                    <ImCheckboxChecked size={22} />
                  </b>
                </b>
                {currentUsersFormData?.status ? (
                  <b className="Status_subDoc">
                    <b style={{ margin: "0 auto", padding: "0.2rem" }}>
                      Verified
                    </b>
                    <b style={{ margin: "0 auto", padding: "0.2rem" }}>
                      <ImCheckboxChecked size={22} />
                    </b>
                  </b>
                ) : (
                  <>
                    <b className="Status_subDoc">
                      <b style={{ margin: "0 auto", padding: "0.2rem" }}>
                        Pending to Verify
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
        )}
      </div>
    </>
  );
}

export default SubDoc;
