import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Dashboard from "../Component/Dashboard";
import RootLayout from "../RootLayout";

const App = () => {
  const loginKey = localStorage.getItem("myKey");
  const navigate = useNavigate();
  useEffect(() => {
    if (loginKey) {
      navigate("/signin");
    }
  }, [loginKey, navigate]);

  if (loginKey) {
    return null;
  }
  return <RootLayout />;
};

export default App;
