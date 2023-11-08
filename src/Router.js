import React  from 'react';
import Home from './View/Home';
import Splash from './View/Splash';
import SignIn from './View/SignIn';
import SignUp from './View/SignUp';
import OtpVerification from './View/OtpVerification';
import EmailVerified from './View/EmailVerification';
import { Routes, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/otpverification" element={<OtpVerification />} />
        <Route path="/emailverified" element={<EmailVerified />} />
      </Routes>
  );
};

export default AppRouter;
