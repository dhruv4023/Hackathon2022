import React, { useEffect } from "react";
import "./App.css";
import "./Components/TextAnimation.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./Components/AllRoutes";
import { getAllStaffDetails } from "./actions/staff";
import { useDispatch } from "react-redux";
import { getAllDoubt } from "./actions/doubt";
import { getAllcomments } from "./actions/comments";
import { getAllService } from "./actions/service";
import { getAllsubmitforms } from "./actions/submitform";
import { getAdminStatus } from "./actions/auth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStaffDetails());
    dispatch(getAllDoubt());
    dispatch(getAllcomments());
    dispatch(getAllService());
    dispatch(getAllsubmitforms());
    dispatch(getAdminStatus());
  }, [dispatch]);

  return (
    <Router className="App">
      <Navbar />
      <AllRoutes />
    </Router>
  );
}

export default App;
