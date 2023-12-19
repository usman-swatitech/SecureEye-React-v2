import React,{ useState} from "react";
import Switch from "../muiSwitch/Switch";
import ButtonSm from "../Component/Common/ButtonSm";

const SecurityLayout = () => {
  const [switchStates, setSwitchStates] = useState({
    twoStepVerification: false,
    emailSetup: false,
    smsSetup: false,
  });
  const handleSwitchChange = (switchId) => {
    // Update the corresponding switch state based on the switch id
    setSwitchStates((prevSwitchStates) => ({
      ...prevSwitchStates,
      [switchId]: !prevSwitchStates[switchId],
    }));
  };
  console.log(switchStates);

  return (
    <div className="securityLayoutWrapper ms-3 me-3">
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
        <Switch id="twoStepVerification" onChange={handleSwitchChange}/>
      </div>
      {/* email setup */}
      <div className="options">
        <div className="d-flex flex-column p-0 m-0 meta">
          <h6 className="m-0 p-0 text-white font-bold">Email Setup</h6>
          <p className="text-secondary subTitle">
            Lorem ipsum dolor sit, amet consec
          </p>
        </div>
        <Switch id="emailSetup" onChange={handleSwitchChange}/>
      </div>
      {/* SMS*/}
      <div className="options ">
        <div className="d-flex flex-column p-0 m-0 ">
          <h6 className="m-0 p-0 text-white font-bold">SMS Setup</h6>
          <p className="text-secondary subTitle">
            Lorem ipsum dolor sit, amet consec
          </p>
        </div>
        <Switch id="smsSetup" onChange={handleSwitchChange}/>
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
