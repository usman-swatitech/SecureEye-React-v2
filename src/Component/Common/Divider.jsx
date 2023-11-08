import React from "react";
let key = "Kp3Gq9XwTzV8dA6sCfEhRb2123456";
let divs = key.split("");
const Divider = () => (
  <div className="bars-wrapper">
    {divs.map((_, index) => (
      <div
        key={index}
        className={`${
          index === 0 || index === divs.length - 1 ? "bar-startend" : "bars"
        }`}
      ></div>
    ))}
  </div>
);

export default Divider;
