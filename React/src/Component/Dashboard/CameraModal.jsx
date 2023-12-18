import React, { useState } from 'react'
import * as images from '../../Constant/images'

const CameraModal = ({ addCamera, setAddCamera }) => {

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setAddCamera(name, newValue);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAddCamera(name, checked);
  };

  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <div className='modal_box'>
        <div className='text-center'>
          <div className='ms-lg-5 me-lg-5 mt-lg-2'>
            <div className='signup-box'>
              <div className='d-flex'>
                <div className='mt-2'>
                  <img src={images.cameraName} alt='UserIcon' />
                </div>

                <div className='w-100'>
                  <input
                    type='text'
                    className='custom-input-1'
                    placeholder='Camera Name'
                    name='cameraName'
                    value={addCamera.cameraName}
                    onChange={handleChange}
                  />
                </div>

                <div className=' d-flex flex-column align-items-start justify-content-end pb-1'>
                  <div className='flexGrows'></div>
                  <img src={images.cubeDesign} alt='CubeDesign' />
                </div>
              </div>
            </div>

            <div className='signup-box mt-2'>
              <div className='d-flex'>
                <div className='pt-2'>
                  <img src={images.ipAddress} alt='UserIcon' />
                </div>

                <div className='w-100'>
                  <input
                    type='text'
                    className='custom-input-1'
                    placeholder='Ip address'
                    name='ipAddress'
                    value={addCamera.ipAddress}
                    onChange={handleChange}
                  />
                </div>

                <div className=' d-flex flex-column align-items-start justify-content-end pb-1'>
                  <div className='flexGrows'></div>
                  <img src={images.cubeDesign} alt='CubeDesign' />
                </div>
              </div>
            </div>

            <div className='signup-box mt-2'>
              <div className='d-flex'>
                <div className='pt-2'>
                  <img src={images.port} alt='UserIcon' />
                </div>

                <div className='w-100'>
                  <input
                    type='number'
                    className='custom-input-1'
                    placeholder='Port'
                    name='port'
                    value={addCamera.port}
                    onChange={handleChange}
                  />
                </div>

                <div className=' d-flex flex-column align-items-start justify-content-end pb-1'>
                  <div className='flexGrows'></div>
                  <img src={images.cubeDesign} alt='CubeDesign' />
                </div>
              </div>
            </div>

            <div className='signup-box mt-2'>
              <div className='d-flex'>
                <div className='pt-2'>
                  <img src={images.location} alt='UserIcon' />
                </div>

                <div className='w-100'>
                  <input
                    type='text'
                    className='custom-input-1'
                    placeholder='Location'
                    name='location'
                    value={addCamera.location}
                    onChange={handleChange}
                  />
                </div>

                <div className=' d-flex flex-column align-items-start justify-content-end pb-1'>
                  <div className='flexGrows'></div>
                  <img src={images.cubeDesign} alt='CubeDesign' />
                </div>
              </div>
            </div>

            <div className='signup-box mt-2'>
              <div className='d-flex'>
                <div className='pt-2'>
                  <img src={images.nightVision} alt='UserLock' />
                </div>

                <div className='input-group'>
                  <input
                    type='text'
                    className='custom-input-2'
                    placeholder='Night Vision Supported'
                    disabled
                    // name='nightVision'
                    // value={addCamera.nightVision}
                    // onChange={handleChange}
                  />
                  <label className='custom_checkbox_modal'>
                    <input
                      type='checkbox'
                      checked={addCamera.nightMode}
                      name='nightMode'
                      onChange={handleCheckboxChange}
                    />
                    <span className='checkmark_modal ms-1 mt-3'></span>
                  </label>
                </div>

                <div className='d-flex flex-column align-items-start justify-content-end pb-1'>
                  <div className='flexGrows'></div>
                  <img src={images.cubeDesign} alt='CubeDesign' />
                </div>
              </div>
            </div>

            <div className='signup-box mt-2'>
              <div className='d-flex'>
                <div className='pt-2'>
                  <img src={images.userIcon} alt='UserIcon' />
                </div>

                <div className='w-100'>
                  <input
                    type='text'
                    className='custom-input-1'
                    placeholder='Username'
                    name='userName'
                    value={addCamera.userName}
                    onChange={handleChange}
                  />
                </div>

                <div className=' d-flex flex-column align-items-start justify-content-end pb-1'>
                  <div className='flexGrows'></div>
                  <img src={images.cubeDesign} alt='CubeDesign' />
                </div>
              </div>
            </div>

            <div className='signup-box mt-2'>
              <div className='d-flex'>
                <div className='pt-2'>
                  <img src={images.userLock} alt='UserLock' />
                </div>

                <div className='input-group'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className='custom-input-2'
                    placeholder='Password'
                    value={addCamera.userPassword}
                    name='userPassword'
                    onChange={handleChange}
                  />
                  <div className='input-group-append'>
                    <button
                      className='signup-psw-icon pt-2 p-0'
                      type='button'
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <img src={images.unHideIcn} alt='UserLock' />
                      ) : (
                        <img src={images.hiddenIcn} alt='UserLock' />
                      )}
                    </button>
                  </div>
                </div>

                <div className='d-flex flex-column align-items-start justify-content-end pb-1'>
                  <div className='flexGrows'></div>
                  <img src={images.cubeDesign} alt='CubeDesign' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CameraModal
