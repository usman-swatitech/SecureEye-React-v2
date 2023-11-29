import React, { useState, useEffect } from "react";

<<<<<<< HEAD
const Timer = ({ cameraStatus }) => {
=======
const Timer = () => {
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const mins = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${mins}:${seconds}`;
  };

>>>>>>> bd0f87968d02a01e2c2f878991c8e308915d8d4e
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

<<<<<<< HEAD
  function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, "0");
    const mins = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${mins}:${seconds}`;
  }

  const styles = {
    position: "absolute",
    color: "red",
    bottom: "8%", // Adjusted to 8% as it was overwritten in the original CSS
    height: "19px",
    width: "73px",
    backgroundColor: cameraStatus === "normal" ? "#002328" : "#200508",
    fontSize: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderLeft:
      cameraStatus === "normal"
        ? "3px solid var(--primary)"
        : "3px solid #630806",
    color: "white",
  };

  return <div style={styles}>{time}</div>;
=======
  return (
  <div className="time_stamp">{time}</div>
  );
>>>>>>> bd0f87968d02a01e2c2f878991c8e308915d8d4e
};

export default Timer;
