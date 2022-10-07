import React from "react";

import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { VscEdit } from "react-icons/vsc";
import { ImCheckmark } from "react-icons/im";
import { deleteDoubt, editDoubt } from "../../actions/doubt";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function EditDElDoubt({ m, currentUser }) {
  const dispatch = useDispatch();
  const [doubtQ, setDoubtQ] = useState(m?.doubtBody);
  const [edit, setEdit] = useState(false);
  const handleDel = (qid) => {
    dispatch(deleteDoubt(qid));
  };
  const handleSave = (qid) => {
    dispatch(editDoubt({ id: qid, doubtBody: doubtQ }));
  };
  const adminUser = useSelector((s) => s?.authReducer)?.data;

  return (
    <>
      {" "}
      {edit ? (
        <div className="doubt_forum">
          <input
            onChange={(e) => setDoubtQ(e.target.value)}
            className="ibox_DisplayEditInputBox"
            value={doubtQ}
            type="text"
          />
          <b className="Done_app" onClick={() => handleSave(m?._id)}>
            <ImCheckmark size={20} onClick={() => setEdit(false)} />
          </b>
        </div>
      ) : (
        <Link to={`/forum/${m?._id}`} className="doubt_forum">
          <>
            {String(m?.doubtBody).length < 80 ? (
              <>
              {(m?.doubtBody)}
              </>
            ) : (
              <>{String(m?.doubtBody).substring(0, 78)}...</>
            )}
          </>
        </Link>
      )}
      <div className="btns_insideForum">
        {(m?.userId === currentUser?._id || adminUser) && (
          <BsFillTrashFill
            onClick={() => handleDel(m?._id)}
            size={22}
            className={"del_Btn_app"}
          />
        )}
        {m?.userId === currentUser?._id && (
          <VscEdit
            onClick={() => setEdit(true)}
            size={22}
            className={"edit_Btn_app"}
          />
        )}
      </div>
    </>
  );
}

export default EditDElDoubt;
