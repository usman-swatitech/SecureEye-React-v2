import React from "react";
import frame from "../assets/images/frame.png";
import Search from "./Common/Search";
import ActionBar from "./Common/ActionBar";
import Divider from "./Common/Divider";
import Sidebar from "../Component/Common/Sidebar";
import CameraLayout from "./Common/CameraLayout";
import Cards from "../Test/Cards";

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
            <Divider />
            <div className="cameras-layout">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
