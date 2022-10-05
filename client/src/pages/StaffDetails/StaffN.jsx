import React from "react";
import "./staffN.css";
import { BsFillTrashFill } from "react-icons/bs";
// import pic from "./DummyImg.png";
import { useDispatch } from "react-redux";
import { deleteStaff } from "../../actions/staff";
function StaffN({ adminUser, _id, _name, _email, _post, _pic }) {
  const dispatch = useDispatch();
  const handleDel = () => {
    dispatch(deleteStaff(_id));
  };
  return (
    <div className="cont_staffN">
      {adminUser && (
        <BsFillTrashFill
          className="Del_staffN"
          width={200}
          style={{ position: "relative" }}
          onClick={() => handleDel()}
        />
      )}
      <div className="img_staffN">
        <img
          src={`${process.env.REACT_APP_SERVER}/${_pic}`}
          className="img_tag"
          width={110}
          height={110}
          alt=""
        />
      </div>

      <address className="details_staffN">
        <div className="name_staffN">{_name}</div>
        <a href={`mailto:${_email}`} className="email_staffN">{_email}</a>
        <div className="post_staffN">{_post}</div>
      </address>
    </div>
  );
}

export default StaffN;
