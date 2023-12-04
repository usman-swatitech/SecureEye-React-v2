import { useState, useEffect } from "react";
import { navlinks } from "../../Constant/sidbarLinks";
import { logoWithText } from "../../Constant/images";
import Avatar from "./Avatar";
import profileDp from "../../assets/images/avatar.png";
import { Store } from "../../ContextAPI/Context";
import { logoSvg } from "../../Constant/logo";
import { iconUpSvg } from "../../Constant/svgs";
import SidebarPopup from "../SidebarPopup";
const Sidebar = () => {
  const [width, setWidth] = useState(undefined);
  const [smallLogo, setSmallLogo] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (width > 960) {
      setSmallLogo(false);
    } else {
      setSmallLogo(true);
    }
  }, [width]);
  const { setCurrentLayout, isSmall } = Store();
  const [links, setLinks] = useState(navlinks);
  // const [activeIndex, setActiveIndex] = useState(0);
  const handleActive = (index, newLayout) => {
    // setActiveIndex(index);
    const updatedItems = links.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));
    setLinks(updatedItems);
    setCurrentLayout(newLayout);
  };
  return (
    <div className="sidebar">
      {smallLogo ? (
        <span
          className="d-flex justify-content-center cursor-pointer"
          onClick={() => handleActive(0, "HomeLayout")}
        >
          {logoSvg}
        </span>
      ) : (
        <img
          src={logoWithText}
          alt="logo"
          className="sidebar_logo cursor-pointer"
          onClick={() => handleActive(0, "HomeLayout")}
        />
      )}

      <div className="links_main_wrapper">
        <div className="navigation">
          {links.slice(0, 6).map((link, index) => (
            <div
              className="nav_link"
              key={index}
              onClick={() => {
                handleActive(index, link.layout);
              }}
            >
              <div className={link.isActive ? "line" : null}></div>
              <div
                className={`${
                  link.isActive ? "active_nav_items" : "normal_nav_item"
                }`}
              >
                <span className={link.isActive ? "icon_active" : "icon"}>
                  {link.isActive ? link.activeIcon : link.nonActiveIcon}
                </span>
                {isSmall ? null : (
                  <span className="nav_label">{link.label}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="sidebar_last_row d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-1">
            <Avatar image={profileDp} />
            {isSmall ? null : <h4 className="username">John Doe</h4>}
          </div>
          {isSmall ? null : <span className="icon_up">{iconUpSvg}</span>}
          {/* <SidebarPopup /> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// <div
// className={`link ${
//   link.isActive ? "link_active" : "normal_link"
// }`}
// key={index}
// onClick={() => {
//   handleActive(index, link.layout);
// }}
// >
// <div className={link.isActive ? "line" : null}></div>
// <span className={link.isActive ? "icon_active" : "icon"}>
//   {link.isActive ? link.activeIcon : link.nonActiveIcon}
// </span>
// <span className="nav_label">{link.label}</span>
// </div>
