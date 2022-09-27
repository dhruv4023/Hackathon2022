import React from "react";
import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { ImCheckmark } from "react-icons/im";
import "../../FormSubmit/FormSubmit.css";
function FileField({
  lableInput,
  setFile_,
  uploading,
  adminUser,
  handleDelLabel,
}) {
  return (
    <div className="InputField_cont_servicePage">
      <div className="label_FormSubmit">
        {lableInput}
        <>
          {adminUser && (
            <b onClick={() => handleDelLabel(lableInput)} className="Del_app">
              <BsFillTrashFill />
            </b>
          )}
        </>
      </div>
      {uploading !== 0 ? (
        <>
          {uploading < 99 ? (
            <>{uploading}% Done</>
          ) : (
            <>
              <ImCheckmark />
            </>
          )}
        </>
      ) : (
        <>
          <div className="inputTag_FormSubmit">
            :
            <input
              type={"file"}
              onChange={(e) => {
                setFile_(e.target.files[0]);
              }}
              required
              name={lableInput}
              className="input_formSubmit"
              placeholder={`Enter ${lableInput}`}
              multiple
            />
          </div>
        </>
      )}
    </div>
  );
}

export default FileField;
