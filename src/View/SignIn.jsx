import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as images from '../Constant/images';
import Button from '../Component/Common/ButtonShap'

function SignIn () {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const handlerSignUp = () => {
    navigate('/signup')
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
                      type='text'
                      className='custom-input-1'
                      placeholder='USERNAME'
                    />
                  </div>

                  <div className=' d-flex flex-column align-items-start justify-content-end pb-1'>
                    <div style={{ flexGrow: '1' }}></div>
                    <img src={images.cubeDesign} alt="CubeDesign" />
                  </div>
                </div>
              </div>

              <div className='signup-box mt-5'>
                <div className='d-flex'>
                  <div className='pt-2'>
                    <img src={images.userLock} alt="UserLock" />
                  </div>

                  <div className='input-group'>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className='custom-input-2'
                      placeholder='PASSWORD'
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                    <div className='input-group-append'>
                      <button
                        className='signup-psw-icon pt-2 p-0'
                        type='button'
                        onClick={togglePasswordVisibility}
                      >
                        {
                          (showPassword)? <img src={images.unHideIcn} alt="UserLock" /> :
                          <img src={images.hiddenIcn} alt="UserLock" />
                        }
                        
                      </button>
                    </div>
                  </div>

                  <div className=' d-flex flex-column align-items-start justify-content-end pb-1'>
                    <div style={{ flexGrow: '1' }}></div>
                    <img src={images.cubeDesign} alt="CubeDesign" />
                  </div>
                </div>
              </div>

              <div className='row justify-content-md-center mt-5'>
                <div className=' col-10'>
                  <Button name='SIGN IN' />
                </div>
                <div className=' col-10 mt-4' onClick={handlerSignUp}>
                  <Button name='SIGN UP' />
                </div>
              </div>
            </div>
            {/* <div className='col-lg-4 col-md-3 col-sm-12'></div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
