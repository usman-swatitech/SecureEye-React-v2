import React from "react";
import { Link } from "react-router-dom";

const AuthActions = ({ textLabel, linkLabel, linkPath }) => {
  return (
    <div className="d-flex gap-2 justify-content-center my-1 mt-3">
      <label className="text-white ">{textLabel}</label>
      <Link
        to={linkPath}
        className="aeionMonoFont"
        style={{ textDecoration: "none", color: "var(--main-text-color)" }}
      >{linkLabel}
      </Link>
    </div>
  );
};

export default AuthActions;
