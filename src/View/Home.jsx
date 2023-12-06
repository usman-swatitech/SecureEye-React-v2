import React from "react";
import Sidebar from "../Component/Common/Sidebar";
import Search from "../Component/Common/Search";
import ActionBar from "../Component/Common/ActionBar";
import * as images from "../Constant/images";
import { hideSidebarSvg, openSidebarSvg } from "../Constant/svgs";
import {
  HomeLayout,
  DepartmentLayout,
  WorkingLayout,
  EmployeeLayout,
  SettingsLayout,
  SearchLayout,
  SingleScreenLayout,
} from "../HomeLayouts/index";
import { Store } from "../ContextAPI/Context";

const App = () => {
  // localStorage.clear("signInput");
  const { currentLayout, isSmall, handleClickToggle } = Store();
  const RenderComponents = () => {
    switch (currentLayout) {
      case "HomeLayout":
        return <HomeLayout />;
      case "EmployeeLayout":
        return <EmployeeLayout />;
      case "WorkingLayout":
        return <WorkingLayout />;
      case "DepartmentLayout":
        return <DepartmentLayout />;
      case "SettingsLayout":
        return <SettingsLayout />;
      case "SearchLayout":
        return <SearchLayout />;
      case "SingleScreenLayout":
        return <SingleScreenLayout />;
      default:
        return <HomeLayout />;
    }
  };
  return (
    <>
      <section className="w-100 bg-black position-relative main_wrapper ">
        {/* <div className="abs-div">abs div</div> */}

        <div className="second-div root_layout_inner_wrapper">
          <img src={images.homeFrame} alt="bg-cover" className="bg_cover" />
          <div className="main_screenView d-flex justify-content-start">
            <div className={`${isSmall ? "sm_sidebarView" : "sideBarView"}`}>
              <Sidebar />
              <span className="hide_sidebar_icon" onClick={handleClickToggle}>
                {isSmall ? openSidebarSvg : hideSidebarSvg}
              </span>
            </div>
            <div
              className={`${ isSmall ? "sm_mainComponent_view" : "mainComponentView" }`}>
              <div className="searchBar">
                <Search />
              </div>
              <div className="tabIcons">
                <ActionBar />
              </div>
              <div className="viewComponents">
                <div className="cameras_layout">{RenderComponents()}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
