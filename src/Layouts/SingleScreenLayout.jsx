import React from "react";
import video from "../assets/mp4/test.mp4";
import Table from "../Component/Common/Table";
import frame from "../Component/frames/frame.png";
import { singleScreenTableHeading } from "../Constant/table";
const SingleScreenLayout = () => {
  return (
    <section className="single_screen_view">
      <div className="scrren_cctv_sty">
        <div className="single_camera_frame cards_layout">
          <img src={frame} al="frame" className="single_camera_frame" />
          <div className="frame_inner">
            <label className="text-white ms-3 pb-1">CAMERA 01</label>
            <video
              autoPlay
              loop
              muted
              className="w-100"
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src={video} />
            </video>
          </div>
        </div>
      </div>
      <label className="EmployeeInformation">Employee Information</label>
      <div className="scrren_cctv_tabel_sty scrollbar_style">
        <Table heading={singleScreenTableHeading} />
      </div>
    </section>
  );
};

export default SingleScreenLayout;
