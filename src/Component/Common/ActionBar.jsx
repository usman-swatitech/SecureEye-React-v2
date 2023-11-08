import React from "react";
import { myHomeSvg, myBlockSvg, activeFac, plusSvg } from "../../Constant/svgs";
import CameraModal from "./CameraModal";

const ActionBar = () => {
  return (
    <>
      <div
        className="action-bar d-flex flex-lg-row flex-column 
       justify-content-between gap-2   position-relative"
      >
        <div className="left-portion ms-4 ms-md-0">
          <span className="actionbar-icons">{myHomeSvg}</span>
          <span className="actionbar-icons">{myBlockSvg}</span>
          <span className="actionbar-icons">{activeFac}</span>
        </div>
        <button
          type="button"
          className="modal_btn"
          data-bs-toggle="modal"
          data-bs-target="#addCameraModal"
        >
          <div className="right-portion d-flex">
            <div className="main-circle">
              <div className="plus-circle">
                <span>{plusSvg}</span>
              </div>
            </div>

            <h4 className="fs-6 text-white mt-2">Add New Camera</h4>
          </div>
        </button>
      </div>

      <div className="modal fade" id="addCameraModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content bg-dark">
            <div className="modal-body">
              <CameraModal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActionBar;
