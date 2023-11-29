import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as images from '../Constant/images';
import Button from '../Component/Common/ButtonShap';
import SweatAlert from '../helperFun/SweatAlertFun';

function EmailVerification () {

  const [userEmailVerified,setUserEmailVerified] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserEmailVerified(e.target.value);
  }
  console.log(userEmailVerified)
  const handlerOTP = () => {
    if(userEmailVerified === '')
    {
      SweatAlert('Email is empty');
    }
    else {
      navigate('/otpverification')
    }
  }

  return (
    <>
      <div className='background-image-2'>
        <div className='container text-center'>
          <div className='row g-0  justify-content-center'>
            <div className='screenBoxStyle col-xl-5 col-lg-6 col-md-8 col-sm-12'>
              <img src={images.bLogo} alt='logo' className='logo-2' />
              <p className="mt-lg-5 mt-4 pt-3 mb-3 screenHeading fw-bold text-white">Forgot password</p>

<p className="mt-lg-4 mt-2 mb-3 screenHeading2 text-capitalize fw-bold text-white">enter your registered email and <br/>
get 6 digit verification code</p>

              <div className='signup-box mt-5'>
                <div className='d-flex'>
                  <div className='pt-2'>
                     <img src={images.mailIcon} alt="UserIcon" />
                  </div>

                  <div className='w-100'>
                    <input
                      type='email'
                      className='custom-input-1'
                      placeholder='ENTER YOUR EMAIL'
                      value={userEmailVerified}
                      name='userEmailVerified'
                      onChange={handleChange}
                    />
                  </div>

                  <div className=' d-flex flex-column align-items-start justify-content-end pb-1'>
                    <div className='flexGrows'></div>
                    <img src={images.cubeDesign} alt="CubeDesign" />
                  </div>
                </div>
              </div>

              <div className='row justify-content-center mt-5 pt-3'>
                <div className='col-10' onClick={handlerOTP}>
                  <Button name='GET OTP' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmailVerification
