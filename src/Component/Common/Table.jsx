// import './dashboard.css'

function Table({ heading }) {
  return (
    <>
      <div className="container bg-dark">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 p-0">
            <div className="table-responsive">
              <table className="table table-borderless mt-1">
                <thead>
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
                  {/* <tr>
                    <td className="dashboard_td_1">john doe</td>
                    <td className="dashboard_td_1">sw264</td>
                    <td className="dashboard_td_1">-</td>
                    <td className="dashboard_td_1">Detected</td>

                    <td className="dashboard_td_1">16:29:04</td>
                    <td className="dashboard_td_1">16:29:04</td>
                    <td className="dashboard_td_1">16:29:04</td>
                  </tr> */}

                  <tr>
                    <td className="dashboard_td">john doe</td>
                    <td className="dashboard_td">sw254</td>
                    <td className="dashboard_td">1</td>
                    <td className="dashboard_td">Normal</td>

                    <td className="dashboard_td">16:29:04</td>
                    <td className="dashboard_td">16:29:04</td>
                    <td className="dashboard_td">16:29:04</td>
                  </tr>
                  {/* <tr>
                    <td className="dashboard_td_1">john doe</td>
                    <td className="dashboard_td_1">sw264</td>
                    <td className="dashboard_td_1">-</td>
                    <td className="dashboard_td_1">Detected</td>

                    <td className="dashboard_td_1">16:29:04</td>
                    <td className="dashboard_td_1">16:29:04</td>
                    <td className="dashboard_td_1">16:29:04</td>
                  </tr> */}

                  <tr>
                    <td className="dashboard_td">john doe</td>
                    <td className="dashboard_td">sw254</td>
                    <td className="dashboard_td">1</td>
                    <td className="dashboard_td">Normal</td>

                    <td className="dashboard_td">16:29:04</td>
                    <td className="dashboard_td">16:29:04</td>
                    <td className="dashboard_td">16:29:04</td>
                  </tr>
                  {/* <tr>
                    <td className="dashboard_td_1">john doe</td>
                    <td className="dashboard_td_1">sw264</td>
                    <td className="dashboard_td_1">-</td>
                    <td className="dashboard_td_1">Detected</td>

                    <td className="dashboard_td_1">16:29:04</td>
                    <td className="dashboard_td_1">16:29:04</td>
                    <td className="dashboard_td_1">16:29:04</td>
                  </tr> */}

                  <tr>
                    <td className="dashboard_td">john doe</td>
                    <td className="dashboard_td">sw254</td>
                    <td className="dashboard_td">1</td>
                    <td className="dashboard_td">Normal</td>

                    <td className="dashboard_td">16:29:04</td>
                    <td className="dashboard_td">16:29:04</td>
                    <td className="dashboard_td">16:29:04</td>
                  </tr>
                  {/* <tr>
                    <td className="dashboard_td_1">john doe</td>
                    <td className="dashboard_td_1">sw264</td>
                    <td className="dashboard_td_1">-</td>
                    <td className="dashboard_td_1">Detected</td>

                    <td className="dashboard_td_1">16:29:04</td>
                    <td className="dashboard_td_1">16:29:04</td>
                    <td className="dashboard_td_1">16:29:04</td>
                  </tr> */}

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
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
