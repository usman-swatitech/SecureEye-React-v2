import Sidebar from "./Component/Common/Sidebar";
import Search from "./Component/Common/Search";
import ActionBar from "./Component/Common/ActionBar";
import frame from "./assets/images/frame.png";
import "./test.css";
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
import Divider from "./Component/Common/Divider";
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
    <section className="w-100 bg-black position-relative main-wrapper">
      {/* <div className="abs-div">abs div</div> */}

      <div className="second-div" style={{ zIndex: "9999" }}>
        <img src={frame} alt="bg-cover" className="bg-cover" />
        <Sidebar />
        <div className="content-area">
          <Search />
          <ActionBar />
          <Divider />
          <div className="cameras-layout">{RenderComponents()}</div>
        </div>
      </div>
    </section>
  );
};

export default RootLayout;

// Test Commit

{
  /* <div
      className="layout-new w-100  position-relative d-flex justify-content-start justify-content-md-center bg-black m-0"
      style={{ overflow: "hidden", paddingTop: "12px", paddingBottom: "12px" }}
    >
      <img src={frame} alt="bg-cover" className="rootLayoutImage" />
      <div className="position-absolute top-0 d-flex  w-100 px-4 main-wrapper">
        <Sidebar />
        <div className="d-flex flex-column w-100 ">
          <Search />
          <ActionBar />
          <div className="cameras-layout">{RenderComponents()}</div>
        </div>
      </div>
    </div> */
}
