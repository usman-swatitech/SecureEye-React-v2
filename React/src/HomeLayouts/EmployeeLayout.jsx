import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const EmployeeLayout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 14;

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
      name: "Muhammad Usman",
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
                    <svg
                      className="p-0 m-0"
                      width="47"
                      height="47"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.5661 13.1423C17.6536 13.1423 17.7323 13.1717 17.7994 13.2215L17.7148 13.2479C17.6711 13.2245 17.6215 13.2098 17.5661 13.2098C17.4787 13.2098 17.397 13.245 17.3416 13.3066L17.3271 13.2919C17.2717 13.3418 17.2367 13.4152 17.2367 13.4973C17.2367 13.512 17.2367 13.5266 17.2396 13.5442L17.2513 13.5413C17.2571 13.7085 17.397 13.8434 17.5661 13.8434C17.7381 13.8434 17.881 13.7026 17.881 13.5266C17.881 13.4973 17.8781 13.465 17.8693 13.4386L17.9335 13.4181C17.9422 13.4533 17.948 13.4885 17.948 13.5266C17.948 13.7378 17.776 13.9109 17.5661 13.9109C17.3562 13.9109 17.1842 13.7378 17.1842 13.5266C17.1842 13.3154 17.3533 13.1423 17.5661 13.1423ZM17.7469 13.2714L17.8227 13.2479C17.8314 13.2567 17.8402 13.2655 17.8489 13.2743L17.776 13.2978C17.7702 13.2861 17.7585 13.2802 17.7469 13.2714ZM17.8023 13.3213L17.8722 13.2978C17.8781 13.3066 17.8868 13.3183 17.8926 13.3271L17.8256 13.3477C17.8198 13.3418 17.811 13.3301 17.8023 13.3213ZM17.8431 13.3799L17.9101 13.3594C17.916 13.3682 17.9189 13.3799 17.9247 13.3917L17.8606 13.4122C17.8518 13.3976 17.846 13.3887 17.8431 13.3799Z"
                        fill="#00030A"
                      />
                      <path
                        d="M26 14.3072V23.2113C25.9995 23.6855 25.8121 24.1402 25.4788 24.4756C25.1455 24.8109 24.6936 24.9995 24.2222 25H21.2593C20.9449 25 20.6435 24.8744 20.4212 24.6507C20.1989 24.4271 20.0741 24.1238 20.0741 23.8075V20.5283C20.0741 20.3701 20.0116 20.2185 19.9005 20.1067C19.7894 19.9948 19.6386 19.932 19.4815 19.932H16.5185C16.3614 19.932 16.2106 19.9948 16.0995 20.1067C15.9884 20.2185 15.9259 20.3701 15.9259 20.5283V23.8075C15.9259 24.1238 15.8011 24.4271 15.5788 24.6507C15.3565 24.8744 15.0551 25 14.7407 25H11.7778C11.3064 24.9995 10.8545 24.8109 10.5212 24.4756C10.1879 24.1402 10.0005 23.6855 10 23.2113V14.3072C10.0004 14.1013 10.0536 13.8989 10.1544 13.7197C10.2552 13.5405 10.4002 13.3904 10.5754 13.284L17.3902 9.17003C17.5745 9.05877 17.7853 9 18.0001 9C18.215 9 18.4258 9.05877 18.6101 9.17003L25.4249 13.284C25.6 13.3905 25.745 13.5406 25.8457 13.7198C25.9465 13.899 25.9996 14.1013 26 14.3072Z"
                        fill="#07111A"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.5 0C21.5076 0 25.1145 1.33589 28.187 3.60688L24.313 4.80917C22.3092 3.74046 20.0382 3.07254 17.5 3.07254C13.4924 3.07254 9.75192 4.67558 7.21375 7.48092L6.54581 6.81298C4.00765 9.08397 2.40458 12.4237 2.40458 16.1641C2.40458 16.8321 2.40459 17.5 2.53818 18.3015L3.07252 18.1679C3.3397 25.7824 9.75192 31.9275 17.5 31.9275C25.3817 31.9275 31.9275 25.5153 31.9275 17.5C31.9275 16.1641 31.7939 14.6947 31.3931 13.4924L34.3321 12.5573C34.7328 14.1603 35 15.7634 35 17.5C35 27.1183 27.1183 35 17.5 35C7.88169 35 0 27.1183 0 17.5C0 7.88168 7.7481 0 17.5 0ZM25.7824 5.87789L29.2557 4.80917C29.6565 5.20993 30.0573 5.61068 30.458 6.01145L27.1183 7.08017C26.8512 6.54582 26.3168 6.27866 25.7824 5.87789ZM28.3206 8.14886L31.5267 7.08017C31.7939 7.48094 32.1947 8.01529 32.4618 8.41605L29.3893 9.35114C29.1221 9.08397 28.7214 8.54962 28.3206 8.14886ZM30.1909 10.8206L33.2634 9.88552C33.5306 10.2863 33.6641 10.8206 33.9313 11.355L30.9924 12.2901C30.5916 11.6221 30.3244 11.2214 30.1909 10.8206Z"
                        fill="#07111A"
                      />
                    </svg>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 m-0 p-0">
                  <div className="bg_level p-0 m-0 mmm">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <p className="text-primary ps-3 pt-2 pb-2 m-0">
                        Department
                      </p>
                      <svg
                        className="me-2"
                        width="4"
                        height="6"
                        viewBox="0 0 4 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.85464 5.35376H3.61494V3.59353H1.85464L1.85464 5.35376Z"
                          fill="#00FFFB"
                        />
                        <path
                          d="M1.85464 1.77393L3.61494 1.77393V0.0137275L1.85464 0.0137275L1.85464 1.77393Z"
                          fill="#00FFFB"
                        />
                        <path
                          d="M0.0657078 3.56396H1.82587L1.82587 1.80374L0.0657078 1.80374L0.0657078 3.56396Z"
                          fill="#00FFFB"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="bg_lightGreen text-center p-0 m-0">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.05258 10C5.0509 10 5.04894 10 5.04726 10C4.97786 9.9987 4.91238 9.97109 4.86536 9.9237L0.0671715 5.06859C-0.0151024 4.98526 -0.0226581 4.85974 0.0492616 4.76834C0.121181 4.67719 0.252148 4.64594 0.362406 4.69386L4.75398 6.60736C4.79092 6.62351 4.83458 6.6157 4.86284 6.58835L11.5617 0.0731228C11.6524 -0.0151566 11.8007 -0.0247919 11.9037 0.0512482C12.0067 0.127288 12.0305 0.263744 11.9585 0.366085L5.29492 9.86537C5.28541 9.87917 5.27421 9.89167 5.2619 9.90339L5.23252 9.93073C5.18466 9.975 5.11974 10 5.05258 10Z"
                        fill="#00FFFB"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="row g-0">
                <div className="col-lg-2 col-md-2 col-sm-12 m-0 p-0">
                  <div className="svgWithText pt-2 pb-2">
                    <svg
                      className="p-0 m-0"
                      width="47"
                      height="47"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.5661 13.1423C17.6536 13.1423 17.7323 13.1717 17.7994 13.2215L17.7148 13.2479C17.6711 13.2245 17.6215 13.2098 17.5661 13.2098C17.4787 13.2098 17.397 13.245 17.3416 13.3066L17.3271 13.2919C17.2717 13.3418 17.2367 13.4152 17.2367 13.4973C17.2367 13.512 17.2367 13.5266 17.2396 13.5442L17.2513 13.5413C17.2571 13.7085 17.397 13.8434 17.5661 13.8434C17.7381 13.8434 17.881 13.7026 17.881 13.5266C17.881 13.4973 17.8781 13.465 17.8693 13.4386L17.9335 13.4181C17.9422 13.4533 17.948 13.4885 17.948 13.5266C17.948 13.7378 17.776 13.9109 17.5661 13.9109C17.3562 13.9109 17.1842 13.7378 17.1842 13.5266C17.1842 13.3154 17.3533 13.1423 17.5661 13.1423ZM17.7469 13.2714L17.8227 13.2479C17.8314 13.2567 17.8402 13.2655 17.8489 13.2743L17.776 13.2978C17.7702 13.2861 17.7585 13.2802 17.7469 13.2714ZM17.8023 13.3213L17.8722 13.2978C17.8781 13.3066 17.8868 13.3183 17.8926 13.3271L17.8256 13.3477C17.8198 13.3418 17.811 13.3301 17.8023 13.3213ZM17.8431 13.3799L17.9101 13.3594C17.916 13.3682 17.9189 13.3799 17.9247 13.3917L17.8606 13.4122C17.8518 13.3976 17.846 13.3887 17.8431 13.3799Z"
                        fill="#00030A"
                      />
                      <path
                        d="M26 14.3072V23.2113C25.9995 23.6855 25.8121 24.1402 25.4788 24.4756C25.1455 24.8109 24.6936 24.9995 24.2222 25H21.2593C20.9449 25 20.6435 24.8744 20.4212 24.6507C20.1989 24.4271 20.0741 24.1238 20.0741 23.8075V20.5283C20.0741 20.3701 20.0116 20.2185 19.9005 20.1067C19.7894 19.9948 19.6386 19.932 19.4815 19.932H16.5185C16.3614 19.932 16.2106 19.9948 16.0995 20.1067C15.9884 20.2185 15.9259 20.3701 15.9259 20.5283V23.8075C15.9259 24.1238 15.8011 24.4271 15.5788 24.6507C15.3565 24.8744 15.0551 25 14.7407 25H11.7778C11.3064 24.9995 10.8545 24.8109 10.5212 24.4756C10.1879 24.1402 10.0005 23.6855 10 23.2113V14.3072C10.0004 14.1013 10.0536 13.8989 10.1544 13.7197C10.2552 13.5405 10.4002 13.3904 10.5754 13.284L17.3902 9.17003C17.5745 9.05877 17.7853 9 18.0001 9C18.215 9 18.4258 9.05877 18.6101 9.17003L25.4249 13.284C25.6 13.3905 25.745 13.5406 25.8457 13.7198C25.9465 13.899 25.9996 14.1013 26 14.3072Z"
                        fill="#07111A"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.5 0C21.5076 0 25.1145 1.33589 28.187 3.60688L24.313 4.80917C22.3092 3.74046 20.0382 3.07254 17.5 3.07254C13.4924 3.07254 9.75192 4.67558 7.21375 7.48092L6.54581 6.81298C4.00765 9.08397 2.40458 12.4237 2.40458 16.1641C2.40458 16.8321 2.40459 17.5 2.53818 18.3015L3.07252 18.1679C3.3397 25.7824 9.75192 31.9275 17.5 31.9275C25.3817 31.9275 31.9275 25.5153 31.9275 17.5C31.9275 16.1641 31.7939 14.6947 31.3931 13.4924L34.3321 12.5573C34.7328 14.1603 35 15.7634 35 17.5C35 27.1183 27.1183 35 17.5 35C7.88169 35 0 27.1183 0 17.5C0 7.88168 7.7481 0 17.5 0ZM25.7824 5.87789L29.2557 4.80917C29.6565 5.20993 30.0573 5.61068 30.458 6.01145L27.1183 7.08017C26.8512 6.54582 26.3168 6.27866 25.7824 5.87789ZM28.3206 8.14886L31.5267 7.08017C31.7939 7.48094 32.1947 8.01529 32.4618 8.41605L29.3893 9.35114C29.1221 9.08397 28.7214 8.54962 28.3206 8.14886ZM30.1909 10.8206L33.2634 9.88552C33.5306 10.2863 33.6641 10.8206 33.9313 11.355L30.9924 12.2901C30.5916 11.6221 30.3244 11.2214 30.1909 10.8206Z"
                        fill="#07111A"
                      />
                    </svg>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 m-0 p-0">
                  <div className="bg_level p-0 m-0 mmm">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <p className="text-primary ps-3 pt-2 pb-2 m-0">
                        Level Access
                      </p>
                      <svg
                        className="me-2"
                        width="4"
                        height="6"
                        viewBox="0 0 4 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.85464 5.35376H3.61494V3.59353H1.85464L1.85464 5.35376Z"
                          fill="#00FFFB"
                        />
                        <path
                          d="M1.85464 1.77393L3.61494 1.77393V0.0137275L1.85464 0.0137275L1.85464 1.77393Z"
                          fill="#00FFFB"
                        />
                        <path
                          d="M0.0657078 3.56396H1.82587L1.82587 1.80374L0.0657078 1.80374L0.0657078 3.56396Z"
                          fill="#00FFFB"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="bg_lightGreen text-center p-0 m-0">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.05258 10C5.0509 10 5.04894 10 5.04726 10C4.97786 9.9987 4.91238 9.97109 4.86536 9.9237L0.0671715 5.06859C-0.0151024 4.98526 -0.0226581 4.85974 0.0492616 4.76834C0.121181 4.67719 0.252148 4.64594 0.362406 4.69386L4.75398 6.60736C4.79092 6.62351 4.83458 6.6157 4.86284 6.58835L11.5617 0.0731228C11.6524 -0.0151566 11.8007 -0.0247919 11.9037 0.0512482C12.0067 0.127288 12.0305 0.263744 11.9585 0.366085L5.29492 9.86537C5.28541 9.87917 5.27421 9.89167 5.2619 9.90339L5.23252 9.93073C5.18466 9.975 5.11974 10 5.05258 10Z"
                        fill="#00FFFB"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="d-flex justify-content-between me-2">
            <div>
            <p style={{color: "var(--main-text-color)"}}>item {`${indexOfFirstRow + 1}-${indexOfLastRow}/${totalRows}`}</p>
            </div>
            <div className="pagination">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    color: currentPage === 1 ? "#00FFFB4D" : "#00FFFB",
                  }}
                >
                  <ArrowBackIcon />
                </button>
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={
                    currentPage === Math.ceil(employeeData.length / rowsPerPage)
                  }
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    color:
                      currentPage ===
                      Math.ceil(employeeData.length / rowsPerPage)
                        ? "#00FFFB4D"
                        : "#00FFFB",
                  }}
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
                    <th scope="col" className="dashboard_th">
                      Employee Name
                    </th>
                    <th scope="col" className="dashboard_th">
                      Employee ID
                    </th>
                    <th scope="col" className="dashboard_th">
                      Level Access
                    </th>
                    <th scope="col" className="dashboard_th">
                      Status
                    </th>
                    <th scope="col" className="dashboard_th">
                      Check In
                    </th>
                    <th scope="col" className="dashboard_th">
                      Check Out
                    </th>
                    <th scope="col" className="dashboard_th">
                      Work Hours
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentRows.map((employee, index) => (
                    <tr key={index}>
                      <td className="dashboard_td text-primary">
                        {employee.name}
                      </td>
                      <td className="dashboard_td text-primary">
                        {employee.id}
                      </td>
                      <td className="dashboard_td text-primary">
                        {employee.levelAccess}
                      </td>
                      <td className="dashboard_td text-primary">
                        {employee.status}
                      </td>
                      <td className="dashboard_td text-primary">
                        {employee.checkIn}
                      </td>
                      <td className="dashboard_td text-primary">
                        {employee.checkOut}
                      </td>
                      <td className="dashboard_td text-primary">
                        {employee.hours}
                      </td>
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
