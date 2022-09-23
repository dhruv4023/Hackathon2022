import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comment from "../../../Components/Comments/Comment";
import SearchBar from "../../../Components/SearchFun/SearchBar";
import "./DoughtPage.css";

function DoubtPage() {
  const { fid } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  const commentsList = useSelector(
    (state) => state.commentReducer
  )?.data?.filter((q) => fid === q?.dataId);
  const doubtData = useSelector((s) => s.doubtReducer)?.data?.filter(
    (q) => q?._id === fid
  )[0];
  // console.log(searchQuery)
  // console.log(commentsList)

  const TitleArray = commentsList
    ?.filter((q) =>
      q?.commentBody.toUpperCase().includes(searchQuery.toUpperCase().trim())
    )
    .map((m) => m);
  // console.log(TitleArray)
  return (
    <div className="container_app1">
      <div className="container_app2">
        <div className="doubt_title_DoubtPage">{doubtData?.doubtBody}</div>
        <div className="searchBar_DoubtPage">
          <SearchBar
            TitleArray={TitleArray}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        {TitleArray ? (
          <>
            <Comment dataId={fid} commentsList={TitleArray} />
          </>
        ) : (
          <>
            <Comment dataId={fid} commentsList={commentsList} />
          </>
        )}
      </div>
    </div>
  );
}

export default DoubtPage;
