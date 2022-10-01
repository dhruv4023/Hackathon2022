import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import spin from "../../../../../Components/Navbar/LoginPageBlure/spin.gif";
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
        <img src={spin} width={20} alt="Loading..." />
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
