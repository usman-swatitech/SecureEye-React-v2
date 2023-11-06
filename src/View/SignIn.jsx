import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as images from '../Constant/images';
import sweetAlert from '../helperFun/SweatAlertFun';
import Button from '../Component/Common/ButtonShap';

function SignIn () {
  const[signInput,setSignInput] = useState({userName:'',userPassword:''})
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  console.log(signInput);
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setSignInput(prevState =>({
      ...prevState,
      [name]:value
    }))
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const handlerSignUp = () => {
    navigate('/signup')
  }

  const handlerSignIn = () => {
    const { userName, userPassword } = signInput;
  
    if (userName === '' && userPassword === '') {
      sweetAlert("Name & Password are not empty");
    } else if (userName === '') {
      sweetAlert("Name is not empty");
    } else if (userPassword === '') {
      sweetAlert("Password is not empty");
    } else {
      navigate('/home');
    }
  };
    
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
                      name='userName'
                      value={signInput.userName}
                      onChange={handleChange}
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
                <div className=' col-10' onClick={handlerSignIn}>
                  <Button name='SIGN IN' />
                </div>
                <div className=' col-10 mt-4'>
                  <p className='opt-p pt-4 text-uppercase '>
                        Dodn’t have an account? <span className='otp-span cursor-pointer' onClick={handlerSignUp}>
                          SignUp
                        </span>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
