import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentLayout, setCurrentLayout] = useState("HomeLayout");
  return (
    <AppContext.Provider value={{ currentLayout, setCurrentLayout }}>
      {children}
    </AppContext.Provider>
  );
};

export const Store = () => useContext(AppContext);
