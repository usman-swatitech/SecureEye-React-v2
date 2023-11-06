import React, { useState } from 'react'
import * as images from '../../Constant/images'
import { useNavigate } from 'react-router-dom'
import Button from './ButtonShap'
import '../../usman.css'

function CameraModal () {
  const [signInput, setSignInput] = useState({
    cameraName: '',
    ipAddress: '',
    port: '',
    location: '',
    nightVision: '',
    userName: '',
    userPassword: ''
  })

  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()
  console.log(signInput)

  const handleChange = e => {
    const { name, value } = e.target
    setSignInput(preState => ({
      ...preState,
      [name]: value
    }))
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handlerSignUp = () => {
    navigate('/')
  }

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <div className='modal_box p-5'>
        <div className='text-center'>
          <p className='modal_p'>Add new camera</p>

          <div className='ms-lg-5 me-lg-5 mt-lg-5'>
            <div className='signup-box mt-4'>
              <div className='d-flex'>
                <div className='pt-2'>
                  <img src={images.cameraName} alt='UserIcon' />
                </div>

                <div className='w-100'>
                  <input
                    type='text'
                    className='custom-input-1'
                    placeholder='Camera Name'
                    name='cameraName'
                    value={signInput.cameraName}
                    onChange={handleChange}
                  />
                </div>

                <div className=' d-flex flex-column align-items-start justify-content-end pb-1'>
                  <div style={{ flexGrow: '1' }}></div>
                  <img src={images.cubeDesign} alt='CubeDesign' />
                </div>
              </div>
            </div>

            <div className='signup-box mt-4'>
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
                    value={signInput.ipAddress}
                    onChange={handleChange}
                  />
                </div>

                <div className=' d-flex flex-column align-items-start justify-content-end pb-1'>
                  <div style={{ flexGrow: '1' }}></div>
                  <img src={images.cubeDesign} alt='CubeDesign' />
                </div>
              </div>
            </div>

            <div className='signup-box mt-4'>
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
                    value={signInput.port}
                    onChange={handleChange}
                  />
                </div>

                <div className=' d-flex flex-column align-items-start justify-content-end pb-1'>
                  <div style={{ flexGrow: '1' }}></div>
                  <img src={images.cubeDesign} alt='CubeDesign' />
                </div>
              </div>
            </div>

            <div className='signup-box mt-4'>
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
                    value={signInput.location}
                    onChange={handleChange}
                  />
                </div>

                <div className=' d-flex flex-column align-items-start justify-content-end pb-1'>
                  <div style={{ flexGrow: '1' }}></div>
                  <img src={images.cubeDesign} alt='CubeDesign' />
                </div>
              </div>
            </div>

            <div className='signup-box mt-4'>
              <div className='d-flex'>
                <div className='pt-2'>
                  <img src={images.nightVision} alt='UserLock' />
                </div>

                <div className='input-group'>
                  <input
                    type='text'
                    className='custom-input-2'
                    placeholder='night vision supported'
                    value={signInput.nightVision}
                    name='nightVision'
                  />
                  <label className='custom_checkbox_modal'>
                    <input
                      type='checkbox'
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <span className='checkmark_modal ms-1 mt-3'></span>
                  </label>
                </div>

                <div className='d-flex flex-column align-items-start justify-content-end pb-1'>
                  <div style={{ flexGrow: '1' }}></div>
                  <img src={images.cubeDesign} alt='CubeDesign' />
                </div>
              </div>
            </div>

            <div className='signup-box mt-4'>
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
                    value={signInput.userName}
                    onChange={handleChange}
                  />
                </div>

                <div className=' d-flex flex-column align-items-start justify-content-end pb-1'>
                  <div style={{ flexGrow: '1' }}></div>
                  <img src={images.cubeDesign} alt='CubeDesign' />
                </div>
              </div>
            </div>

            <div className='signup-box mt-4'>
              <div className='d-flex'>
                <div className='pt-2'>
                  <img src={images.userLock} alt='UserLock' />
                </div>

                <div className='input-group'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className='custom-input-2'
                    placeholder='PASSWORD'
                    value={signInput.userPassword}
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
                  <div style={{ flexGrow: '1' }}></div>
                  <img src={images.cubeDesign} alt='CubeDesign' />
                </div>
              </div>
            </div>

            <div className='row justify-content-center mt-5'>
              <div className='col-10' onClick={handlerSignUp}>
                <Button name='add camera' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CameraModal
