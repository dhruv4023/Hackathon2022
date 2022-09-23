
import React from "react";
import InsideForum from "./InsideForum";

import "./forum.css";
import AskDoubtBtn from "./AskDoubtBtn";
import { useSelector } from "react-redux";

function Forum() {
  const currentUser = useSelector((s) => s.currentUserReducer)?.result;
  return (
    <div className="container_app1">
      <div className="container_app2">
        <div className="heding_App">
          <div className="title_Forum">Forum To solve Your Doubts</div>
        </div>
        <div className="doubts_list_container_forum">
          <AskDoubtBtn currentUser={currentUser} />
          <div className="list_forum">
            <InsideForum currentUser={currentUser} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forum;
