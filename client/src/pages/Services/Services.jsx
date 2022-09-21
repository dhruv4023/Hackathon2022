import React from "react";
import ServiceN from "./ServiceN";
import "./services.css";
function Services() {
  return (
    <div className="container_app1">
      <div className="container_app2">
        <div className="heading_service">
          Services
          <div className="add_new_serv_btn">add new Service</div>
        </div>
        <div className="services_list">
          <ServiceN />
          <ServiceN />
          <ServiceN />
        </div>
      </div>
    </div>
  );
}

export default Services;
