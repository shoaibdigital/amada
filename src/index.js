import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/scss/custom.scss";
import "./assets/css/custom.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "swiper/css"
import "swiper/css/bundle"
import 'react-datepicker/dist/react-datepicker.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
