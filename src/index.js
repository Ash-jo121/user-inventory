import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import App from "./App";
import { localStorageInitialization } from "./constants/commonHelper";

const root = ReactDOM.createRoot(document.getElementById("root"));

localStorageInitialization();

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
