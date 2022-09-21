import React from "react";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import { MdDoneOutline } from "react-icons/md";
import "./DisplayEditInputBox.css";
function DisplayEditInputBox({ textTodisplay, adminUser }) {
  const [edit, setEdit] = useState(false);
  const [val, setVal] = useState(textTodisplay);
  const handleEdit = () => {
    setEdit(true);
  };
  const handleSave = () => {
    setEdit(false);
  };
  return (
    <div className="cont_DisplayEditInputBox">
      {edit ? (
        <>
          <input
            onChange={(e) => setVal(e.target.value)}
            className="ibox_DisplayEditInputBox"
            value={val}
            type="text"
          />
          <b className="Done_DisplayEditInputBox" onClick={() => handleSave()}>
            <MdDoneOutline />
          </b>
        </>
      ) : (
        <div className="text_DisplayEditInputBox">
          <div>{textTodisplay}</div>
          {adminUser && (
            <>
              <b
                className="Ebtn_DisplayEditInputBox"
                onClick={() => handleEdit()}
              >
                {" "}
                Edit <BiEdit />
              </b>
              <b className="Del_DisplayEditInputBox">
                {" "}
                Delete <BsFillTrashFill />
              </b>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default DisplayEditInputBox;
