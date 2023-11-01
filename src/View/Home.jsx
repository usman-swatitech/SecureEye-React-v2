import React, { useState, useEffect, Fragment } from 'react';
import SplashScreen from './Splash';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // Display for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Fragment>
            <h1>Home screen</h1>
        </Fragment>
      )}
    </div>
  );
};

export default App;
