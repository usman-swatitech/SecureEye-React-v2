import React from "react";
import frame from "../assets/images/frame.png";
import Sidebar from "./Common/Sidebar";
import Search from "./Common/Search";
import ActionBar from "./Common/ActionBar";
const Test = () => {
  return (
    <div className="test-div" style={{ backgroundColor: "rgb(0,3,10)" }}>
      <div className="innerWrapper">
        <img src={frame} alt="frame" />
        <div className="content">
          <Sidebar />
          <div className="section d-flex">
            <div>
              <Search />
            </div>

            <ActionBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
