import React, { Fragment,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as images from '../Constant/images';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); 
    }, 2500); 

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <Fragment>
      <div className="splashBox">
        <span className="splashImg"> <img className='splashBrandLogo' src={images.secureEyeText} alt='BrandLogo'/>
        </span>
      </div>
    </Fragment>
  )
}

export default Splash;