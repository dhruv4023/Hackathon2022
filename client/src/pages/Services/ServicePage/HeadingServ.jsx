import React from "react";

import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteService } from "../../../actions/service";
function HeadingServ({adminUser, servN, Sid}) {
    // console.log(serviceHeading)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDel = (id) => {
    if (window.confirm("Sure To Delete The Service Form ?")) {
      dispatch(deleteService(id));
      navigate("/services");
    }
  };
  return (
    <div className="heading_service">
      {servN?.ServiceName}
      {adminUser && (
        <BsFillTrashFill
          className="Del_servN"
          size={30}
          onClick={() => handleDel(Sid)}
        />
      )}
    </div>
  );
}

export default HeadingServ;
