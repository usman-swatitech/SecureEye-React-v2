import React  from 'react';
 
import { Suspense,lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Splash from './View/Splash';
const Home = lazy(()=>import('./View/Home'));
const AppRouter = () => {
  return (
    <Suspense fallback={<Splash />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
