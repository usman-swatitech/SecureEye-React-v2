import { useState, useEffect } from 'react';
import Table from '../Component/Common/Table';
import Cards from '../Component/Common/CameraCards';
import * as images from '../Constant/images';
import { homeTableHeading } from '../Constant/table';
import { cameraData } from '../Constant/cameras';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomeLayout = () => {

  const [tableHeight, setTableHeight] = useState('tableHeight13');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentPage, setCurrentPage] = useState(1);

  // const numberOfCameras = cameraData.length;
  // console.log(numberOfCameras);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let itemsPerPage;
  if (windowWidth < 1000) {
    itemsPerPage = 6;
  } else if (windowWidth >= 800 && windowWidth < 1200) {
    itemsPerPage = 8;
  } else {
    itemsPerPage = 10;
  }
  
  
  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCameras = cameraData.slice(indexOfFirstItem, indexOfLastItem);
  const numberOfCameras = currentCameras.length;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    let newTableHeight = 'tableHeight13';

    if ((itemsPerPage === 6 && numberOfCameras <= 3) ||
        (itemsPerPage === 8 && numberOfCameras <= 4) ||
        (itemsPerPage === 10 && numberOfCameras <= 5)) {
      newTableHeight = 'tableHeight41';
    }
    setTableHeight(newTableHeight);
  }, [itemsPerPage, numberOfCameras]);
  
  return (
    <>
      <div className="d-flex justify-content-end w-100">
        <div className="me-3">
          <button
            onClick={() => paginate(currentPage - 1)}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              color: currentPage === 1 ? '#00FFFB4D' : '#00FFFB',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            }}
            disabled={currentPage === 1}
          >
            <ArrowBackIcon />
          </button>{' '}
          <button
            onClick={() => paginate(currentPage + 1)}
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              color: indexOfLastItem >= cameraData.length ? '#00FFFB4D' : '#00FFFB',
              cursor: indexOfLastItem >= cameraData.length ? 'not-allowed' : 'pointer',
            }}
            disabled={indexOfLastItem >= cameraData.length}
          >
            <ArrowForwardIcon />
          </button>
        </div>
      </div>

      <section className="main_home_screen">
        <div className="cctv_ameras scrollbar_style">
          <div className="cards_layout ">
            {currentCameras.map((camera, index) => (
              <Cards key={index} camera={camera} />
            ))}
          </div>
        </div>
        <img className="dotBorderd" src={images.dotBorderd} alt="border img" />
        <label className="EmployeeInformation">Activity Monitor</label>
        <div className={`alert_table scrollbar_style ${tableHeight}`}>
          <Table heading={homeTableHeading} itemsPerPage={itemsPerPage} />
        </div>
      </section>
    </>
  );
};

export default HomeLayout;
