import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayComments from "./DisplayComments.jsx";

// import { useParams } from "react-router-dom";
import { postComment } from "../../actions/comments";

import "./comment.css";
import { ImCheckmark } from "react-icons/im";

export default function Comment({ dataId, commentsList }) {
  const [comment, setComment] = useState("");
  const currentUser = useSelector((state) => state.currentUserReducer);
  // console.log(currentUser);
  // console.log(commentsList);

  const checkAuth = () => {
    if (currentUser === null) {
      alert("login or signup to post Your Comments");
    }
  };

  const dispatch = useDispatch();

  const handleSubmitComment = () => {
    if (!comment) {
      alert("type your comment");
    } else {
      dispatch(
        postComment({
          dataId: dataId,
          userId: currentUser?.result?._id,
          commentBody: comment,
          userCommented: currentUser?.result.name,
        })
      );
      setComment("");
    }
  };
  return (
    <>
      <div  onClick={checkAuth} className="commentSubForm">
        <input
          type="text"
          placeholder="add Comment... "
          onChange={(e) => setComment(e.target.value)}
          className="commentIBox"
          value={comment}
          disabled={currentUser == null}
        />
        <ImCheckmark
          onClick={() => handleSubmitComment()}
          disabled={currentUser == null}
          size={30}
          className="Done_Comment"
        />
      </div>
      <div className="displayComment_commentsPage">
        {commentsList
          // ?.filter((q) => dataId === q?.dataId)
          .reverse()
          .map((m) => (
            // console.log(m)
            <DisplayComments
              key={m?._id}
              cmtId={m._id}
              userId={m.userId}
              cmtBody={m.commentBody}
              cmtOn={m.commentOn}
              usercmt={m.userCommented}
            />
          ))}
      </div>
    </>
  );
}
/*
cmtId={m._id}
cmtBody={m.commentBody}
cmtOn={m.commentOn}
usercmt={m.userCommented}
*/
