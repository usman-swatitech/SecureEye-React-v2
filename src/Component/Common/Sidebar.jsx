import { useState } from "react";
import { navlinks } from "../../Constant/links";
import { logoWithText } from "../../Constant/images";
import Avatar from "./Avatar";
import profileDp from "../../assets/images/avatar.png";
import { Store } from "../../context/Context";
const Sidebar = () => {
  const { currentLayout, setCurrentLayout } = Store();

  const [links, setLinks] = useState(navlinks);
  const [activeIndex, setaAtiveIndex] = useState(0);
  const handleActive = (index, newLayout) => {
    setaAtiveIndex(index);
    const updatedItems = links.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));
    setLinks(updatedItems);
    setCurrentLayout(newLayout);
  };

  return (
    <div className="sidebar_inner">
      <img
        src={logoWithText}
        alt="logo"
        className="sidebar_logo cursor-pointer"
        onClick={() => setCurrentLayout("HomeLayout")}
      />
      <div className="links_wrapper">
        {links.map((link, index) =>
          index < 5 ? (
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
          ) : (
            <div
              className="last-col"
              onClick={() => {
                handleActive(index, link.layout);
              }}
              key={index}
            >
              <div className={link.isActive ? "line" : null}></div>
              <span className={link.isActive ? "icon-active" : "icon"}>
                {link.isActive ? link.activeIcon : link.nonActiveIcon}
              </span>
            </div>
          )
        )}
        <Avatar image={profileDp} />
      </div>
    </div>
  );
};
export default Sidebar;
