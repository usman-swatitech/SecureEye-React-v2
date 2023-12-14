import React from "react";
import UserInfo from "../Component/Setting/UserInfo";
import Nav from "../Component/Setting/Nav";
import { Store } from "../ContextAPI/Context";
import {
  PersonalLayout,
  SecurityLayout,
  NotificationLayout,
} from "../SettingLayouts/index";
const SettingsLayout = () => {
  const { settingLayout } = Store();

  const renderLayout = () => {
    switch (settingLayout) {
      case "PersonalInformation":
        return <PersonalLayout />;
      case "Security":
        return <SecurityLayout />;
      case "Notifications":
        return <NotificationLayout />;
      default:
        return <PersonalLayout />;
    }
  };
  return (
    <main className="settingLayoutWrapper">
      <div className="leftCol">
        <UserInfo />
        <Nav />
      </div>
      <div className="w-100 px-1" style={{ padding: "15px 0" }}>
        {renderLayout()}
      </div>
    </main>
  );
};

export default SettingsLayout;
