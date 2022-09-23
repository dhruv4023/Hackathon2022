import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import "./searchList.css";
function SearchList({ ArrayList, setDoubtQ }) {
  // console.log(ArrayList);
  return (
    <>
      {ArrayList && (
        <div className="container_SearchList2">
          {ArrayList?.map((m) => {
            return (
              <p
                key={m?._id}
                className="titleItem"
                onClick={(e) => setDoubtQ(m)}
              >
                <FaSearch />{" "}
                <Link to={`/forum/${m?._id}`} className="doubt_forum">
                  {m?.doubtBody}
                </Link>
              </p>
            );
          })}
        </div>
      )}
    </>
  );
}

export default SearchList;
