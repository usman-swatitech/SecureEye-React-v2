import React from "react";
import { Link } from "react-router-dom";

const AuthActions = ({ textLabel, linkLabel, linkPath }) => {
  return (
    <div className="d-flex gap-4 justify-content-center my-1 mt-3">
      <label style={{ color: "gray" }}>{textLabel}</label>
      <Link
        to={linkPath}
        className="text-white"
        style={{ textDecoration: "none" }}
      >
        {linkLabel}
      </Link>
    </div>
  );
};

export default AuthActions;
