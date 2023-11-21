import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState("");
  let temp = "";
  useEffect(() => {
    const timerId = setInterval(() => {
      let date = new Date();
      let hours = date.getHours();
      let mins = date.getMinutes();
      let seconds = date.getSeconds();
      temp = `${hours}:${mins}:${seconds}`;
      setTime(temp);
    }, 1000);
    return () => clearInterval(timerId);
  }, []);
  return <div className="time_stamp">{time}</div>;
};

export default Timer;
