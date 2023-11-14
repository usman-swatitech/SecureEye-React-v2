import React from "react";
import { logoWithText } from "../Constant/images";
import { navlinks } from "../Constant/links";
import Avatar from "../Component/Common/Avatar";
import profileDp from "../assets/images/avatar.png";
import "./style.css";
const TestSidebar = () => {
  return (
    <div className="sidebar">
      <img
        src={logoWithText}
        alt="logo"
        className="sidebar_logo cursor-pointer"
      />
      <div className="links_main_wrapper">
        <div className="navigation">
          {navlinks.slice(0, 5).map((link, index) => (
            <div
              className="link"
              key={index}
              style={{
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
              //   onClick={() => {
              //     handleActive(index, link.layout);
              //   }}
            >
              <div className={link.isActive ? "line" : null}></div>
              <span className={link.isActive ? "icon_active" : "icon"}>
                {link.isActive ? link.activeIcon : link.nonActiveIcon}
              </span>
            </div>
          ))}
        </div>
        <div className="sidebar_last-row">
          <>
            {navlinks.slice(5, 6).map((link, index) => (
              <div
                className=""
                // onClick={() => {
                //   handleActive(index, link.layout);
                // }}
                key={index}
              >
                <div className={link.isActive ? "line" : null}></div>
                <span className={link.isActive ? "icon_active" : "icon"}>
                  {link.isActive ? link.activeIcon : link.nonActiveIcon}
                </span>
              </div>
            ))}
          </>
          <Avatar image={profileDp} />
        </div>
      </div>
    </div>
  );
};

export default TestSidebar;
