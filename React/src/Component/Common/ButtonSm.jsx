import React from "react";

const ButtonSm = (props) => {
  const { name } = props;
  return (
    <div className="btnWrapper m-0 p-0">
      <div className="btnInner p-0 m-0">
        <button className="btnFlat ">{name}</button>
      </div>
    </div>
  );
};

export default ButtonSm;
