import { useRef } from "react";
import { logoWithText } from "../../Constant/images";
import Avatar from "./Avatar";
import profileDp from "../../assets/images/avatar.png";
import { Store } from "../../ContextAPI/Context";
import { logoSvg } from "../../Constant/logo";
import { iconUpSvg, logoutSvg } from "../../Constant/svgs";
import SidebarPopup from "../SidebarPopup";
import { useNavigate } from "react-router";

const Sidebar = () => {
  const userActionsRef = useRef(null);
  const {
    isSmall,
    openPopup,
    setOpenPopup,
    handleTogglePopup,
    handleActiveNav,
    links,
  } = Store();
  const navigate = useNavigate();

  const handlerLogout = () => {
    localStorage.clear("signInput");
    navigate("/");
  };

  //detect click outside sidebar popup
  window.addEventListener("click", (e) => {
    if (userActionsRef && userActionsRef.current) {
      if (!userActionsRef.current.contains(e.target)) {
        setOpenPopup(false);
      }
    }
  });

  return (
    <div
      className={
        isSmall ? "sidebar smal_sidebar_view" : "sidebar large_sidebar_view"
      }
    >
      {isSmall ? (
        <span
          className="d-flex justify-content-center cursor-pointer"
          onClick={() => handleActiveNav(0, "HomeLayout")}
        >
          {logoSvg}
        </span>
      ) : (
        <img
          src={logoWithText}
          alt="logo"
          className="sidebar_logo cursor-pointer"
          onClick={() => handleActiveNav(0, "HomeLayout")}
        />
      )}

      <div className="links_main_wrapper">
        <div className="navigation">
          {links.slice(0, 6).map((link, index) => (
            <div
              className="nav_link"
              key={index}
              onClick={() => {
                handleActiveNav(index, link.layout);
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
        <div
          className={`${
            isSmall ? "sidebar_last_row_sm" : "sidebar_last_row"
          }  `}
          ref={userActionsRef}
        >
          <div
            className={`cursor-pointer ${isSmall ? "logout_sm" : "logout"}`}
            onClick={handlerLogout}
          >
            <span>{logoutSvg}</span>
            {isSmall ? null : <h4 className="username">Logout</h4>}
          </div>
          <div className="d-flex  align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-1">
              <Avatar image={profileDp} />
              {isSmall ? null : <h4 className="username">John Doe</h4>}
            </div>
            {isSmall ? null : (
              <span className="icon_up" onClick={handleTogglePopup}>
                {iconUpSvg}
              </span>
            )}
          </div>
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
