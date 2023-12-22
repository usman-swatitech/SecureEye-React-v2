import React, { useState } from "react";
import { plusSvg, backBtnSvg } from "../../Constant/svgs";
import CameraModal from "../Dashboard/CameraModal";
import EmployeeModal from '../Dashboard/EmpolyeeModal';
import DepartmentModal from '../Dashboard/DepartmentModal';
import ButtonSubmit from "./ButtonShap";
import { Modal } from "react-bootstrap";
import SweatAlert, { successSweatAlert } from "../../helperFun/SweatAlertFun";
import { Store } from "../../ContextAPI/Context";

const ActionBar = () => {
  const [show, setShow] = useState(false);

  const { currentLayout, singleScreenIdx, handleActiveNav } =
    Store();

  const layoutTitles = {
    HomeLayout: "Secureye dashboard",
    EmployeeLayout: "Employee data",
    DepartmentLayout: "Department data",
    WorkingLayout: " Working data",
    SettingsLayout: "Settings",
  };
  const tittleLayout = {
    HomeLayout: "Camera",
    EmployeeLayout: "Employee",
    DepartmentLayout: "Department"
  }
  const labelContent = layoutTitles[currentLayout] || singleScreenIdx;
  const modalTittle = tittleLayout[currentLayout];
  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => setShow(false);
  const [addCamera, setAddCamera] = useState({cameraName: "", ipAddress: "",port: "",location: "",
    nightMode: false,userName: "",userPassword: "",});

  const handleInputChange = (name, value) => {
    setAddCamera({ ...addCamera, [name]: value });
  };
  // console.log("ee",addCamera);

  const handleAddCamera = () => {
    const {
      cameraName, ipAddress, port, location, userName, userPassword} = addCamera;

    if (cameraName === "") {
      SweatAlert("Camera Name is empty");
    } else if (ipAddress === "") {
      SweatAlert("ipAddress is empty");
    } else if (port === "") {
      SweatAlert("port is empty");
    } else if (location === "") {
      SweatAlert("location is empty");
    }
    else if (userName === "") {
      SweatAlert("userName is empty");
    } else if (userPassword === "") {
      SweatAlert("userPassword is empty");
    } else {
      setAddCamera({
        cameraName: "", ipAddress: "",port: "",location: "",nightMode: false,userName: "",userPassword: "",
      });
      successSweatAlert("Camera add successfully");
      setShow(false);
    }
  };

  return (
    <>
      <div className="action_bar d-flex justify-content-between align-items-center">
        <label className="componentTittle">{labelContent}</label>
        {(currentLayout === "HomeLayout" || currentLayout === "EmployeeLayout" || currentLayout === "DepartmentLayout") ? (
          <button
            type="button"
            className="modal_btn"
            variant="primary"
            onClick={handleShow} >
            <div className="right_portion d-flex">
              <div className="main_circle">
                <div className="plus_circle">
                  <span>{plusSvg}</span>
                </div>
              </div>
              <h4 className="fs-6 text-white mt-1-2">{`Add New ${modalTittle}`}</h4>
            </div>
          </button>
        ) : (
          <div
            className="backButton cursor-pointer"
            onClick={() => handleActiveNav(0, "HomeLayout")}
          >
            {backBtnSvg}
            Back
          </div>
        )}
      </div>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header>
          <Modal.Title>{`Add New ${modalTittle}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalTittle==="Camera" ? <CameraModal addCamera={addCamera} setAddCamera={handleInputChange}/> : modalTittle ==="Employee" ? <EmployeeModal addCamera={addCamera} setAddCamera={handleInputChange}/> : 
          <DepartmentModal addCamera={addCamera} setAddCamera={handleInputChange} />
          }
          
        </Modal.Body>
        <Modal.Footer>
          <span
            variant="secondary"
            className="modalBtn mt-2 w-100 d-flex justify-content-center"
            onClick={handleAddCamera}
          >
            <ButtonSubmit name={`add ${modalTittle}`}/>
          </span>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ActionBar;
