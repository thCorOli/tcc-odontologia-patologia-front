import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./assets/css/reset.css";
import NotFound from "./pages/general/404/index";

import Login from "./pages/dentista/login/index";
import Patients from "./pages/dentista/patients";
import Cadastro from "./pages/dentista/cadastro/index"
import  History from "./pages/dentista/historico/index";
import FormHistoPato  from "./pages/dentista/histoPato/index";
import ResetPassword from "./pages/dentista/resetPassword/index";
import Forms from "./pages/dentista/forms/index";
import FormOsseo from "./pages/dentista/formOsseo/index";

import LoginLaboratory from "./pages/laboratory/loginLaboratorio/index";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path={"/login"} component={Login} exact />
      <Route path={"/cadastro"} component={Cadastro} exact />
      <Route path={"/dentista/cistoPatologico"} component={FormHistoPato} exact />
      <Route path={"/dentista/historico"} component={History} exact/>
      <Route path={"/dentista/meusPacientes"} component={Patients} exact/>
      <Route path={"/dentista/formulários"} component={Forms} exact />
      <Route path={"/loginLaboratio"} component={LoginLaboratory} exact />
      <Route path={"/dentista/odontoOsseo"} component={FormOsseo} exact/>
      <Redirect from="/" to="/login" exact/>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
