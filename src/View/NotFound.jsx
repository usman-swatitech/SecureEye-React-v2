import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/sign-in");
  }, [navigate]);
  return <div>NotFound</div>;
};

export default NotFound;
