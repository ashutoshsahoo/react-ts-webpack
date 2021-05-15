import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Dashboard from "./components/Dashboard/Dashboard";
import { Error401 } from "./components/Error/Error401";
import { Error404 } from "./components/Error/Error404";
import { Error500 } from "./components/Error/Error500";
import { Login } from "./components/Login/Login";
import { Password } from "./components/Password/Password";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

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
        <Route path="/error401" component={Error401} />
        <Route path="/error404" component={Error404} />
        <Route path="/error500" component={Error500} />
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
