import React from "react";
let key = "Kp3Gq9XwTzV8dA6sCfEhRb212345";
let divs = key.split("");
const Divider = () => (
  <div className="divider">
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
