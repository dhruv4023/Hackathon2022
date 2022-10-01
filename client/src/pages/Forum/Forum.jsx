
import React from "react";
import InsideForum from "./InsideForum";

import "./forum.css";
import AskDoubtBtn from "./AskDoubtBtn";
import { useSelector } from "react-redux";

function Forum() {
  const currentUser = useSelector((s) => s?.currentUserReducer)?.result;
  const doubtList = useSelector((s) => s?.doubtReducer)?.data;
  return (
    <div className="container_app1">
      <div className="container_app2">
        <div className="heding_App">
          <div className="title_Forum">Forum To solve Your Doubts</div>
        </div>
        <div className="doubts_list_container_forum">
          <AskDoubtBtn doubtList={doubtList}  currentUser={currentUser} />
          <div className="list_forum">
            <InsideForum  doubtList={doubtList} currentUser={currentUser} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forum;
