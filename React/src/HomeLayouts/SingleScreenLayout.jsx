import React, { useRef, useState, useEffect } from "react";
import JSMpeg from "jsmpeg-player";
import { cameraData } from "../Constant/cameras";
import { Store } from "../ContextAPI/Context";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import * as images from "../Constant/images";
// import Timer from "../Component/Common/Timer";
import { cameraToolsSvg } from "../Constant/svgs";

const SingleScreenLayout = () => {
  const { singleScreenIdx } = Store();
  const cameraToolsViewRef = useRef(null);
  const [open, setOpen] = useState(true);

  const findCameraByName = (cameraName) => {
    return cameraData.find((camera) => camera.cameraName === cameraName);
  };
  

  const cameraSDetails = findCameraByName(singleScreenIdx);
  console.log(cameraSDetails);

  const handleToggleItems = () => {
    cameraToolsViewRef.current.classList.toggle("hideCameraToolsView");
    setOpen(!open);
  };

  // const camera = {
  //   name: 'Camera 1',
  //   url: 'ws://localhost:9999/',
  // };

  useEffect(() => {
    const containerId = "video-canvas";
    createVideoElement(containerId, cameraSDetails.url, cameraSDetails.name);
  }, [cameraSDetails.name, cameraSDetails.url]);

  const createVideoElement = (containerId, url, name) => {
    const container = document.getElementById(containerId);

    if (container) {
      const videoElement = document.createElement("div");
      videoElement.id = containerId;
      container.appendChild(videoElement);

      new JSMpeg.VideoElement(`#${containerId}`, url, {
        autoplay: true,
        loop: true,
        onPlay: () => console.log(`${name} video is playing`),
        onPause: () => console.log(`${name} video is paused`),
        onEnded: () => console.log(`${name} video has ended`),
        onStalled: () => console.log(`${name} video has stalled`),
        onError: (e) => console.error(`${name} video error:`, e),
      });
    }
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
            <div className="videoCanvaSty" id="video-canvas"></div>
          </div>
          <div className="cameraToolsViewWrapper">
            <div
              className={`cameraToolsView ${open ? "hideCameraToolsView" : ""}`}
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
                <KeyboardArrowUpIcon
                  className="arrowUpIcon"
                  onClick={handleToggleItems}
                />
              ) : (
                <KeyboardArrowDownIcon
                  className="arrowUpIcon"
                  onClick={handleToggleItems}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleScreenLayout;
