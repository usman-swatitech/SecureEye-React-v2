import {
  activeHomeSvg,
  activeBlockSvg,
  activeFac,
  plusSvg,
} from "../../Constant/svgs";

const ActionBar = () => {
  return (
    <div className="action-bar">
      <div className="left-portion">
        <span className="actionbar-icons">{activeHomeSvg}</span>
        <span className="actionbar-icons">{activeBlockSvg}</span>
        <span className="actionbar-icons">{activeFac}</span>
      </div>
      <div className="right-portion d-flex">
        <div className="main-circle">
          <div className="plus-circle">
            <span>{plusSvg}</span>
          </div>
        </div>

        <h4 className="fs-6 text-white mt-2">Add New Camera</h4>
      </div>
    </div>
  );
};

export default ActionBar;
