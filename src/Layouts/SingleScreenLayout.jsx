import React from "react";
import video from "../assets/mp4/test.mp4";
import Table from "../Component/Common/Table";
import frame from "../Component/frames/frame.png";
const SingleScreenLayout = () => {
  return (
    // <section className="h-auto w-100 d-flex flex-column position-relative gap-2">
    //   <div className="single-camera-frame crads-layout">
    //     <img src={frame} al="frame" className="single-camera-frame" />
    //     <div className="frame-inner ">
    //       <label className="text-white ms-3 pb-1">CAMERA 01</label>
    //       <video
    //         autoPlay
    //         loop
    //         muted
    //         className="w-100"
    //         onContextMenu={(e) => e.preventDefault()}
    //       >
    //         <source src={video} />
    //       </video>
    //     </div>
    //   </div>
    //   <p
    //     style={{
    //       fontSize: "18px",
    //       fontWeight: "200",
    //       lineHeight: "22px",
    //       color: "var(--main-white-color)",
    //     }}
    //     className="emp-p-tag"
    //   >
    //     Employee Information
    //   </p>
    //   <div className="table-layout-2 flex-1">
    //     <Table />
    //   </div>
    // </section>
    <section className="single_screen_view">
    <div className="scrren_cctv_sty">
    <div className="single-camera-frame crads-layout">
        <img src={frame} al="frame" className="single-camera-frame" />
        <div className="frame-inner ">
          <label className="text-white ms-3 pb-1">CAMERA 01</label>
          <video
            autoPlay
            loop
            muted
            className="w-100"
            onContextMenu={(e) => e.preventDefault()}
          >
            <source src={video} />
          </video>
        </div>
      </div>
    </div>
    <label className="EmployeeInformation">Employee Information</label>
    <div className="scrren_cctv_tabel_sty scrollbar_style">
    <Table />
    </div>
    </section>
  );
};

export default SingleScreenLayout;
