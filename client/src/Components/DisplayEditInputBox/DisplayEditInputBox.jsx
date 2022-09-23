import React from "react";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import { ImCheckmark } from "react-icons/im";
import { useDispatch } from "react-redux";
import { editService } from "../../actions/service";
import "./DisplayEditInputBox.css";
function DisplayEditInputBox({ Sid, textTodisplay, adminUser }) {
  const dispatch = useDispatch();
  const [val, setVal] = useState("");

  const handleEdit = () => {
    setEdit(true);
  };
  const handleSave = (operation) => {
    setEdit(false);
    dispatch(editService({ id: Sid, serviceBody: { data: val, operation: operation } }));
  };
  const handleDelReqDoc = (delItem) => {
    dispatch(
      editService({
        id: Sid,
        serviceBody: { data: delItem, operation: "del" },
      })
    );
  };
  const [edit, setEdit] = useState(false);
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
          <b className="Done_app" onClick={() => handleSave(textTodisplay)}>
            <ImCheckmark size={20} />
          </b>
        </>
      ) : (
        <div className="text_DisplayEditInputBox">
          <li>{textTodisplay}</li>
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
                Edit <BiEdit />
              </b>
              <b
                onClick={() => handleDelReqDoc(textTodisplay)}
                className="Del_app"
              >
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
