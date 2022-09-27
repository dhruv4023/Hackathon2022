import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function InputField({
  lableInput,
  type = "text",
  val,
  setVal,
  mxlen = 100,
  mnlen = 3,
  mx,
  mn,
  req = false,
  handleDelLabel,
  labelFld,
}) {
  const adminUser = useSelector((s) => s.authReducer)?.data;

  return (
    <div className="InputField_cont_servicePage">
      <div className="label_FormSubmit">
        <>{lableInput}</>
        {adminUser && (
          <b onClick={() => handleDelLabel(labelFld)} className="Del_app">
            <BsFillTrashFill />
          </b>
        )}
      </div>
      <div className="inputTag_FormSubmit">
        :
        <input
          type={type}
          onChange={(e) => {
            setVal(e.target.value);
          }}
          required={req}
          name={lableInput}
          value={val}
          maxLength={mxlen}
          max={mx}
          min={mn}
          minLength={mnlen}
          className="input_formSubmit"
          placeholder={`Enter ${lableInput}`}
        />
      </div>
    </div>
  );
}

export default InputField;
