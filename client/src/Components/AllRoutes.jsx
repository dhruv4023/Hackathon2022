import React from "react";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import DoubtPage from "../pages/Forum/DoubtPage/DoubtPage";
import Forum from "../pages/Forum/Forum";
import Home from "../pages/Home/Home";
import FormViewAdminSide from "../pages/Services/ServicePage/FormViewAdminSide/FormViewAdminSide";
import ServicePage from "../pages/Services/ServicePage/ServicePage";
import Services from "../pages/Services/Services";
import StaffDetails from "../pages/StaffDetails/StaffDetails";
import { Z } from "../z/Z";
import AddData from "./AddData/AddData";

function AllRoutes() {
  const [AddserviceData, setAddserviceData] = useState(false);
  const [staffAddData, setStaffAddData] = useState(false);
  return (
    <>
      <AddData
        AddserviceData={AddserviceData}
        setAddserviceData={setAddserviceData}
        staffAddData={staffAddData}
        setStaffAddData={setStaffAddData}
      />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route
          path={"/services"}
          element={<Services setAddserviceData={setAddserviceData} />}
        />
        <Route path={"/forum"} element={<Forum />} />
        <Route
          path={"/staffdetails"}
          element={<StaffDetails setStaffAddData={setStaffAddData} />}
        />
        <Route path={"/services/:Sid"} element={<ServicePage />} />
        <Route path={"/services/submitedForm/:sFId/:Sid"} element={<FormViewAdminSide />} />
        <Route path={"/forum/:fid"} element={<DoubtPage />} />
        <Route path={"/z"} element={<Z />} />
     
      </Routes>
    </>
  );
}

export default AllRoutes;
