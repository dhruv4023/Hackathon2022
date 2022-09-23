import React from "react";
import { Link } from "react-router-dom";
function ServiceN({NthService}) {
  return (
    <>
      <Link to={`/services/${NthService?._id}`} style={{textDecoration:"none"}}>
        <div className="cont_serviceN">{NthService?.ServiceName}</div>
      </Link>
    </>
  );
}

export default ServiceN;
