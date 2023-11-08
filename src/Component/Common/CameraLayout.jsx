import React, { useRef, useEffect } from "react";
import video from "../../assets/mp4/test.mp4";
const CameraLayout = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <div className="main-camera-wrapper">
      <h4>CAMERA 1</h4>
      <div className="camera-divider"></div>
      <div className="camera-src">
        <video utoplay="true" muted loop ref={videoRef}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default CameraLayout;
