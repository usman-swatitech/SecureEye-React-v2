import React from "react";
import frame from "../assets/images/frame.png";
import Sidebar from "./Common/Sidebar";
const Test = () => {
  return (
    <div className="test-div" style={{ backgroundColor: "black" }}>
      <div className="innerWrapper">
        <img src={frame} alt="frame" />
        <div className="content">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Test;
