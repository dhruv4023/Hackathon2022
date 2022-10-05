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
import { getAdminStatus, login } from "../../actions/auth";
import logo from "./logo.png";
import { setCurrentUser } from "../../actions/currentUser";
import LoginPageBlure from "./LoginPageBlure/LoginPageBlure";
export default function Navbar() {
  const dispatch = useDispatch();

  const currentUser = useSelector((s) => s.currentUserReducer)?.result;
  const [blurPage, setBlurPage] = useState(false);
  // console.log(currentUser);
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
    console.log(Email);
    setBlurPage(false);
  };
  const onFailure = (response) => {
    // console.log("FAILED", response);
    setBlurPage(false);
  };
  const logTmp = () => {
    dispatch(login({ email: "abzxy50312@gmail.com", name: "abz" }));
    alert("Login Successfully");
    setBlurPage(false);
  };
  const onLogoutSuccess = () => {
    dispatch(setCurrentUser("logout"));
    dispatch(getAdminStatus());
    alert("Log out Succesfully");
    setBlurPage(false);
  };

  return (
    <>
      {<LoginPageBlure blurPage={blurPage} />}
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
                  <p
                    className="sign_in_Navbar"
                    onClick={() => onLogoutSuccess()}
                  >
                    <BiLogOutCircle size={50} />
                  </p>
                </>
              ) : (
                <>
                  <GoogleLogin
                    clientId={process.env.REACT_APP_GAPI}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    render={(renderProps) => (
                      <>
                        {" "}
                        <p
                          onClick={renderProps.onClick}
                          className="sign_in_Navbar"
                        >
                          <FcGoogle
                            size={50}
                            onClick={() => setBlurPage(true)}
                          />
                        </p>
                      </>
                    )}
                  />
                </>
              )}
            </div>
            <p
              onClick={logTmp}
              className="sign_in_Navbar"
              style={{ border: "2px solid" }}
            >
              <FcGoogle size={50} onClick={() => setBlurPage(true)} />
              ADMIN (temporary)
            </p>
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
    </>
  );
}
