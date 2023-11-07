import React from "react";
import video from "../assets/mp4/test.mp4";
const SingleScreenLayout = () => {
  return (
    <section className="h-auto w-100 d-flex flex-column position-relative">
      <div
        style={{
          postion: "relative",
          width: "400px",
          height: "200px",
        }}
      >
        <video
          autoPlay
          muted
          loop
          className="position-absolute w-100 h-100"
          style={{ objectFit: "contain" }}
        >
          <source src={video} />
        </video>
      </div>
    </section>
  );
};

export default SingleScreenLayout;
