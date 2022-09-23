import React from "react";
import ServiceN from "./ServiceN";
import "./services.css";
function Services({ setAddserviceData }) {
  return (
    <div className="container_app1">
      <div className="container_app2">
        <div className="heading_service heding_App">
          Services
          <div className="add_new_btn" onClick={() => setAddserviceData(true)}>
            add new Service
          </div>
        </div>
        <div className="services_list">
          <ServiceN />
          <ServiceN />
          <ServiceN />
          <ServiceN />
        </div>
      </div>
    </div>
  );
}

export default Services;
