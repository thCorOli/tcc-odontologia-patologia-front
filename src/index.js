import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/css/reset.css";
import Cadastro from "./pages/cadastro/index";
import Login from "./pages/login/index";
import Pagina404 from "./pages/404/index";
import FormMedicacao from "./pages/sistema/medicacao/index";
import HomePSistema from "./pages/sistema/home/index";
import Medicao from "./pages/sistema/medicao/index";
import ResetPassword from "./pages/resetPassword/index";
import ResetPasswordToken from "./pages/resetPassword/reset";
import ConfirmarEmail from "./pages/confirmar_email/index";
import CadastroMedico from "./pages/sistema/cadastroMedico/index";
import LoginMedico from "./pages/loginMedico/loginMedico";
import History from "./pages/sistema/historico/index";
import SelectDoctor from "./pages/sistema/selecionarMedico/index";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path={"/"} component={Login} exact />
      <Route path={"/cadastro"} component={Cadastro} exact />
      <Route path={"/forgot"} component={ResetPassword} exact />
      <Route path={"/forgot_password"} component={ResetPasswordToken} exact />
      <Route path={"/user/confirm_email/"} component={ConfirmarEmail} exact />
      <Route path={"/cadastro/medico"} component={CadastroMedico} exact />
      <Route path={"/login/medico"} component={LoginMedico} exact />
      <Route path={"/user/medicacao"} component={FormMedicacao} exact />
      <Route path={"/user/medicao"} component={Medicao} exact />
      <Route path={"/home/patient"} component={HomePSistema} exact />
      <Route path={"/user/historico"} component={History} exact />
      <Route path={"/user/selecionarMedico"} component={SelectDoctor} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
