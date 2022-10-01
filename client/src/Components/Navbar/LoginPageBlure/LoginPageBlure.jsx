import React from "react";
import "./LoginPageBlure.css";
import spin from './spin.gif'
function LoginPageBlure({blurPage}) {
  return (
    <>
      {blurPage && (
        <div className="LoginPageBlure_c">
          <div className="LoginPageBlure_c1">
            <img src={spin}/>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginPageBlure;
