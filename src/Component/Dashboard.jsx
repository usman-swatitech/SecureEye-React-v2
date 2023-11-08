import React from "react";
import Sidebar from "./Common/Sidebar";
import Search from "./Common/Search";
import ActionBar from "./Common/ActionBar";
import Cards from "../Test/Cards";
const Dashboard = () => {
  return (
    <section className="w-100  container-fluid  d-flex justify-content-center bg-black p-0 m-0">
      <div className="w-50 dashboard-bg d-flex">
        <Sidebar />
        <div className=" w-100 d-flex flex-column">
          <Search />
          <ActionBar />
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
