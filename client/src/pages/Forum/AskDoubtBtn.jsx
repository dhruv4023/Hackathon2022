import React from "react";
import { useState } from "react";
import { ImCheckmark } from "react-icons/im";
import { useDispatch } from "react-redux";
import { postDoubt } from "../../actions/doubt";
import SearchList from "./SearchLst/SearchList";
function AskDoubtBtn({ currentUser, doubtList }) {
  const dispatch = useDispatch();
  const [doubtQ, setDoubtQ] = useState();
  // const ArrayList = ["abc", "xyz", "pqr"];
  const [searchList, setSearchList] = useState(false);

  const handleSubmitQ = () => {
    if (currentUser) {
      dispatch(
        postDoubt({
          userId: currentUser?._id,
          doubtBody: doubtQ,
          userAsked: currentUser?.name,
        })
      );
      alert("Your Question posted successfully !");
    } else {
      alert("Plz Login To Ask Your Doubt !");
    }
  };

  const ArrayList = doubtList
    ?.filter((q) => q?.doubtBody.toUpperCase().includes(doubtQ.toUpperCase()))
    .map((m) => m);

  return (
    <div className="ask_doubt_cont_forum">
      <input
        type="text"
        placeholder="Type Your Question here..."
        className="text_forum"
        onChange={(e) => setDoubtQ(e.target.value)}
        onClick={() => setSearchList(true)}
      />
      <ImCheckmark
        onClick={() => {
          handleSubmitQ();
          setSearchList(false);
        }}
        size={30}
        className="Done_forum"
      />
      {doubtQ && searchList && (
        <SearchList
          className="search"
          ArrayList={ArrayList}
        />
      )}
    </div>
  );
}

export default AskDoubtBtn;
