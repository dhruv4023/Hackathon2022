import React from "react";
import { ImCheckmark } from "react-icons/im";
import './AddInoutBox.css'
function AddInoutBox({placHold_txt, val, setVal,handleSave }) {
  return (
    <div className="AddInputCont">
      <input
        onChange={(e) => setVal(e.target.value)}
        className="ibox_DisplayEditInputBox"
        value={val}
        placeholder={placHold_txt}
        type="text"
      />
      <b className="Done_app" onClick={() => handleSave()}>
        <ImCheckmark size={20} />
      </b>
    </div>
  );
}

export default AddInoutBox;
