import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as images from '../Constant/images';
import Button from '../Component/Common/ButtonShap';
import SweatAlert from '../helperFun/SweatAlertFun';

function OtpVerification() {

  const navigate = useNavigate();
  const [otpValue,setOTPvalue] = useState('');
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(10);

  const handleChange = (e) => {
    setOTPvalue(e.target.value)
  }
  console.log(otpValue)
  const handlerConfirmOTP = () => {
    if(otpValue === '1111') {
      navigate('/home');
    }
    else
    {
      SweatAlert('Enter Valid OTP');
    }
  }
  const HandleGetOTP = () => {
    setCurrentTime(10);
    setIsTimerRunning(true);
  };
  useEffect(() => {
    if (currentTime === 0) {
      setIsTimerRunning(false);
    }
  }, [currentTime]);
  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setCurrentTime((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isTimerRunning]);
  return (
    <>
      <div className='background-image-2'>
        <div className='container text-center'>
          <div className='row g-0'>
            <div className='col-lg-4 col-md-3 col-sm-12'></div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <img src={images.bLogo} alt='logo' className='logo-2' />
              <div
                className='signup-box mt-5'
              >
                <div className='d-flex'>
                  <div className='pt-2'>
                     <img src={images.userIcon} alt="UserIcon" />
                  </div>

                  <div className='w-100'>
                    <input
                      type='email'
                      className='custom-input-1'
                      placeholder='ENTER OTP'
                      name='otpValue'
                      value={otpValue}
                      onChange={handleChange}
                    />
                  </div>

                  <div className=' d-flex flex-column align-items-start justify-content-end pb-1'>
                    <div style={{ flexGrow: '1' }}></div>
                    <img src={images.cubeDesign} alt="CubeDesign" />
                  </div>
                </div>
              </div>

              <div className='row justify-content-md-center mt-5 pt-3'>

                <div className='col-10' onClick={handlerConfirmOTP}>
                  <Button name='VERIFY & SIGN UP' />
                </div>
                {(!isTimerRunning) ? 
                    <p className='opt-p pt-4 text-uppercase '>
                        Didn’t Received <span className='otp-span cursor-pointer' onClick={HandleGetOTP}>Resend ?</span>
                    </p>
                    :
                    <p className='text-white pt-4'>Remaining Time <span className='otp-span'>{currentTime}</span></p>
                  }
              </div>
            </div>
            <div className='col-lg-4 col-md-3 col-sm-12'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OtpVerification
