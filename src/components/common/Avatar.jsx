import React from "react";

const Avatar = ({ image }) => {
  return (
    <div className="avatar-frame">
      <img src={image} className="avatar-frame-image" alt="avatar" />
    </div>
  );
};

export default Avatar;
