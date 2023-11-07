// import './dashboard.css'

function Table() {
  return (
    <>
      <div className="container" style={{ backgroundColor: "black" }}>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="p-0">
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "200",
                  lineHeight: "22px",
                  color: "var(--main-white-color)",
                }}
              >
                Employee Information
              </p>

              {/* ends */}
              <div className="table-responsive">
                <table className="table table-borderless mt-4">
                  <thead>
                    <tr>
                      <th scope="col" className="dashboard_th">
                        Employee Name
                      </th>
                      <th scope="col" className="dashboard_th">
                        Employee id
                      </th>
                      <th scope="col" className="dashboard_th">
                        Level Access
                      </th>
                      <th scope="col" className="dashboard_th">
                        Status
                      </th>
                      <th scope="col" className="dashboard_th">
                        Check-in
                      </th>
                      <th scope="col" className="dashboard_th">
                        Check-out
                      </th>
                      <th scope="col" className="dashboard_th">
                        Check-out
                      </th>
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
                      <td className="dashboard_td_1">john doe</td>
                      <td className="dashboard_td_1">sw264</td>
                      <td className="dashboard_td_1">-</td>
                      <td className="dashboard_td_1">Detected</td>

                      <td className="dashboard_td_1">16:29:04</td>
                      <td className="dashboard_td_1">16:29:04</td>
                      <td className="dashboard_td_1">16:29:04</td>
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
                      <td className="dashboard_td_1">john doe</td>
                      <td className="dashboard_td_1">sw264</td>
                      <td className="dashboard_td_1">-</td>
                      <td className="dashboard_td_1">Detected</td>

                      <td className="dashboard_td_1">16:29:04</td>
                      <td className="dashboard_td_1">16:29:04</td>
                      <td className="dashboard_td_1">16:29:04</td>
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
                      <td className="dashboard_td_1">john doe</td>
                      <td className="dashboard_td_1">sw264</td>
                      <td className="dashboard_td_1">-</td>
                      <td className="dashboard_td_1">Detected</td>

                      <td className="dashboard_td_1">16:29:04</td>
                      <td className="dashboard_td_1">16:29:04</td>
                      <td className="dashboard_td_1">16:29:04</td>
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
                      <td className="dashboard_td_1">john doe</td>
                      <td className="dashboard_td_1">sw264</td>
                      <td className="dashboard_td_1">-</td>
                      <td className="dashboard_td_1">Detected</td>

                      <td className="dashboard_td_1">16:29:04</td>
                      <td className="dashboard_td_1">16:29:04</td>
                      <td className="dashboard_td_1">16:29:04</td>
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
                      <td className="dashboard_td_1">john doe</td>
                      <td className="dashboard_td_1">sw264</td>
                      <td className="dashboard_td_1">-</td>
                      <td className="dashboard_td_1">Detected</td>

                      <td className="dashboard_td_1">16:29:04</td>
                      <td className="dashboard_td_1">16:29:04</td>
                      <td className="dashboard_td_1">16:29:04</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12"></div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="add_camera_modal p-3">
              <div className="text-center add_camera_text mt-5 mb-4">
                Add new camera
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12"></div>
        </div> */}
      </div>
    </>
  );
}

export default Table;
