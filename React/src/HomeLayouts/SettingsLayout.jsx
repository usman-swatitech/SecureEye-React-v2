import React from "react";
import UserInfo from "../Component/Setting/UserInfo";
import Nav from "../Component/Setting/Nav";
import { Store } from "../ContextAPI/Context";
import { PersonalLayout,SecurityLayout,GeneralLayout,PrivacyPolicy,} from "../SettingLayouts/index";
import * as images from "../Constant/images";

const SettingsLayout = () => {
  const { settingLayout } = Store();
  // console.log(settingLayout);
  const renderLayout = () => {
    switch (settingLayout) {
      case "PersonalInformation":
        return <PersonalLayout />;
      case "Security":
        return <SecurityLayout />;
      case "General":
        return <GeneralLayout />;
      case "PrivacyPolicy":
        return <PrivacyPolicy />;
      default:
        return <GeneralLayout />;
    }
  };
  const layoutTitles = {
    General: "Organization Info",
    PersonalInformation: "Profile Details",
    Security:"Security Info",
    PrivacyPolicy: "Privacy Policy",
  };
  const labelContent = layoutTitles[settingLayout] || "Setting";
  return (
    <main className="settingLayoutWrapper">
      <div className="leftCol w-25">
        <UserInfo />
        <Nav />
      </div>
      <div className="w-75">
        <div
          className="personalInfoWrapper"
          style={{ backgroundImage: `url(${images.screenFrame})` }}
        >
          <div className="personalInfo">
            <div className="layoutTitle text-align-center text-white">
              <p className="text-white">{labelContent}</p>
            </div>
            {renderLayout()}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SettingsLayout;
