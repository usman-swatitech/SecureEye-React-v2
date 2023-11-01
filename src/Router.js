import React  from 'react';
import Home from './View/Home';
import { Routes, Route } from 'react-router-dom';
const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  );
};

export default AppRouter;
