import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as images from "../Constant/images";
import Button from "../Component/Common/ButtonShap";
import failSweatAlert from "../helperFun/SweatAlertFun";
import { successSweatAlert } from "../helperFun/SweatAlertFun";
import AuthActions from "../Component/Common/AuthActions";

function SignUp() {
  const [signInput, setSignInput] = useState({
    userEmail: "",
    userPhone: "",
    userPassword: "",
    userConfirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  console.log(signInput);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInput((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handlerSignUp = async () => {
    const { userEmail, userPhone, userPassword, userConfirmPassword } =
      signInput;
    if (
      userEmail === "" &&
      userPhone === "" &&
      userPassword === "" &&
      userConfirmPassword === ""
    ) {
      failSweatAlert("All Inputfield is empty");
    } else if (userEmail === "") {
      failSweatAlert("Email is empty");
    } else if (userPhone === "") {
      failSweatAlert("Phone is empty");
    } else if (userPassword === "") {
      failSweatAlert("Password is empty");
    } else if (userConfirmPassword === "") {
      failSweatAlert("Confirm Password is empty");
    } else if (userPassword !== userConfirmPassword) {
      failSweatAlert("Password is not matched");
    } else {
      // const responce = await fetch('http://localhost:5000/demo',{
      //   method: 'POST',
      //   body:JSON.stringify(signInput),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });
      // const result = await responce.json();
      // console.log(result);
      successSweatAlert("registration completed successfully");
      navigate("/email-verified", {state: {titlePage: "Email Verified"}});
    }
  };

  return (
    <>
      <div className="background-image-2">
        <div className="container text-center">
          <div className="row g-0 justify-content-center">
            <div className="screenBoxStyle col-xl-5 col-lg-6 col-md-8 col-sm-12">
              <img src={images.bLogo} alt="logo" className="logo-2" />
              <p className="mt-4 screenHeading fw-bold text-white">Sign Up</p>

              <div className="signup-box mt-3">
                <div className="d-flex">
                  <div className="pt-2">
                    <img src={images.mailIcon} alt="mainIcon" />
                  </div>

                  <div className="w-100">
                    <input
                      type="email"
                      className="custom-input-1"
                      placeholder="Email"
                      name="userEmail"
                      value={signInput.userEmail}
                      onChange={handleChange}
                    />
                  </div>

                  <div className=" d-flex flex-column align-items-start justify-content-end pb-1">
                    <div className="flexGrows"></div>
                    <img src={images.cubeDesign} alt="CubeDesign" />
                  </div>
                </div>
              </div>

              <div className="signup-box mt-3">
                <div className="d-flex">
                  <div className="pt-2">
                    <img src={images.mobileIcon} alt="UserLock" />
                  </div>

                  <div className="w-100">
                    <input
                      type="phone"
                      className="custom-input-1"
                      placeholder="Phone Number"
                      name="userPhone"
                      value={signInput.userPhone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className=" d-flex flex-column align-items-start justify-content-end pb-1">
                    <div className="flexGrows"></div>
                    <img src={images.cubeDesign} alt="CubeDesign" />
                  </div>
                </div>
              </div>

              <div className="signup-box mt-3">
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

                  <div className="d-flex flex-column align-items-start justify-content-end pb-1">
                    <div className="flexGrows"></div>
                    <img src={images.cubeDesign} alt="CubeDesign" />
                  </div>
                </div>
              </div>

              <div className="signup-box mt-3">
                <div className="d-flex">
                  <div className="pt-2">
                    <img src={images.userLock} alt="UserLock" />
                  </div>

                  <div className="input-group">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="custom-input-2"
                      placeholder="Confirm Paaword"
                      name="userConfirmPassword"
                      value={signInput.userConfirmPassword}
                      onChange={handleChange}
                    />
                    <div className="input-group-append">
                      <button
                        className="signup-psw-icon pt-2 p-0"
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                      >
                        {showConfirmPassword ? (
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
              <div className="row justify-content-center mt-5">
                <div className="col-10" onClick={handlerSignUp}>
                  <Button name="SIGN UP" />
                </div>
                <AuthActions
                  textLabel="Already have account?"
                  linkLabel="Sign in"
                  linkPath="/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
