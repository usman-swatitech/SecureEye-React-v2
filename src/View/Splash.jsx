import React, { Fragment } from 'react';
import * as images from '../Constant/images';

const Splash = () => {
  return (
    <Fragment>
      {/* <div className="appContainer">
        <div className="splashbackground">
          <div className='splashBG'>
            <div class="d-flex align-items-center justify-content-center heightVH">
              <div class="text-center">
                <img className='splashBrandLogo' src={images.secureEyeText} alt='BrandLogo'/>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="splashBox">
        <span className="splashImg"> <img className='splashBrandLogo' src={images.secureEyeText} alt='BrandLogo'/></span>
      </div>
    </Fragment>
  )
}

export default Splash;