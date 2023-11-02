import React, { Fragment } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./View/Home";
const AppRouter = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Fragment>
  );
};

export default AppRouter;
