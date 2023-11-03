import React from "react";
import { searchComponentSearchSvg } from "../../Constant/svgs";
const Search = () => {
  return (
    <div className="input-div">
      <span className="search-icon">{searchComponentSearchSvg}</span>
=======
      <span>{searchComponentSearchSvg}</span>
      <input
        type="text"
        placeholder="SEARCH HERE"
        className="search-input"
        name="search"
      />
    </div>
  );
};

export default Search;
