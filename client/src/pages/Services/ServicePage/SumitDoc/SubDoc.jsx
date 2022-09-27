import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editSubmitForm } from "../../../../actions/submitform";
import FileField from "./FileField";

function SubDoc({ fId }) {
  const [uploading, setUploading] = useState(0);
  const [aadharCard, setAadharCard] = useState();
  const [Rationcard, setRationcard] = useState();
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
  const handleFileupload = () => {
    const docs = [aadharCard, Rationcard];
    if (!aadharCard) {
      alert("Plz Attach Aadhar Card");
    } else if (!Rationcard) {
      alert("Plz Attach Ration Card");
    } else {
      for (let i = 0; i < docs.length; i++) {
        const fileData = new FormData();
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
  };
  return (
    <>
      <FileField
        lableInput={"Aadhar Card"}
        setFile_={setAadharCard}
        uploading={uploading}
      />
      <FileField
        lableInput={"Ration Card"}
        setFile_={setRationcard}
        uploading={uploading}
      />
      <div className="submitBtn_formSubmit">
        <input
          onClick={() => handleFileupload()}
          className="ibtn_AddData"
          value={"Upload"}
          type="submit"
        />
      </div>
    </>
  );
}

export default SubDoc;
