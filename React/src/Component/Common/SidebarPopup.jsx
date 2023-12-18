import links from "../../Constant/popupmenus";

const SidebarPopup = () => {
  return (
    <div className="sidebar_popup">
      {links.map((link, index) => (
        <div key={index} className="popup_links">
          {link.label}
        </div>
      ))}
    </div>
  );
};

export default SidebarPopup;
