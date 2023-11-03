import React from "react";
import frame from "../assets/images/frame.png";
import Sidebar from "./common/Sidebar";
const Test = () => {
  return (
    <div className="test-div" style={{ backgroundColor: "black" }}>
      <div className="innerWrapper">
        <img src={frame}></img>
        <div className="content">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Test;
