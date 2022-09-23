import React from "react";
import "./staffN.css";
// import { BiEdit } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import pic from "./DummyImg.png";
import { useDispatch } from "react-redux";
import { deleteStaff } from "../../actions/staff";
function StaffN({ _id, _name, _email, _post, _pic }) {
  const dispatch = useDispatch();
  const handleDel = () => {
    dispatch(deleteStaff(_id));
  };
  return (
    <div className="cont_staffN">
      <BsFillTrashFill
        className="Del_staffN"
        width={200}
        style={{ position: "relative" }}
        onClick={() => handleDel()}
      />
      <div className="img_staffN">
        <img
          src={`${process.env.REACT_APP_SERVER}/${_pic}`}
          className="img_tag"
          width={110}
          height={110}
          alt=""
        />
       </div>

      <div className="details_staffN">
        <div className="name_staffN">{_name}</div>
        <div className="email_staffN">{_email}</div>
        <div className="post_staffN">{_post}</div>
      </div>
    </div>
  );
}

export default StaffN;
