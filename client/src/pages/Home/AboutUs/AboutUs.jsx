import React from "react";
import "./AboutUs.css";
function AboutUs() {
  return (
    <>
      <div className="AboutUs_Cont">
        <div className="heding_App">About Us</div>
        <div className="details_AboutUs">
          <div className="address_aboutus">
            <div className="title_aboutus">address</div>
            <b className="data_aboutus">
              : Sardar Patel Panchayat Bhavan, Palanpur , Banaskantha - 385001
            </b>
          </div>
          <a href="fax:02742252063" className="address_aboutus">
            <div className="title_aboutus">Fax</div>
            <b className="data_aboutus">: 02742252063</b>
          </a>
          <a href="tel:02742254060" className="address_aboutus">
            <div className="title_aboutus">Phone</div>
            <b className="data_aboutus">: 02742254060</b>
          </a>
          <a
            href="mailto:ddo-ban[at]gujarat[dot]gov[dot]in"
            className="address_aboutus"
          >
            <div className="title_aboutus">Email</div>
            <b className="data_aboutus">: ddo-ban[at]gujarat[dot]gov[dot]in</b>
          </a>
        </div>

        <div
          id="map-container-google-1"
          className="z-depth-1-half map-container"
          >
          <iframe
            src={"https://maps.google.com/maps?q=palanpur&t=&z=13&ie=UTF8&iwloc=&output=embed"}
            frameborder="0"
            style={{border:"0"}}
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
