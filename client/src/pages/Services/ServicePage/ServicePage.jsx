import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReqDoc from "./ReqDoc/ReqDoc";
import "./ServicePage.css";
import FormSubmit from "./FormSubmit/FormSubmit";
import HeadingServ from "./HeadingServ";
function ServicePage() {
  const adminUser = useSelector((s) => s.authReducer)?.data;
  const { Sid } = useParams();
  const servN = useSelector((s) => s.serviceReducer)?.data?.filter((q) => q?._id === Sid)?.map((m) => m)[0];
  return (
    <div className="container_app1">
      <div className="container_app2">
        <HeadingServ adminUser={adminUser} servN={servN} Sid={Sid} />
        <ReqDoc adminUser={adminUser} servN={servN} Sid={Sid} />
        <FormSubmit adminUser={adminUser} servN={servN} Sid={Sid} />
      </div>
    </div>
  );
}

export default ServicePage;
