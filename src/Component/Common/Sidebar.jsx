import { useState, useEffect } from "react";
import { navlinks } from "../../Constant/sidbarLinks";
import { logoWithText } from "../../Constant/images";
import Avatar from "./Avatar";
import profileDp from "../../assets/images/avatar.png";
import { Store } from "../../ContextAPI/Context";
import { logoSvg } from "../../Constant/logo";

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
      {smallLogo ? (
        <span className="d-flex justify-content-center cursor-pointer"
          onClick={() => handleActive(0,"HomeLayout")}
        >
          {logoSvg}
        </span>
      ) : (
        <img
          src={logoWithText}
          alt="logo"
          className="sidebar_logo cursor-pointer"
          onClick={() => handleActive(0,"HomeLayout")}
        />
      )}

      <div className="links_main_wrapper">
        <div className="navigation">
          {links.slice(0, 5).map((link, index) => (
            <div
              className="link border-5px"
              key={index}
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
                className="link border-5px"
                onClick={() => {
                  handleActive(5, "SettingsLayout");
                }}
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

export default Sidebar;
