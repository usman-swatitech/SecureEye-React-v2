import React, { useState, useEffect } from "react";
import SplashScreen from "./Splash";
import Sidebar from "../components/common/Sidebar";
import Test from "../components/Test";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 10); // Display for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div className="main-wrapper">
          <Test />
        </div>
      )}
    </>
  );
};
export default App;
