import React, { useState } from "react";
import * as images from "../Constant/images";
import Button from "../Component/Common/ButtonShap";

const PrivacyPolicyLayout = () => {

  const [personalInpt, setPersonalInpt] = useState({
    firstName:'',lastName:'',phoneNumber:'',emailAddress:'',countery:'',city:'',state:'',zipCode:''
  });

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setPersonalInpt((preState) => ({
      ...preState,
      [name]:value,
    }))
  }
  console.log(personalInpt);

  return (
    <div className="w-100 d-flex flex-column position-relative formInputs">
      <div className="row ms-3 me-3">
        <div className="col-lg-6 col-md-6 col-sm-12 px-0">
          <div className="signup-box">
            <div className="d-flex">
              <div className="w-100">
                <input
                  type="text"
                  className="custom-input-1"
                  placeholder="First Name"
                  name="firstName"
                  value={personalInpt.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className=" d-flex flex-column align-items-start justify-content-end pb-1">
                <div className="flexGrows"></div>
                <img src={images.cubeDesign} alt="CubeDesign" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 px-0">
          <div className="signup-box">
            <div className="d-flex">
              <div className="w-100">
                <input
                  type="text"
                  className="custom-input-1"
                  placeholder="Last Name"
                  name="lastName"
                  value={personalInpt.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className=" d-flex flex-column align-items-start justify-content-end pb-1">
                <div className="flexGrows"></div>
                <img src={images.cubeDesign} alt="CubeDesign" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 px-0 mt-3">
          <div className="signup-box">
            <div className="d-flex">
              <div className="w-100">
                <input
                  type="number"
                  className="custom-input-1"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={personalInpt.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className=" d-flex flex-column align-items-start justify-content-end pb-1">
                <div className="flexGrows"></div>
                <img src={images.cubeDesign} alt="CubeDesign" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 px-0 mt-3">
          <div className="signup-box">
            <div className="d-flex">
              <div className="w-100">
                <input
                  type="email"
                  className="custom-input-1"
                  placeholder="Email Address"
                  name="emailAddress"
                  value={personalInpt.emailAddress}
                  onChange={handleChange}
                />
              </div>
              <div className=" d-flex flex-column align-items-start justify-content-end pb-1">
                <div className="flexGrows"></div>
                <img src={images.cubeDesign} alt="CubeDesign" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 px-0 mt-3">
          <div className="signup-box">
            <div className="d-flex">
              <div className="w-100">
                <input
                  type="text"
                  className="custom-input-1"
                  placeholder="Country"
                  name="countery"
                  value={personalInpt.countery}
                  onChange={handleChange}
                />
              </div>
              <div className=" d-flex flex-column align-items-start justify-content-end pb-1">
                <div className="flexGrows"></div>
                <img src={images.cubeDesign} alt="CubeDesign" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 px-0 mt-3">
          <div className="signup-box">
            <div className="d-flex">
              <div className="w-100">
                <input
                  type="text"
                  className="custom-input-1"
                  placeholder="City"
                  name="city"
                  value={personalInpt.city}
                  onChange={handleChange}
                />
              </div>
              <div className=" d-flex flex-column align-items-start justify-content-end pb-1">
                <div className="flexGrows"></div>
                <img src={images.cubeDesign} alt="CubeDesign" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 px-0 mt-3">
          <div className="signup-box">
            <div className="d-flex">
              <div className="w-100">
                <input
                  type="text"
                  className="custom-input-1"
                  placeholder="State"
                  name="state"
                  value={personalInpt.state}
                  onChange={handleChange}
                />
              </div>
              <div className=" d-flex flex-column align-items-start justify-content-end pb-1">
                <div className="flexGrows"></div>
                <img src={images.cubeDesign} alt="CubeDesign" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 px-0 mt-3">
          <div className="signup-box">
            <div className="d-flex">
              <div className="w-100">
                <input
                  type="number"
                  className="custom-input-1"
                  placeholder="Zip Code"
                  name="zipCode"
                  value={personalInpt.zipCode}
                  onChange={handleChange}
                />
              </div>
              <div className=" d-flex flex-column align-items-start justify-content-end pb-1">
                <div className="flexGrows"></div>
                <img src={images.cubeDesign} alt="CubeDesign" />
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4 pt-2">
          <div className=" col-6">
            <Button name="Update information" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default PrivacyPolicyLayout;