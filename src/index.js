import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/css/reset.css";
import Login from "./pages/login/index";
import Cadastro from "./pages/cadastro/index"
import NotFound from "./pages/404/index";
import ResetPassword from "./pages/dentista/resetPassword/index"
import FormHistoPato  from "./pages/dentista/histoPato";
import  History from "./pages/historico"


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path={"/login"} component={Login} exact />
      <Route path={"/cadastro"} component={Cadastro} exact />
      <Route path={"/cistoPatologico"} component={FormHistoPato} exact />
      <Route path={"/historico"} component={History} exact/>
      <Route path={"/loginLaboratio"} component={LoginLaboratory} exact />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
