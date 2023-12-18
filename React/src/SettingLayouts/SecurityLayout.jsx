import * as React from "react";
import Switch from "../mui/Switch";
import ButtonSm from "../Component/Common/ButtonSm";
const SecurityLayout = () => {
  return (
    <div className="securityLayoutWrapper">
      {/* two step verification */}
      <div className="options">
        <div className="d-flex flex-column p-0 m-0">
          <h6 className="m-0 p-0 text-white font-bold">
            Login Two step varification
          </h6>
          <p className="text-secondary subTitle">
            Lorem ipsum dolor sit, amet consec
          </p>
        </div>
        <Switch />
      </div>
      {/* email setup */}
      <div className="options">
        <div className="d-flex flex-column p-0 m-0 meta">
          <h6 className="m-0 p-0 text-white font-bold">Email Setup</h6>
          <p className="text-secondary subTitle">
            Lorem ipsum dolor sit, amet consec
          </p>
        </div>
        <Switch />
      </div>
      {/* SMS*/}
      <div className="options ">
        <div className="d-flex flex-column p-0 m-0 ">
          <h6 className="m-0 p-0 text-white font-bold">SMS Setup</h6>
          <p className="text-secondary subTitle">
            Lorem ipsum dolor sit, amet consec
          </p>
        </div>
        <Switch />
      </div>
      {/* button */}

      <div className="options">
        <div className="d-flex flex-column p-0 m-0 ">
          <h6 className="m-0 p-0 text-white font-bold">Password Change</h6>
          <p className="text-secondary subTitle">
            Lorem ipsum dolor sit, amet consec
          </p>
        </div>

        <ButtonSm name="Change Password" />
      </div>
    </div>
  );
};

export default SecurityLayout;
