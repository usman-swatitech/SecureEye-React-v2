import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as images from '../Constant/images';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className='bg-dark'>
      <div className="splashBox">
        <span className="splashImg"> <img className='splashBrandLogo' src={images.secureEyeText} alt='BrandLogo'/>
        </span>
      </div>
    </div>
  )
}

export default Splash;