import { useState } from "react";
import { navlinks } from "../../Constant/sidbarLinks";
import { logoWithText } from "../../Constant/images";
import Avatar from "./Avatar";
import profileDp from "../../assets/images/avatar.png";
import { Store } from "../../ContextAPI/Context";
const Sidebar = () => {
  const { setCurrentLayout } = Store();
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
      <img
        src={logoWithText}
        alt="logo"
        className="sidebar_logo cursor-pointer"
      />
      <div className="links_main_wrapper">
        <div className="navigation">
          {links.slice(0, 5).map((link, index) => (
            <div
              className="link"
              key={index}
              style={{
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
              onClick={() => {
                handleActive(index, link.layout);
              }}
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
            {links.slice(5, 6).map((link, index) => (
              <div
                className="link"
                onClick={() => {
                  handleActive(5, "SettingsLayout");
                }}
                key={index}
                style={{
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                }}
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

export default Sidebar;
