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
      SweatAlert('Email is not empty');
    }
    else {
      navigate('/otpverification')
    }
  }

  return (
    <>
      <div className='background-image-2'>
        <div className='container text-center'>
          <div className='row g-0'>
            <div className='col-lg-4 col-md-3 col-sm-12'></div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <img src={images.bLogo} alt='logo' className='logo-2' />
              <div className='signup-box mt-5'>
                <div className='d-flex'>
                  <div className='pt-2'>
                     <img src={images.userIcon} alt="UserIcon" />
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
                    <div flexGrows></div>
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
            <div className='col-lg-4 col-md-3 col-sm-12'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmailVerification
