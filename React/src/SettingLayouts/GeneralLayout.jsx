import React, { useState } from "react";
import * as images from "../Constant/images";
import Button from "../Component/Common/ButtonShap";

const GeneralLayout = () => {
  const [generalInpt,setGeneralInpt] = useState({
    bussinesName:'',emailAddress:'',phoneNumber:'', faxNo:'', address:'',countery:'',city:'',state:''
  });

  const handlerChanhe = (e) =>{
    const {name,value} = e.target;
    setGeneralInpt((preState)=> ({
      ...preState,
      [name]:value,
    }))
  }

  console.log(generalInpt);
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
                  placeholder="Business Name"
                  name="bussinesName"
                  value={generalInpt.bussinesName}
                  onChange={handlerChanhe}
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
                  type="email"
                  className="custom-input-1"
                  placeholder="Email Address"
                  name="emailAddress"
                  value={generalInpt.emailAddress}
                  onChange={handlerChanhe}
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
                  value={generalInpt.phoneNumber}
                  onChange={handlerChanhe}
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
                  placeholder="Fax"
                  name="faxNo"
                  value={generalInpt.faxNo}
                  onChange={handlerChanhe}
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
                  placeholder="Address"
                  name="address"
                  value={generalInpt.address}
                  onChange={handlerChanhe}
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
                  value={generalInpt.countery}
                  onChange={handlerChanhe}
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
                  value={generalInpt.city}
                  onChange={handlerChanhe}
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
                  value={generalInpt.state}
                  onChange={handlerChanhe}
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
  );
}
export default GeneralLayout;
