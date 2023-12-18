import React, { useState } from "react";
import Button from "../Component/Common/ButtonSm";

const PersonalInformation = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };

  const [isChecked2, setIsChecked2] = useState(false);
  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  const [isChecked3, setIsChecked3] = useState(false);
  const handleCheckboxChange3 = () => {
    setIsChecked3(!isChecked3);
  };
  return (
    <div className="w-100 d-flex flex-column position-relative formInputs">
      <div className="row ms-3 me-3">
        <div className="col-lg-12 col-md-12 col-sm-12 px-0">
          <div>
            <p className="privacy_heading">Profile Privacy</p>
            <p className="privacy_heading2">
              Determine who can follow you, see your profile, and view your
              workout activity.
            </p>
            <p className="privacy_heading3">
              Who can follow you and view your profile:
            </p>
            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex gap-2 text-white">
                <label className="custom_checkbox_modal">
                  <input
                    type="checkbox"
                    checked={isChecked1}
                    onChange={handleCheckboxChange1}
                  />
                  <span className="checkmark_modal"></span>
                </label>
                <p className="privacy_heading3">Make Profile Private</p>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <p className="privacy_heading">Running Routes</p>
            <p className="privacy_heading2">
              When your routes are private, only you can see them in your
              workout history.
            </p>
            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex gap-2 text-white">
                <label className="custom_checkbox_modal">
                  <input
                    type="checkbox"
                    checked={isChecked2}
                    onChange={handleCheckboxChange2}
                  />
                  <span className="checkmark_modal"></span>
                </label>
                <p className="privacy_heading3">
                  Make My Running Routes Private
                </p>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <p className="privacy_heading">Age and Gender</p>
            <p className="privacy_heading2">
              This will hide your age group and gender on the Here Now sidebar
              from others.
            </p>
            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex gap-2 text-white">
                <label className="custom_checkbox_modal">
                  <input
                    type="checkbox"
                    checked={isChecked3}
                    onChange={handleCheckboxChange3}
                  />
                  <span className="checkmark_modal"></span>
                </label>
                <p className="privacy_heading3">
                  Make My Age and Gender Private
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4 pt-2">
          <div className=" col-6">
            <Button name="Save Changes" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
