import React from "react";
import { screenFrame } from "../Constant/images";
import * as images from "../Constant/images";

const PersonalInformation = () => {
  return (
    <div
      className="personalInfoWrapper"
      style={{ backgroundImage: `url(${screenFrame})` }}
    >
      <div className="personalInfo">
        <div className="layoutTitle text-align-center text-white">
          <p className="text-white"> Personal Information</p>
        </div>
        <div className="w-100 h-100 d-flex flex-md-row flex-column position-relative formInputs">
          {/* the widths are just applied for testing purpose, change as per you requirements */}
          <div className="w-50 h-50">first col</div>
          <div className="w-50 h-50">sedond</div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
