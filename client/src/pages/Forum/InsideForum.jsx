import React from "react";
import {  useSelector } from "react-redux";
import "./insideForum.css";
import EditDElDoubt from "./EditDElDoubt";
function InsideForum({ currentUser }) {
  const doubtList = useSelector((s) => s.doubtReducer)?.data;
  return (
    <>
      {doubtList?.map((m) => {
        return (
          <>
            <div key={m?._id} className="Inside_comment_num_forum">
              <div className="comments_num_forum">
                <i>{m?.comments}</i>
                comments
              </div>
              <EditDElDoubt m={m} currentUser={currentUser} />
            </div>
          </>
        );
      })}
    </>
  );
}

export default InsideForum;
