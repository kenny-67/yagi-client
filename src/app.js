import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./routes/AppRoutes";

import "normalize.css/normalize.css";
import "./styles/bootstrap.min.css";
import "./styles/styles.scss";
import "./styles/style.css";

const appRoot = document.getElementById("app");
ReactDOM.render(<AppRoutes />, appRoot);
