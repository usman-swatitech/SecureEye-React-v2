import { useState, useContext, createContext, useEffect } from "react";
import { navlinks } from "../Constant/sidbarLinks";
import { links as settingLinks } from "../Component/Setting/menu";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [currentLayout, setCurrentLayout] = useState("HomeLayout");
  const [settingLayout, setSettingsLayout] = useState("General");
  const [isSmall, setIsSmall] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openPopup, setOpenPopup] = useState(false);
  const [singleScreenIdx, setSingleScreenIdx] = useState();

  const [links, setLinks] = useState(navlinks);
  const [settingNavLinks, setSettingNavLinks] = useState(settingLinks);

  const handleTogglePopup = () => {
    setOpenPopup(!openPopup);
  };

  // this function is used for detacting active menu on the sidebar
  const handleActiveNav = (index, newLayout) => {
    const updatedItems = links.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));
    setLinks(updatedItems);
    setCurrentLayout(newLayout);
  };

  const handleClickToggle = () => {
    setIsSmall(!isSmall);
    setOpenPopup(false);
  };

  const updateSettingLayouts = (index, layout) => {
    const updatedSettingItems = settingNavLinks.map((link, i) => ({
      ...link,
      isActive: i === index,
    }));
    setSettingNavLinks(updatedSettingItems);
    setSettingsLayout(layout);
  };

  //useEffects to detetct screen sizes
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 1240) {
      setIsSmall(true);
      setOpenPopup(false);
    } else {
      setIsSmall(false);
    }
  }, [windowWidth]);

  // this object will hold all the global variables
  const value = {
    currentLayout,
    setCurrentLayout,
    singleScreenIdx,
    setSingleScreenIdx,
    isSmall,
    handleClickToggle,
    handleTogglePopup,
    openPopup,
    handleActiveNav,
    links,
    setOpenPopup,
    settingNavLinks,
    settingLayout,
    setSettingsLayout,
    updateSettingLayouts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const Store = () => useContext(AppContext);

export { AppContextProvider, Store };
