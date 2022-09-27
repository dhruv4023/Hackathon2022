import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editService } from "../../../../../actions/service";
import { editSubmitForm } from "../../../../../actions/submitform";
import DocsView from "../../FormView/DocsView";
import FileField from "./FileField";

function SubDoc({ currentUsersFormData, adminUser, servN, fId, Sid }) {
  const [uploading, setUploading] = useState(0);
  const [aadharCard, setAadharCard] = useState();
  const [Rationcard, setRationcard] = useState();
  const [EleCard, setEleCard] = useState();
  const [lcCerti, setLcCerti] = useState();
  const labelDocArr = servN?.LabelDocs;
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
  };
  const handleFileupload = () => {
    const docsNm = Object.keys(lableSetArr);
    const docs = [aadharCard, Rationcard, EleCard, lcCerti];
    if (!aadharCard && labelDocArr.includes("Aadhar Card")) {
      alert("Plz Attach Aadhar Card");
    } else if (!Rationcard && labelDocArr.includes("Ration Card")) {
      alert("Plz Attach Ration Card");
    } else if (!EleCard && labelDocArr.includes("Election Card")) {
      alert("Plz Attach Election Card");
    } else if (!lcCerti && labelDocArr.includes("Leaving Certificate")) {
      alert("Plz Attach Leaving Certificate");
    } else {
      for (let i = 0; i < docs.length; i++) {
        if (docs[i]) {
          const fileData = new FormData();
          fileData.append("title", docsNm[i]);
          fileData.append("file", docs[i]);
          dispatch(
            editSubmitForm({
              id: fId,
              fileData,
              singleFileOptions,
            })
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
  const uploadedDocsObj = currentUsersFormData?.docFilePic;
  const uploadedDocArr = uploadedDocsObj?.filter((q) => q).map((m) => m.titleP);
  // console.log();
  return (
    <>
      <>
        {Object.keys(lableSetArr)
          ?.filter(
            (q) => labelDocArr?.includes(q) && !uploadedDocArr?.includes(q)
          )
          ?.map((m) => {
            return (
              <>
                <FileField
                  key={m}
                  adminUser={adminUser}
                  handleDelLabel={handleDelLabel}
                  lableInput={m}
                  setFile_={lableSetArr[m]}
                  uploading={uploading}
                />
              </>
            );
          })}
      </>
      {fId && (
        <>
          {uploadedDocsObj.length !== labelDocArr.length && (
            <div className="submitBtn_formSubmit">
              <input
                onClick={() => handleFileupload()}
                className="ibtn_AddData"
                value={"Upload"}
                type="submit"
              />
            </div>
          )}
        </>
      )}
      <DocsView uploadedDocsObj={uploadedDocsObj} uploadedDocArr={uploadedDocArr}/>
    </>
  );
}

export default SubDoc;
