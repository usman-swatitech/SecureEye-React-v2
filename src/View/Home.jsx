import React, { useState, useEffect, Fragment } from 'react';
import SplashScreen from './Splash';
import * as images from '../Constant/images'
const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2800); // Display for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Fragment>
          <div className=''>
            <div class="frame-container">
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default App;
