import React from "react";

import {  Routes, Route } from "react-router-dom";
import Forum from "../pages/Forum/Forum";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import StaffDetails from "../pages/StaffDetails/StaffDetails";

function AllRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/services"} element={<Services />} />
      <Route path={"/forum"} element={<Forum />} />
      <Route path={"/staffdetails"} element={<StaffDetails />} />
    </Routes>
  );
}

export default AllRoutes;
