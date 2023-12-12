import { useState, useContext, createContext, useEffect } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentLayout, setCurrentLayout] = useState("HomeLayout");
  const [isSmall, setIsSmall] = useState(false);
  const [windowWidth, setWindowWidth] = useState(undefined);
  const [openPopup, setOpenPopup] = useState(false);
  const [singleScreenIdx,setSingleScreenIdx] = useState();

  const handleTogglePopup = () => {
    setOpenPopup(!openPopup);
  };

  const handleClickToggle = () => {
    setIsSmall(!isSmall);
    setOpenPopup(false);
  };
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const Store = () => useContext(AppContext);
