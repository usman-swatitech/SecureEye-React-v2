import React, { Fragment } from 'react';
import Splash from './View/Splash';

import { Routes, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Splash />} />
      </Routes>
    </Fragment>
  );
};

export default AppRouter;
