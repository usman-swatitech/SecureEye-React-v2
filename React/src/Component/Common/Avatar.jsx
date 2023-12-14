import React from "react";
import { cameraSvg } from "../../Constant/svgs";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
const Avatar = ({ image, height, width, upload }) => {
  return (
    <div className="avatar_frame" style={{ height: height, width: width }}>
      <img src={image} className="avatar_frame_image" alt="avatar" />
      {upload === true ? (
        <div className="upload">
          {/* <span className="uploadCameraIcon">{cameraSvg}</span> */}
          <CameraAltIcon style={{ height: "10px", width: "10px" }} />
        </div>
      ) : null}
    </div>
  );
};

export default Avatar;
