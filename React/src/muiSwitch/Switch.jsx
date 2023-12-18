import React, { useState } from "react";

const Switch = (props) => {

  const [isChecked, setIsChecked] = useState(false);

  const{id,onChange} = props;
  const handleToggle = () => {
    onChange(id);
    setIsChecked(!isChecked);
  };
  
  return (
    <label className="switch-container">
      <input
        type="checkbox"
        className="switch-input"
        checked={isChecked}
        onChange={handleToggle}
      />
      <div className={`switch-track ${isChecked ? "checked" : ""}`}>
        <div className="switch-thumb"></div>
      </div>
    </label>
  );
};
export default Switch;