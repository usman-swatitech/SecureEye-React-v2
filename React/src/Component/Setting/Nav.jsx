import React from "react";
import { Store } from "../../ContextAPI/Context";

const Nav = () => {
  const { settingNavLinks, updateSettingLayouts } = Store();

  return (
    <div className="settingsNav">
      {settingNavLinks.map((link, index) => (
        <div
          className="navLink"
          key={index}
          onClick={() => updateSettingLayouts(index, link.layout)}
        >
          <div className={`${link.isActive ? "iconActive" : "icon"}`}>
            {link.icon}
          </div>
          <div className="linkInnerWrapper">
            <h5 className="mainHeading p-0 m-0">{link.heading}</h5>
            <h6 className="subHeading m-0 p-0">{link.subHeading}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Nav;
