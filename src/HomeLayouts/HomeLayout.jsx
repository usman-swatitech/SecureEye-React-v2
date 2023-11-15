import Table from "../Component/Common/Table";
import Cards from "../Component/Common/Cards";
import { homeTableHeading } from "../Constant/table";

const HomeLayout = () => {
  return (
    <section className="main_home_screen">
      <div className="cctv_ameras scrollbar_style">
        <div className="cards_layout ">
          <Cards />
          <Cards />
          <Cards />
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
      <label className="EmployeeInformation">Employee Information</label>
      <div className="alert_table scrollbar_style">
        <Table heading={homeTableHeading} />
      </div>
    </section>
  );
};

export default HomeLayout;
