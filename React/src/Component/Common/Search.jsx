import React, { useState } from "react";
import {
  searchComponentSearchSvg,
  searchComponentSearchBrightSvg,
} from "../../Constant/svgs";
import { Store } from "../../ContextAPI/Context";

const Search = () => {

  const [isFocused, setIsFocused] = useState(false);

  const {isSmall} = Store();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`input_div ${isSmall ? "sm_input_div_width" : "input_div_width"}`}>
      
      <input
        type="text"
        placeholder="SEARCH HERE"
        className="search_input"
        autoComplete="off"
        name="search"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <span className="search_icon">
        {isFocused ? searchComponentSearchBrightSvg : searchComponentSearchSvg}
      </span>
    </div>
  );
};

export default Search;
