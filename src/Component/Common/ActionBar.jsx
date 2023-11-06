import {
  activeHomeSvg,
  activeBlockSvg,
  activeFac,
  plusSvg,
} from "../../Constant/svgs";

const ActionBar = () => {
  return (
    <div className="action-bar d-flex flex-lg-row flex-column justify-content-between  position-relative top-30">
      <div className="left-portion d-flex gap-4">
        <span className="actionbar-icons">{activeHomeSvg}</span>
        <span className="actionbar-icons">{activeBlockSvg}</span>
        <span className="actionbar-icons">{activeFac}</span>
      </div>
      <div className="right-portion d-flex align-items-center">
        <div className="main-circle">
          <div className="plus-circle">
            <span>{plusSvg}</span>
          </div>
        </div>

        <p className="fs-6 text-white text-nowrap">Add New Camera</p>
      </div>
    </div>
  );
};

export default ActionBar;
