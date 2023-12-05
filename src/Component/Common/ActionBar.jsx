import React, {useState } from "react";
import {plusSvg,backBtnSvg } from "../../Constant/svgs";
import CameraModal from "./CameraModal";
import ButtonSubmit from "./ButtonShap";
import { Modal } from "react-bootstrap";
import SweatAlert, { successSweatAlert } from "../../helperFun/SweatAlertFun";
import { Store } from "../../ContextAPI/Context";

const ActionBar = () => {

  const [show, setShow] = useState(false);

  const {currentLayout,setCurrentLayout} = Store();

  const layoutTitles = {
    HomeLayout: 'Secureye dashboard',
    EmployeeLayout: 'Employee data',
    DepartmentLayout: 'Department data',
    WorkingLayout: ' Working data',
    SettingsLayout: 'Settings',
    // Add more layouts as needed
  };
  const labelContent = layoutTitles[currentLayout] || 'Camera 01';

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => setShow(false);
  // const modalRef = document.getElementsByClassName("fade");
  // modalRef.classList.add("overflow: hidden");
  const [addCamera, setAddCamera] = useState({
    cameraName: "",
    ipAddress: "",
    port: "",
    location: "",
    nightMode: false,
    userName: "",
    userPassword: "",
  });

  const handleInputChange = (name, value) => {
    setAddCamera({ ...addCamera, [name]: value });
  };
  // console.log("ee",addCamera);

  const handleAddCamera = () => {
    const {
      cameraName,
      ipAddress,
      port,
      location,
      userName,
      // nightVision,
      userPassword,
    } = addCamera;

    if (cameraName === "") {
      SweatAlert("Camera Name is empty");
    } else if (ipAddress === "") {
      SweatAlert("ipAddress is empty");
    } else if (port === "") {
      SweatAlert("port is empty");
    } else if (location === "") {
      SweatAlert("location is empty");
    } 
    // else if (nightVision === "") {
    //   SweatAlert("nightVision is empty");
    // } 
    else if (userName === "") {
      SweatAlert("userName is empty");
    } else if (userPassword === "") {
      SweatAlert("userPassword is empty");
    } else {
      setAddCamera({
        cameraName: "",
        ipAddress: "",
        port: "",
        location: "",
        // nightVision: "",
        nightMode: false,
        userName: "",
        userPassword: "",
      });
      successSweatAlert("Camera add successfully");
      setShow(false);
    }
    
  };

  const handlerBack = () => {
    setCurrentLayout('HomeLayout');
  }
  return (
    <>
      <div className="action_bar d-flex justify-content-between align-items-center">
        {/* <div className="left_portion">
          <span className="actionbar_icons">{myHomeSvg}</span>
          <span className="actionbar_icons">{myBlockSvg}</span>
          <span className="actionbar_icons">{activeFac}</span>
        </div> */}
        <label className="componentTittle">{labelContent}</label>
        {(labelContent === "Camera 01") ?
          <div className="backButton cursor-pointer" onClick={handlerBack}>
            {backBtnSvg}
            Back
          </div>
          :
          <button
            type="button"
            className="modal_btn"
            variant="primary"
            onClick={handleShow}
          >
            <div className="right_portion d-flex">
              <div className="main_circle">
                <div className="plus_circle">
                  <span>{plusSvg}</span>
                </div>
              </div>
              <h4 className="fs-6 text-white mt-1-2">Add New Camera</h4>
            </div>
          </button>
        }
        
      </div>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header>
          <Modal.Title>Add New Camera</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CameraModal addCamera={addCamera} setAddCamera={handleInputChange} />
        </Modal.Body>
        <Modal.Footer>
          <span
            variant="secondary"
            className="modalBtn mt-2 w-100 d-flex justify-content-center"
            onClick={handleAddCamera}
          >
            <ButtonSubmit name="add camera" />
          </span>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ActionBar;
