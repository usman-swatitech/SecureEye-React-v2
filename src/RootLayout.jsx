import Sidebar from "./Component/Common/Sidebar";
import Search from "./Component/Common/Search";
import ActionBar from "./Component/Common/ActionBar";
import frame from "./assets/images/frame.png";
import {
  HomeLayout,
  DepartmentLayout,
  WorkingLayout,
  EmployeeLayout,
  SettingsLayout,
  SearchLayout,
  SingleScreenLayout,
} from "./Layouts/index";
import { Store } from "./context/Context";
import TestSidebar from "./Test/TestSidebar";
// import Divider from "./Component/Common/Divider";
const RootLayout = () => {
  const { currentLayout } = Store();
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
    <section className="w-100 bg-black position-relative main_wrapper ">
      {/* <div className="abs-div">abs div</div> */}

      <div className="second-div root_layout_inner_wrapper">
        <img src={frame} alt="bg-cover" className="bg_cover" />
        <div className="main_screenView d-flex justify-content-center">
          <div className="sideBarView">
            <Sidebar />
          </div>
          <div className="mainComponentView">
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
  );
};

export default RootLayout;
