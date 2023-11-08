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
    <div
      className="layout-new w-100 h-auto position-relative d-flex justify-content-start justify-content-md-center bg-black m-0"
      style={{ overflow: "hidden", paddingTop: "12px", paddingBottom: "12px" }}
    >
      <img src={frame} alt="bg-cover" className="rootLayoutImage" />
      <div className="position-absolute top-0 d-flex  w-100 px-4">
        <Sidebar />
        <div className="d-flex flex-column w-100 ">
          <Search />
          <ActionBar />
          <div className="cameras-layout">{RenderComponents()}</div>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;

// Test Commit
