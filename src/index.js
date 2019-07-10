import React from "react";
import ReactDOM from "react-dom";
import loginService from "./services/logService";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

loginService.init();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
