import React from "react";
import "./staffN.css";
import pic from "./DummyImg.png";
function StaffN() {
  return (
    <div className="cont_staffN">
      <div className="img_staffN">
        <img src={pic} className="img_tag" width={110} alt="" />
      </div>
      <div className="details_staffN">
        <div className="name_staffN">Name here</div>
        <div className="post_staffN">Post</div>
        <div className="email_staffN">abc@mail.com</div>
      </div>
    </div>
  );
}

export default StaffN;
