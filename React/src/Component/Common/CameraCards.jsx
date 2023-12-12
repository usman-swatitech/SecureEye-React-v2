import React, { useEffect } from "react";
import { Store } from "../../ContextAPI/Context";
import Timer from "./Timer";
import * as images from '../../Constant/images';
import JSMpeg from 'jsmpeg-player';

const Cards = ({ camera }) => {
  const { setCurrentLayout, setSingleScreenIdx } = Store();

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
    <div className="allCameraView" onClick={handleSceneClick}>
      <img src={images.screenFrame} alt="" />
      <div className="singleCameraView">
        <label >{camera.cameraName}</label>
        <div className="cameraShowSty">
          <div className="videoCanvaSmall" id={`${camera.cameraName.replace(/\s+/g, '-')}`}></div>
          <Timer cameraStatus={camera.status} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
