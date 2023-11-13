import Table from "../Component/Common/Table";
import Cards from "../Test/Cards";

const HomeLayout = () => {
  return (
    // <section className="home-screen-layout w-100 d-flex flex-column gap-1">
    //   <div className="cards-layout ">
    //     <Cards />
    //     <Cards />
    //     <Cards />
    //     <Cards />
    //     <Cards />
    //     <Cards />
    //     <Cards />
    //     <Cards />
    //     <Cards />
    //     <Cards />
    //     <Cards />
    //     <Cards />
    //   </div>
    //   <div className="flex flex-column gap-2  justify-content-start">
    //     <label
    //       style={{
    //         fontSize: "18px",
    //         fontWeight: "200",
    //         lineHeight: "22px",
    //         color: "var(--main-white-color)",
    //       }}
    //     >
    //       Employee Information
    //     </label>
    //     <div className="table-layout">
    //       <Table />
    //     </div>
    //   </div>
    // </section>
    <section className="main_home_screen">
      <div className="cctv_ameras scrollbar_style">
        <div className="cards-layout ">
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
      <Table />
      </div>
    </section>
  );
};

export default HomeLayout;
