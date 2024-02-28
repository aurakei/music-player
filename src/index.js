import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import AppRoutes from "./AppRoutes";
import reportWebVitals from "./reportWebVitals";
import Homepage from "./pages/Homepage";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Homepage />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
