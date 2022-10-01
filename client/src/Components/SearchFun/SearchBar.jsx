import React from "react";
import "./searchBar.css";
import "./searchBar.css";
import { ImSearch } from "react-icons/im";
function SearchBar({searchQuery, setSearchQuery }) {
  return (
    <>
      <div className="search_div">
        <div className="webView">
          <div className="search_div2">
            <input
              type="text"
              className="Search_Navbar"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              // onClick={() => setSearchList(true)}
            />
            <ImSearch
              size={30}
              // onClick={(e) => setSearchList(false)}
              className="searchIcon_Navbar"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
