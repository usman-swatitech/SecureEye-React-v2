import React from "react";
import Home from "./View/Home";
import SignIn from "./View/Sign";
import SignUp from "./View/SignUp";
import OtpVerification from "./View/OtpVerification";
import EmailVerified from "./View/EmailVerification";
import { Routes, Route } from "react-router-dom";
import Resetpassword from "./View/ResetPassword";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./View/NotFound";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute Component={SignIn}/>} />
      <Route path="/home" element={<ProtectedRoute Component={Home}/>} />
      {/* <Route path="/sign-in" element={<SignIn />} /> */}
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/otp-verification" element={<OtpVerification />} />
      <Route path="/email-verified" element={<EmailVerified />} />
      <Route path="/reset-password" element={<Resetpassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
