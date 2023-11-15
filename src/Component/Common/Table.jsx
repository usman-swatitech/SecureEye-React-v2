import React from "react";

const Table = (props) => {
  const { heading } = props;
  return (
    <>
      <div className="table-responsive">
        <table className="table table-borderless">
          <thead className="sticky-header">
            <tr>
              {heading.map((label, index) => (
                <th key={index} scope="col" className="dashboard_th">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td className="dashboard_td">john doe</td>
              <td className="dashboard_td">sw254</td>
              <td className="dashboard_td">1</td>
              <td className="dashboard_td">Normal</td>

              <td className="dashboard_td">16:29:04</td>
              <td className="dashboard_td">16:29:04</td>
              <td className="dashboard_td">16:29:04</td>
            </tr>
            <tr>
              <td className="dashboard_td">john doe</td>
              <td className="dashboard_td">sw254</td>
              <td className="dashboard_td">1</td>
              <td className="dashboard_td">Normal</td>

              <td className="dashboard_td">16:29:04</td>
              <td className="dashboard_td">16:29:04</td>
              <td className="dashboard_td">16:29:04</td>
            </tr>
            <tr>
              <td className="dashboard_td">john doe</td>
              <td className="dashboard_td">sw254</td>
              <td className="dashboard_td">1</td>
              <td className="dashboard_td">Normal</td>

              <td className="dashboard_td">16:29:04</td>
              <td className="dashboard_td">16:29:04</td>
              <td className="dashboard_td">16:29:04</td>
            </tr>
            <tr>
              <td className="dashboard_td">john doe</td>
              <td className="dashboard_td">sw254</td>
              <td className="dashboard_td">1</td>
              <td className="dashboard_td">Normal</td>

              <td className="dashboard_td">16:29:04</td>
              <td className="dashboard_td">16:29:04</td>
              <td className="dashboard_td">16:29:04</td>
            </tr>
            <tr>
              <td className="dashboard_td">john doe</td>
              <td className="dashboard_td">sw254</td>
              <td className="dashboard_td">1</td>
              <td className="dashboard_td">Normal</td>

              <td className="dashboard_td">16:29:04</td>
              <td className="dashboard_td">16:29:04</td>
              <td className="dashboard_td">16:29:04</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
