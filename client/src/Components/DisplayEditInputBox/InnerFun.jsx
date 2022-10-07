import React from "react";

import { VscEdit } from "react-icons/vsc";
import { BsFillTrashFill } from "react-icons/bs";
import { ImCheckmark } from "react-icons/im";

function InnerFun({
  textTodisplay,
  adminUser,
  setVal,
  val,
  handleSave,
  handleDelReqDoc,
  handleEdit,
  edit,
}) {
  // console.log(adminUser);
  return (
    <div className="cont_DisplayEditInputBox">
      {edit ? (
        <>
          <textarea
            onChange={(e) => setVal(e.target.value)}
            className="ibox_DisplayEditInputBox"
            value={val}
            type="text"
            rows={3}
          />
          <b className="Done_app" onClick={() => handleSave(textTodisplay)}>
            <ImCheckmark size={20} />
          </b>
        </>
      ) : (
        <div className="text_DisplayEditInputBox animate_charcter">
          <div>{textTodisplay}</div>
          <div className="btns">
            {adminUser && (
              <>
                <b
                  className="Ebtn_app"
                  onClick={() => {
                    handleEdit();
                    setVal(textTodisplay);
                  }}
                >
                  {" "}
                  <VscEdit />
                </b>
                <b
                  onClick={() => handleDelReqDoc(textTodisplay)}
                  className="Del_app"
                >
                  {" "}
                  <BsFillTrashFill />
                </b>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default InnerFun;
