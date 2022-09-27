import React from "react";
import { VscAdd } from "react-icons/vsc";
import { useSelector } from "react-redux";
import ServiceN from "./ServiceN";
import "./services.css";
function Services({ setAddserviceData }) {
  const serviceList = useSelector((s) => s.serviceReducer)?.data;
  // console.log(serviceList);

  const adminUser = useSelector((s) => s.authReducer)?.data;

  return (
    <div className="container_app1">
      <div className="container_app2">
        <div className="heading_service heding_App">
          Services
          {adminUser && (
            <div
              className="add_new_btn"
              onClick={() => setAddserviceData(true)}
            >
              <VscAdd size={40} />
            </div>
          )}
        </div>
        <div className="services_list">
          {serviceList?.map((m) => {
            return <ServiceN key={m?._id} NthService={m} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
