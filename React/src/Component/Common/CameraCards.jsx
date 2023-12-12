import React, { useEffect } from "react";
import { Store } from "../../ContextAPI/Context";
import Timer from "./Timer";
import NormalFrame from "../../assets/images/layout4.png";
import DetectedFrame from "../../assets/images/detected.png";
import JSMpeg from 'jsmpeg-player';

const Cards = ({ camera }) => {
  const { setCurrentLayout,setSingleScreenIdx } = Store();
  
  const backgroundStyle = {
    backgroundImage: `url(${camera.status === "normal" ? NormalFrame : DetectedFrame})`,
  };

  useEffect(() => {
    const containerId = `${camera.cameraName.replace(/\s+/g, '-')}`;
    createVideoElement(containerId, camera.url, camera.cameraName);
  }, [camera.url, camera.cameraName]);

  const createVideoElement = (containerId, url, name) => {
    const container = document.getElementById(containerId);

    if (container) {
      const videoElement = document.createElement('div');
      videoElement.id = containerId;
      container.appendChild(videoElement);

      initializeVideoPlayer(`#${containerId}`, url, name);
    }
  };

  const initializeVideoPlayer = (elementSelector, url, name) => {
    new JSMpeg.VideoElement(elementSelector, url, {
      autoplay: true,
      loop: true,
      onPlay: () => console.log(`${name} video is playing`),
      onPause: () => console.log(`${name} video is paused`),
      onEnded: () => console.log(`${name} video has ended`),
      onStalled: () => console.log(`${name} video has stalled`),
      onError: (e) => console.error(`${name} video error:`, e),
    });
  };

  const handleSceneClick = () => {
    setSingleScreenIdx(camera.cameraName);
    setCurrentLayout("SingleScreenLayout");
  };

  return (
    <div
      className={`card camera_cards bg-transparent py-0.5 px-0 p-0 ${camera.status === "normal" ? "text-white" : "text-danger"}`}
      onClick={handleSceneClick}
      style={backgroundStyle}
    >
      <div className="card-body rounded-0 py-2 position-relative m-1">
        <p className="card-title p-0 m-0 text-sm">
          {camera.cameraName}
        </p>
        <video
          autoPlay
          loop
          muted
          className="card-img-top rounded-0 mt-1 cursor-pointer"
        ></video>
        <div className="videoCanvaSmall" id={`${camera.cameraName.replace(/\s+/g, '-')}`}></div>
        <Timer cameraStatus={camera.status} />
      </div>
    </div>
  );
};

export default Cards;
