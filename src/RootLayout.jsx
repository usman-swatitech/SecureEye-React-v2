import Sidebar from "./Component/Common/Sidebar";
import Search from "./Component/Common/Search";
import ActionBar from "./Component/Common/ActionBar";
import Cards from "./Test/Cards";
import frame from "./assets/images/frame.png";
const RootLayout = () => {
  return (
    <div className="layout-new w-100 h-auto position-relative d-flex justify-content-start justify-content-md-center bg-black p-2">
      <img src={frame} alt="bg-cover" className="rootLayoutImage" />
      <div className="position-absolute top-0 d-flex  w-100 px-4">
        <Sidebar />
        <div className="d-flex flex-column w-100 ">
          <Search />
          <ActionBar />
          <div className="cameras-layout">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
