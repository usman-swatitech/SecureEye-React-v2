import React, { useState, useEffect } from "react";

const Timer = () => {
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const mins = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${mins}:${seconds}`;
  };

  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
  <div className="time_stamp">{time}</div>
  );
};

export default Timer;
