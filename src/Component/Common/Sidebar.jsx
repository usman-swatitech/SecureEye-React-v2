import { useState } from "react";
import { navlinks } from "../../Constant/sidbarLinks";
import { logoWithText } from "../../Constant/images";
import Avatar from "./Avatar";
import profileDp from "../../assets/images/avatar.png";
import { Store } from "../../ContextAPI/Context";
import { logoSvg } from "../../Constant/logo";
import { iconUpSvg } from "../../Constant/svgs";
import SidebarPopup from "../SidebarPopup";
const Sidebar = () => {
  const { setCurrentLayout, isSmall, openPopup, handleTogglePopup } = Store();
  const [links, setLinks] = useState(navlinks);

  const handleActive = (index, newLayout) => {
    const updatedItems = links.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));
    setLinks(updatedItems);
    setCurrentLayout(newLayout);
  };
  return (
    <div
      className={
        isSmall ? "sidebar smal_sidebar_view" : "sidebar large_sidebar_view"
      }
    >
      {isSmall ? (
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
                }
                 ${isSmall ? "justify-content-center" : null}`}
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
          {isSmall ? null : (
            <span className="icon_up" onClick={handleTogglePopup}>
              {iconUpSvg}
            </span>
          )}
          {openPopup && <SidebarPopup />}
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
