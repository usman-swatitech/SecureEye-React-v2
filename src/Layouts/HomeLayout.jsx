import Table from "../Component/Common/Table";
import Cards from "../Test/Cards";

const HomeLayout = () => {
  return (
    <section className="home-screen-layout w-100 d-flex flex-column gap-2">
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
      <label
        style={{
          fontSize: "18px",
          fontWeight: "200",
          lineHeight: "22px",
          color: "var(--main-white-color)",
        }}
      >
        Employee Information
      </label>
      <div className="table-layout">
        <Table />
      </div>
    </section>
  );
};

export default HomeLayout;
