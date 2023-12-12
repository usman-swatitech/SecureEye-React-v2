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
          <tbody >
            <tr>
              <td className="dashboard_td text-primary">john doe</td>
              <td className="dashboard_td text-primary">sw254</td>
              <td className="dashboard_td text-primary">1</td>
              <td className="dashboard_td text-primary">Normal</td>

              <td className="dashboard_td text-primary">16:29:04</td>
              <td className="dashboard_td text-primary">16:29:04</td>
              <td className="dashboard_td text-primary">16:29:04</td>
            </tr>
            <tr>
              <td className="dashboard_td text-danger">john doe</td>
              <td className="dashboard_td text-danger">sw254</td>
              <td className="dashboard_td text-danger">1</td>
              <td className="dashboard_td text-danger">Detected</td>
              <td className="dashboard_td text-danger">16:29:04</td>
              <td className="dashboard_td text-danger">16:29:04</td>
              <td className="dashboard_td text-danger">16:29:04</td>
            </tr>
            <tr>
              <td className="dashboard_td text-primary">john doe</td>
              <td className="dashboard_td text-primary">sw254</td>
              <td className="dashboard_td text-primary">1</td>
              <td className="dashboard_td text-primary">Normal</td>

              <td className="dashboard_td text-primary">16:29:04</td>
              <td className="dashboard_td text-primary">16:29:04</td>
              <td className="dashboard_td text-primary">16:29:04</td>
            </tr>
            <tr>
              <td className="dashboard_td text-primary">john doe</td>
              <td className="dashboard_td text-primary">sw254</td>
              <td className="dashboard_td text-primary">1</td>
              <td className="dashboard_td text-primary">Normal</td>

              <td className="dashboard_td text-primary">16:29:04</td>
              <td className="dashboard_td text-primary">16:29:04</td>
              <td className="dashboard_td text-primary">16:29:04</td>
            </tr>
            <tr>
              <td className="dashboard_td text-primary">john doe</td>
              <td className="dashboard_td text-primary">sw254</td>
              <td className="dashboard_td text-primary">1</td>
              <td className="dashboard_td text-primary">Normal</td>

              <td className="dashboard_td text-primary">16:29:04</td>
              <td className="dashboard_td text-primary">16:29:04</td>
              <td className="dashboard_td text-primary">16:29:04</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
