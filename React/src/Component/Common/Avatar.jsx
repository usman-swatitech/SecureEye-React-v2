import React, { useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Avatar = (props) => {

  const [selectedImage, setSelectedImage] = useState(null);
  const { image, height, width, upload } = props;

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log("FileReader result:", reader.result);
        setSelectedImage(reader.result);
        console.log("Selected Image:", selectedImage);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleClick = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
    fileInput.addEventListener("change", handleFileChange);
  };

  console.log("Selected Image (outside):", selectedImage);

  return (
    <div className="avatar_frame" style={{ height: height, width: width }}>
      <img
        src={selectedImage || image}
        className="avatar_frame_image"
        alt="avatar"
      />
      <input
        type="file"
        id="fileInput"
        className="displayBlock"
        onChange={handleFileChange}
        accept=".png, .jpg, .jpeg"
      />
      {upload === true ? (
        <div className="upload" onClick={handleClick}>
          <CameraAltIcon className="cameraUpload"  />
        </div>
      ) : null
      }

    </div>
  );
};

export default Avatar;