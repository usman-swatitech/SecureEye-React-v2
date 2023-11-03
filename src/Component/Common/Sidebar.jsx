import { useState } from "react";
import { navlinks } from "../../Constant/links";
import { logoWithText } from "../../Constant/images";
import Avatar from "./Avatar";
import profileDp from "../../assets/images/avatar.png";

const Sidebar = () => {
  const [links, setLinks] = useState(navlinks);
  const [activeIndex, setaAtiveIndex] = useState(0);
  const handleActive = (index) => {
    setaAtiveIndex(index);
    const updatedItems = links.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));
    setLinks(updatedItems);
  };
  return (
    <div className="sidebar-outer">
      <div className="sidebar-inner">
        <img src={logoWithText} alt="logo" className="sidebar-logo" />
        <div className="links-wrapper">
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
                  handleActive(index);
                }}
              >
                <div className={link.isActive ? "line" : null}></div>
                <span className={link.isActive ? "icon-active" : "icon"}>
                  {link.isActive ? link.activeIcon : link.nonActiveIcon}
                </span>
              </div>
            ) : (
              <div
                className="last-col"
                onClick={() => {
                  handleActive(index);
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
    </div>
  );
};
export default Sidebar;
