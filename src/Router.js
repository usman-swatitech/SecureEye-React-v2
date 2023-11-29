import React from "react";
import Home from "./View/Home";
import SignIn from "./View/Sign";
import SignUp from "./View/SignUp";
import OtpVerification from "./View/OtpVerification";
import EmailVerified from "./View/EmailVerification";
import { Routes, Route } from "react-router-dom";
import Resetpassword from "./View/ResetPassword";
import NotFound from "./View/NotFound";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/otpverification" element={<OtpVerification />} />
      <Route path="/emailverified" element={<EmailVerified />} />
      <Route path="/forget-password" element={<Resetpassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
