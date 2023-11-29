import React  from 'react';
import Home from './View/Home';
import SignIn from './View/Sign';
import SignUp from './View/SignUp';
import OtpVerification from './View/OtpVerification';
import EmailVerified from './View/EmailVerification';
import { Routes, Route } from 'react-router-dom';
import Resetpassword from './View/ResetPassword';


const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/otpverification" element={<OtpVerification />} />
        <Route path="/emailverified" element={<EmailVerified />} />
        <Route path="/resetpsw" element={<Resetpassword/> } />
      </Routes>
  );
};

export default AppRouter;
