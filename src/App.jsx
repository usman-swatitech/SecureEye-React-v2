import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./aziz.css";
import "./usman.css";
import "./index.css";
import Routes from "./Router";
import { AppContextProvider } from "./context/Context";
const App = () => {
  return (
    <AppContextProvider>
      <Routes />
    </AppContextProvider>
  );
};
export default App;
