import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Test from "../Component/Test";

const App = () => {
  const loginKey = localStorage.getItem("myKey");
  const navigate = useNavigate();

  useEffect(() => {
    if (loginKey) {
      navigate('/signin');
    }
  }, [loginKey, navigate]);

  if (loginKey) {
    return null;
  }

  return (
    <div className="bg-danger">
      <Test />
    </div>
  );
};

export default App;
