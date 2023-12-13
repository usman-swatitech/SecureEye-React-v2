import { useState, useContext, createContext, useEffect } from "react";
import { navlinks } from "../Constant/sidbarLinks";
const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentLayout, setCurrentLayout] = useState("HomeLayout");
  const [isSmall, setIsSmall] = useState(false);
  const [windowWidth, setWindowWidth] = useState(undefined);
  const [openPopup, setOpenPopup] = useState(false);
  const [singleScreenIdx, setSingleScreenIdx] = useState();

  const [links, setLinks] = useState(navlinks);

  const handleTogglePopup = () => {
    setOpenPopup(!openPopup);
  }


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
  return (
    <AppContext.Provider
      value={{
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const Store = () => useContext(AppContext);
