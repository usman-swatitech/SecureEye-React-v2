import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {employeHeading} from '../Constant/tableHeading'
import {homeIcon,dotGreater,tickSign} from '../Constant/svgs';

const EmployeeLayout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 13;

  // Your employee data array
  const employeeData = [
    {
      name: "John Doe",
      id: "EMP2023001",
      levelAccess: "1",
      status: "normal",
      checkIn: "16:29:04",
      checkOut: "16:29:04",
      hours: "08: 12",
    },
    {
      name: "John Doe",
      id: "EMP2023001",
      levelAccess: "1",
      status: "normal",
      checkIn: "16:29:04",
      checkOut: "16:29:04",
      hours: "08: 12",
    },
    {
      name: "John Doe",
      id: "EMP2023001",
      levelAccess: "1",
      status: "normal",
      checkIn: "16:29:04",
      checkOut: "16:29:04",
      hours: "08: 12",
    },
    {
      name: "John Doe",
      id: "EMP2023001",
      levelAccess: "1",
      status: "normal",
      checkIn: "16:29:04",
      checkOut: "16:29:04",
      hours: "08: 12",
    },
    {
      name: "John Doe",
      id: "EMP2023001",
      levelAccess: "1",
      status: "normal",
      checkIn: "16:29:04",
      checkOut: "16:29:04",
      hours: "08: 12",
    },
    {
      name: "John Doe",
      id: "EMP2023001",
      levelAccess: "1",
      status: "normal",
      checkIn: "16:29:04",
      checkOut: "16:29:04",
      hours: "08: 12",
    },
    {
      name: "John Doe",
      id: "EMP2023001",
      levelAccess: "1",
      status: "normal",
      checkIn: "16:29:04",
      checkOut: "16:29:04",
      hours: "08: 12",
    },
    {
      name: "John Doe",
      id: "EMP2023001",
      levelAccess: "1",
      status: "normal",
      checkIn: "16:29:04",
      checkOut: "16:29:04",
      hours: "08: 12",
    },
    {
      name: "John Doe",
      id: "EMP2023001",
      levelAccess: "1",
      status: "normal",
      checkIn: "16:29:04",
      checkOut: "16:29:04",
      hours: "08: 12",
    },
    {
      name: "John Doe",
      id: "EMP2023001",
      levelAccess: "1",
      status: "normal",
      checkIn: "16:29:04",
      checkOut: "16:29:04",
      hours: "08: 12",
    },
    {
      name: "John Doe",
      id: "EMP2023001",
      levelAccess: "1",
      status: "normal",
      checkIn: "16:29:04",
      checkOut: "16:29:04",
      hours: "08: 12",
    },
    {
      name: "John Doe",
      id: "EMP2023001",
      levelAccess: "1",
      status: "normal",
      checkIn: "16:29:04",
      checkOut: "16:29:04",
      hours: "08: 12",
    },
    {
      name: "John Doe",
      id: "EMP2023001",
      levelAccess: "1",
      status: "normal",
      checkIn: "16:29:04",
      checkOut: "16:29:04",
      hours: "08: 12",
    },
    {
      name: "John Doe",
      id: "EMP2023001",
      levelAccess: "1",
      status: "normal",
      checkIn: "16:29:04",
      checkOut: "16:29:04",
      hours: "08: 12",
    },
    {
      name: "Muhammad Usman",
      id: "EMP2023001",
      levelAccess: "1",
      status: "normal",
      checkIn: "16:29:04",
      checkOut: "16:29:04",
      hours: "08: 12",
    },
  ];

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = employeeData.slice(indexOfFirstRow, indexOfLastRow);

  const totalRows = employeeData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="container bg-dark mt-3">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 px-0 ">
          <div className="row table_header pr-1 align-items-baseline">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="row g-0">
                <div className="col-lg-2 col-md-2 col-sm-12 m-0 p-0">
                  <div className="svgWithText pt-2 pb-2">
                    {homeIcon}
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 m-0 p-0">
                  <div className="bg_level p-0 m-0 mmm">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <p className="text-primary ps-3 pt-2 pb-2 m-0">
                        Department
                      </p>
                      {dotGreater}
                    </div>
                  </div>
                  <div className="bg_lightGreen text-center p-0 m-0">
                    {tickSign}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="row g-0">
                <div className="col-lg-2 col-md-2 col-sm-12 m-0 p-0">
                  <div className="svgWithText pt-2 pb-2">
                    {homeIcon}
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 m-0 p-0">
                  <div className="bg_level p-0 m-0 mmm">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <p className="text-primary ps-3 pt-2 pb-2 m-0">
                        Level Access
                      </p>
                      {dotGreater}
                    </div>
                  </div>
                  <div className="bg_lightGreen text-center p-0 m-0">
                    {tickSign}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between me-2">
            <div>
              <label className="pagesLabel text-white font-weight-bold">Page {`${currentPage} / ${totalPages}`}</label>
            </div>
            <div className="pagination">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`paginationArrow
                    ${currentPage === 1
                    ? 'arrowColorDark'
                    : 'arrowColorLight'}`}
              >
                <ArrowBackIcon />
              </button>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage === Math.ceil(employeeData.length / rowsPerPage)
                }
                className={`paginationArrow
                    ${currentPage === Math.ceil(employeeData.length / rowsPerPage)
                    ? 'arrowColorDark'
                    : 'arrowColorLight'}`}
              >
                <ArrowForwardIcon />
              </button>
            </div>
          </div>
          <div className="emloyee_table scrollbar_style mt-2">
            <div className="table-responsive">
              <table className="table table-borderless">
                <thead className="sticky-header">
                  <tr>
                    {employeHeading.map((item,index)=>
                      <th key={index} scope="col" className="dashboard_th">{item}</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {currentRows.map((item, index) => (
                    <tr key={index}>
                      <td className="dashboard_td text-primary">{item.name}</td>
                      <td className="dashboard_td text-primary">{item.id}</td>
                      <td className="dashboard_td text-primary">{item.levelAccess}</td>
                      <td className="dashboard_td text-primary">{item.status}</td>
                      <td className="dashboard_td text-primary">{item.checkIn}</td>
                      <td className="dashboard_td text-primary">{item.checkOut}</td>
                      <td className="dashboard_td text-primary">{item.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLayout;
