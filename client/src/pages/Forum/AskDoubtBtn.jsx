import React from "react";
import { useState } from "react";
import { ImCheckmark } from "react-icons/im";
import { useDispatch } from "react-redux";
import { postDoubt } from "../../actions/doubt";
function AskDoubtBtn({ currentUser }) {
  const dispatch = useDispatch();
  const [doubtQ, setDoubtQ] = useState("");

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
    }else{
      alert("Plz Login To Ask Your Doubt !")
    }
  };
  return (
    <div className="ask_doubt_cont_forum">
      <input
        type="text"
        placeholder="Type Your Question here..."
        className="text_forum"
        onChange={(e) => setDoubtQ(e.target.value)}
      />
      <ImCheckmark
        onClick={() => handleSubmitQ()}
        size={30}
        className="Done_forum"
      />
    </div>
  );
}

export default AskDoubtBtn;
