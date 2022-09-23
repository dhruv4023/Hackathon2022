import React from "react";
import { Link } from "react-router-dom";
function ServiceN() {
  return (
    <>
      <Link to={`/services/${1}`} style={{textDecoration:"none"}}>
        <div className="cont_serviceN">Income Certificate</div>
      </Link>
    </>
  );
}

export default ServiceN;
