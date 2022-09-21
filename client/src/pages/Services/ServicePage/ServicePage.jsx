import React from "react";
import { MdAdd } from "react-icons/md";
import DisplayEditInputBox from "../../../Components/DisplayEditInputBox/DisplayEditInputBox";
import "./ServicePage.css";
function ServicePage() {
  const reqDocument = [
    "Ration Card",
    "Electricity bill",
    "Water bill (not older than three months)",
    "Gas connection",
    "Bank Passbook",
    "Post Office Account Statement / Passbook",
    "Driving License",
    "Government Photo ID cards/service photo identity card issued by Public Sector Undertakings (PSU)",
  ];
  return (
    <div className="container_app1">
      <div className="container_app2">
        <div className="heading_service">Income Certificate</div>
        <div className="req_Document_servicePage">
          <div className="headings_servisesPage">
            <div className="heading_txt_servisesPage">Require Documents :</div>
            <b className="add_btn_servicePage">
              <MdAdd />
              Add{" "}
            </b>
          </div>
          {reqDocument?.map((rd) => {
            return (
              <div key={rd} className="item_servicepage">
                <DisplayEditInputBox textTodisplay={rd} adminUser={true} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
