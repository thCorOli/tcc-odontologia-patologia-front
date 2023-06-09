import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/css/reset.css";
import Login from "./pages/login/index";
import NotFound from "./pages/404/index";
import ResetPassword from "./pages/resetPassword/index"


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path={"/"} component={ResetPassword} exact />
      
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
