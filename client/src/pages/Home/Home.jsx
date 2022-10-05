import React from "react";
import StaffDetails from "../StaffDetails/StaffDetails";
import AboutUs from "./AboutUs/AboutUs";
import Annoucement from "./Announcements/Annoucement";

import "./Home.css";
import SlidesHTml from "./SlidesHTml/SlidesHTml";
function Home() {
  return (
    <div className="container_app1">
      <div className="container_app2">
        <div className="home_cont">
          <SlidesHTml />
        </div>
        <div className="home_cont">
          <div className="Introduction">
            <StaffDetails/>
          </div>
          <Annoucement />
        </div>
        <AboutUs />
      </div>
    </div>
  );
}

export default Home;
