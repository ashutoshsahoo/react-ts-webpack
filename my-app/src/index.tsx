import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import { Password } from "./components/Password/Password";
import Dashboard from "./components/Dashboard/Dashboard";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        {/* <Route path="/service" component={Service} />
        <Route path="/about" component={About} /> */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/register" component={Login} />
        <Route path="/password" component={Password} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
