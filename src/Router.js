import React, { Fragment } from 'react';
import Home from './View/Home';

import { Routes, Route } from 'react-router-dom';

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
