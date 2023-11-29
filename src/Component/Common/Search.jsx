import React, { useState } from "react";
import {
  searchComponentSearchSvg,
  searchComponentSearchBrightSvg,
} from "../../Constant/svgs";

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="input_div">
      <span className="search_icon">
        {isFocused ? searchComponentSearchBrightSvg : searchComponentSearchSvg}
      </span>
      <input
        type="text"
        placeholder="SEARCH HERE"
        className="search_input"
        autoComplete="off"
        name="search"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Search;
