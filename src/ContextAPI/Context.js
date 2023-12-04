import { useState, useContext, createContext, useEffect } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentLayout, setCurrentLayout] = useState("HomeLayout");
  const [isSmall, setIsSmall] = useState(false);
  const [windowWidth, setWindowWidth] = useState(undefined);

  const handleClickToggle = () => {
    setIsSmall(!isSmall);
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
    } else {
      setIsSmall(false);
    }
  }, [windowWidth]);
  return (
    <AppContext.Provider
      value={{ currentLayout, setCurrentLayout, isSmall, handleClickToggle }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const Store = () => useContext(AppContext);
