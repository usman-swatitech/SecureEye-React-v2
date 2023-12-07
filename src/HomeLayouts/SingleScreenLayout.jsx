import React, { useRef, useState } from "react";
import video from "../assets/mp4/test.mp4";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import Table from "../Component/Common/Table";
import * as images from "../Constant/images";
// import { singleScreenTableHeading } from "../Constant/table";
import Timer from "../Component/Common/Timer";
import { cameraToolsSvg } from "../Constant/svgs";

const SingleScreenLayout = () => {
  const cameraToolsViewRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleToggleItems = () => {
    cameraToolsViewRef.current.classList.toggle("hideCameraToolsView");
    setOpen(!open);
  };
  return (
    <section className="single_screen_view">
      <div className="scrren_cctv_sty">
        <div className="single_camera_frame cards_layout">
          <img
            src={images.screenFrame}
            alt="frame"
            className="single_camera_frame"
          />
          <div className="frame_inner">
            {/* <label className="text-white ms-3 pb-1">CAMERA 01</label> */}
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
          <div className="cameraToolsViewWrapper">
            <div
              className="cameraToolsView hideCameraToolsView"
              ref={cameraToolsViewRef}
            >
              {cameraToolsSvg.map((item, index) => (
                <span className="cameraTools" key={index}>
                  {item.svg}
                </span>
              ))}
            </div>

            <div className="cameraToolsViewButtonToggle">
              {open ? (
                <KeyboardArrowDownIcon
                  className="arrowUpIcon"
                  onClick={handleToggleItems}
                />
              ) : (
                <KeyboardArrowUpIcon
                  className="arrowUpIcon"
                  onClick={handleToggleItems}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <label className="EmployeeInformation">Activity Monitor</label>
      <div className="scrren_cctv_tabel_sty scrollbar_style">
        <Table heading={singleScreenTableHeading} />
      </div> */}
    </section>
  );
};

export default SingleScreenLayout;
