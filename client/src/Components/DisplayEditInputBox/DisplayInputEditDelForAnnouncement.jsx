import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deletehomedata, edithomedata } from "../../actions/homedata";
import "./DisplayEditInputBox.css";
import InnerFun from "./InnerFun";
function DisplayInputEditDelForAnnouncement({
  textTodisplay,
  adminUser,
  _id,
  arryNm,
}) {
  const dispatch = useDispatch();
  const [val, setVal] = useState("");
  const [edit, setEdit] = useState(false);
  const handleSave = (operation) => {
    setEdit(false);
    dispatch(
      edithomedata({
        id: _id,
        arryData: val,
      })
    );
  };
  const handleDelReqDoc = (delItem) => {
    const id = _id;
    dispatch(deletehomedata(id));
  };
  const handleEdit = () => {
    setEdit(true);
  };
  return (
    <InnerFun
      textTodisplay={textTodisplay}
      adminUser={adminUser}
      handleSave={handleSave}
      handleDelReqDoc={handleDelReqDoc}
      setVal={setVal}
      val={val}
      handleEdit={handleEdit}
      edit={edit}
    />
  );
}
export default DisplayInputEditDelForAnnouncement;
