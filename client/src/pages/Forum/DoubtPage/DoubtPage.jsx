import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comment from "../../../Components/Comments/Comment";
import "./DoughtPage.css";

function DoubtPage() {
  const { fid } = useParams();
  const doubtData = useSelector((s) => s.doubtReducer)?.data?.filter(
    (q) => q?._id === fid
  )[0];
  return (
    <div className="container_app1">
      <div className="container_app2">
        {" "}
        <div className="doubt_title_DoubtPage">{doubtData?.doubtBody}</div>
        <Comment dataId={fid} />
      </div>
    </div>
  );
}

export default DoubtPage;
