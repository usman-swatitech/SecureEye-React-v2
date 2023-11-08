import React from "react";
import video from "../assets/mp4/test.mp4";
import Table from "../Component/Common/Table";
import frame from "../Component/frames/frame.png";
const SingleScreenLayout = () => {
  return (
    <section className="h-auto w-100 d-flex flex-column position-relative gap-2">
      <div className="single-camera-frame crads-layout">
        <img src={frame} al="frame" className="single-camera-frame" />
        <div className="frame-inner">
          <label className="text-white ms-3 pb-1">CAMERA 01</label>
          <video autoPlay loop muted className="w-100">
            <source src={video} />
          </video>
        </div>
      </div>
      <label
        style={{
          fontSize: "18px",
          fontWeight: "200",
          lineHeight: "22px",
          color: "var(--main-white-color)",
        }}
      >
        Employee Information
      </label>
      <div className="table-layout-2">
        <Table />
      </div>
    </section>
  );
};

export default SingleScreenLayout;
