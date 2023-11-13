import React from "react";
import video from "../../assets/mp4/test.mp4";
import { Store } from "../../context/Context";
const Cards = () => {
  const { setCurrentLayout } = Store();
  return (
    <div
      className="card camera_cards bg-transparent py-0.5 px-0 p-0 "
      onClick={() => {
        setCurrentLayout("SingleScreenLayout");
      }}
    >
      <div className="card-body rounded-0 py-2">
        <p className="card-title p-0 m-0 text-sm text-white">CAMERA 01</p>
        <div
          style={{ height: "0.5px", width: "100%", backgroundColor: "#dadde3" }}
        ></div>
        <video
          autoPlay
          loop
          muted
          className="card-img-top rounded-0 mt-2 cursor-pointer"
        >
          <source src={video} />
        </video>
      </div>
    </div>
  );
};

export default Cards;
