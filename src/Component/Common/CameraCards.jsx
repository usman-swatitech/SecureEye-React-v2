import React from "react";
import video from "../../assets/mp4/test.mp4";
import { Store } from "../../ContextAPI/Context";
import Timer from "./Timer";
import NormalFrame from "../../assets/images/layout4.png";
import DetectedFrame from "../../assets/images/detected.png";
const Cards = ({ camera }) => {
  const { setCurrentLayout } = Store();
  const backgroundStyle = {
    backgroundImage:
      camera.status === "normal"
        ? `url(${NormalFrame})`
        : `url(${DetectedFrame})`,
  };

  return (
    <div
      className="card camera_cards bg-transparent py-0.5 px-0 p-0 "
      onClick={() => {
        setCurrentLayout("SingleScreenLayout");
      }}
      style={backgroundStyle}
    >
      <div className="card-body rounded-0 py-2 position-relative">
        <p
          className={`card-title p-0 m-0 text-sm ${
            camera.status === "normal" ? "text-white" : "text-danger"
          }`}
        >
          {camera.cameraName}
        </p>
        <video
          autoPlay
          loop
          muted
          className="card-img-top rounded-0 mt-1 cursor-pointer"
        >
          <source src={video} />
        </video>

        <Timer cameraStatus={camera.status} />
      </div>
    </div>
  );
};

export default Cards;
