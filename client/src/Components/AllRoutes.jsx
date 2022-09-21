import React from "react";

import { Routes, Route } from "react-router-dom";
import Forum from "../pages/Forum/Forum";
import Home from "../pages/Home/Home";
import ServicePage from "../pages/Services/ServicePage/ServicePage";
import Services from "../pages/Services/Services";
import StaffDetails from "../pages/StaffDetails/StaffDetails";
import AddData from "./AddData/AddData";

function AllRoutes() {
  return (
    <>
      <AddData />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/services"} element={<Services />} />
        <Route path={"/forum"} element={<Forum />} />
        <Route path={"/staffdetails"} element={<StaffDetails />} />
        <Route path={"/services/:Sid"} element={<ServicePage />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
