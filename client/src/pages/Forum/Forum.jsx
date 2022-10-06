import React from "react";
import InsideForum from "./InsideForum";
import spin from "../../Components/Navbar/LoginPageBlure/spin.gif";

import "./forum.css";
import AskDoubtBtn from "./AskDoubtBtn";
import { useSelector } from "react-redux";

function Forum() {
  const currentUser = useSelector((s) => s?.currentUserReducer)?.result;
  const doubtList = useSelector((s) => s?.doubtReducer)?.data;

  // const doubtList = undefined;
  return (
    <div className="container_app1">
      <div className="container_app2">
        <div className="heding_App">
          <div className="title_Forum">Forum To solve Your Doubts</div>
        </div>
        <div className="doubts_list_container_forum">
          <AskDoubtBtn doubtList={doubtList} currentUser={currentUser} />
          <div className="list_forum">
            {doubtList ? (
              <>
                <InsideForum doubtList={doubtList} currentUser={currentUser} />
              </>
            ) : (
              <>
                <div className="loading_App">
                  <div className="loading_App2">
                    <img src={spin} alt="Loading..." />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forum;
