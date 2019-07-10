import React from "react";
import * as Sentry from "@sentry/browser";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import Raven from "raven-js";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Sentry.init({
  dsn: "https://d1ad25a155504627808740cf87b187bf@sentry.io/1501997"
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
