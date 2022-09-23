import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ReqDoc from "./ReqDoc/ReqDoc";
import "./ServicePage.css";
import { BsFillTrashFill } from "react-icons/bs";
import { deleteService } from "../../../actions/service";
function ServicePage() {
  const adminUser = useSelector((s) => s.authReducer)?.data;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Sid } = useParams();
  const serviceList = useSelector((s) => s.serviceReducer)?.data;
  // const singleFileOptions = {
  //   onUploadProgress: (progressEvent) => {
  //     const { loaded, total } = progressEvent;
  //     const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
  //     if (percentage === 100) {
  //       setTimeout(function () {}, 3000);
  //     }
  //   },
  // };
  const s = serviceList?.filter((q) => q?._id === Sid)?.map((m) => m)[0];
  const handleDel = (id) => {
    if (window.confirm("Sure To Delete The Service Form ?")) {
      dispatch(deleteService(id));
      navigate("/services");
    }
  };
  return (
    <div className="container_app1">
      <div className="container_app2">
        <div className="heading_service">
          {s?.ServiceName}
          
          {adminUser && (
          <BsFillTrashFill
            className="Del_servN"
            size={30}
            onClick={() => handleDel(Sid)}
          />)}
        </div>
        <ReqDoc adminUser={adminUser} servN={s} Sid={Sid} />
      </div>
    </div>
  );
}

export default ServicePage;
