import React, { Fragment } from "react";
import {createRoot} from "react-dom/client";
import App from './App';
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(<Fragment> <BrowserRouter><App/> </BrowserRouter></Fragment>);