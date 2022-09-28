import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { FcGoogle } from "react-icons/fc";
import { BiLogOutCircle } from "react-icons/bi";
import { MdOutlineForum } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import "./Navbar.css";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
import logo from "./logo.png";
import { setCurrentUser } from "../../actions/currentUser";
export default function Navbar() {
  const dispatch = useDispatch();

  const currentUser = useSelector((s) => s.currentUserReducer)?.result;

  // console.log(currentUser);
  const [AuthBtn, setAuthBtn] = useState(false);
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GAPI,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (response) => {
    const Email = response?.profileObj.email;
    const name = response?.profileObj.name;
    // console.log(Email, name);
    dispatch(login({ email: Email, name: name }));
    // setLoginPage(false);
  };
  const onFailure = (response) => {
    console.log("FAILED", response);
  };
  const logTmp = () => {
    dispatch(login({ email: "abzxy50312@gmail.com", name: "abz" }));
    alert("Login Successfully");
  };
  const onLogoutSuccess = () => {
    dispatch(setCurrentUser());
    alert("Log out Succesfully");
  };

  return (
    <div className="container_Navbar2">
      <div className="container_Navbar">
        <div className="title_container">
          <Link to={"/"} className="title_container2">
            <img className="logo_navbar" src={logo} width={60} alt="" />
            <b className="title_navbar">Palanpur Taluka Panchayat</b>
          </Link>
          <div className="Auth_Conatiner_navbar">
            {currentUser ? (
              <>
                <div className="Chanel_logo_App">
                  <p
                    className="fstChar_logo_App"
                    onClick={() => onLogoutSuccess()}
                  >
                    <BiLogOutCircle size={50} />
                  </p>
                </div>
              </>
            ) : (
              <>
                <GoogleLogin
                  clientId={process.env.REACT_APP_GAPI}
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  render={(renderProps) => (
                    <>  <p
                        onClick={renderProps.onClick}
                        className="sign_in_Navbar"
                      >
                {/* <p onClick={logTmp} className="sign_in_Navbar"> */}
                  <FcGoogle size={50} />
                </p>
                </>
                  )}
                />
              </>
            )}
          </div>
        </div>
        <div className="Navigation_List_Navbar">
          <NavLink to={"/"} className="Item_Navbar">
            <AiOutlineHome />
          </NavLink>
          <NavLink to={"/services"} className="Item_Navbar">
            Services
          </NavLink>
          <NavLink to={"/forum"} className="Item_Navbar">
            <MdOutlineForum />
            Forum
          </NavLink>
          <NavLink to={"/staffdetails"} className="Item_Navbar">
            Staff Details
          </NavLink>
        </div>
      </div>
    </div>
  );
}
