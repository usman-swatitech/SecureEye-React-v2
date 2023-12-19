import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as images from "../Constant/images";
import failSweatAlert from "../helperFun/SweatAlertFun";
import Button from "../Component/Common/ButtonShap";
import AuthActions from "../Component/Common/AuthActions";

const SignIn = () => {

  const [isChecked, setIsChecked] = useState(false);
  const [signInput, setSignInput] = useState({
    userName: "",
    userPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // console.log(signInput);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // const handlerSignUp = () => {
  //   navigate("/signup");
  // };

  const handlerSignIn = () => {
    const { userName, userPassword } = signInput;

    if (userName === "" && userPassword === "") {
      failSweatAlert("Name & Password is empty");
    } else if (userName === "") {
      failSweatAlert("Name is empty");
    } else if (userPassword === "") {
      failSweatAlert("Password is empty");
    } else {
      if (isChecked) {
        console.log("kashi",signInput)
        localStorage.setItem('signInput', JSON.stringify(signInput));
      }
      navigate("/home", {state:{authHome:true}});
    }
  };

  // const handleCheckboxChange = (e) => {
  //   const { name, checked } = e.target;
  //   setAddCamera(name, checked);
  // };
  const handlerEmail = () => {
    navigate("/email-verified", {state: {titlePage: "Forgot Password"}});
  }

  const handleCheckboxChange = () => {

    setIsChecked(!isChecked);
  }
  return (
    <>
      <div className="background-image-2">
        <div className="container text-center">
          <div className="row g-0 justify-content-center">
            <div className="screenBoxStyle col-xl-5 col-lg-6 col-md-8 col-sm-12">
              <img src={images.bLogo} alt="logo" className="logo-2" />
              <p className="mt-4 screenHeading fw-bold text-white">login</p>
              <div className="signup-box mt-4">
                <div className="d-flex">
                  <div className="pt-2">
                    <img src={images.userIcon} alt="UserIcon" />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="custom-input-1"
                      placeholder="Username"
                      name="userName"
                      value={signInput.userName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className=" d-flex flex-column align-items-start justify-content-end pb-1">
                    <div className="flexGrows"></div>
                    <img src={images.cubeDesign} alt="CubeDesign" />
                  </div>
                </div>
              </div>

              <div className="signup-box mt-4">
                <div className="d-flex">
                  <div className="pt-2">
                    <img src={images.userLock} alt="UserLock" />
                  </div>

                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="custom-input-2"
                      placeholder="Password"
                      value={signInput.userPassword}
                      name="userPassword"
                      onChange={handleChange}
                    />
                    <div className="input-group-append">
                      <button
                        className="signup-psw-icon pt-2 p-0"
                        type="button"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <img src={images.unHideIcn} alt="UserLock" />
                        ) : (
                          <img src={images.hiddenIcn} alt="UserLock" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className=" d-flex flex-column align-items-start justify-content-end pb-1">
                    <div className="flexGrows"></div>
                    <img src={images.cubeDesign} alt="CubeDesign" />
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between mt-3">
                <div className="d-flex gap-2 text-white">
                  <label className='custom_checkbox_modal'>
                    <input
                      type='checkbox'
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <span className='checkmark_modal'></span>
                  </label>
                  <p className="aeionMonoFont">Remember Me</p>
                </div>

                <div>
                  <p onClick={handlerEmail} className="cursor-pointer text-white aeionMonoFont">
                    Forgot password?
                  </p>
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <div className=" col-10" onClick={handlerSignIn}>
                  <Button name="SIGN IN" />
                </div>
                <AuthActions
                  textLabel="Don’t Have An Account?"
                  linkLabel=" Sign Up"
                  linkPath="/sign-up"
                />
                {/* <div className=' col-10 mt-4'>
                  <p className='opt-p pt-4 text-uppercase text-gray'>
                        Don’t have an account? <span className='otp-span cursor-pointer' onClick={handlerSignUp}>
                          SignUp
                        </span>
                    </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
