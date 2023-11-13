import React from "react";

const Avatar = ({ image }) => {
  return (
    <div className="avatar_frame">
      <img src={image} className="avatar_frame_image" alt="avatar" />
    </div>
  );
};

export default Avatar;
