import React, { useEffect, useState } from "react";
import useForm from "../../../hooks/useForm/index";
import { MainContainer } from "../../../constants/containers/index";
import ButtonPage from "../../../components/button/index";
import FormField from "../../../components/formfield/index";
import "../../../constants/colors.css";
import Logo from "../../../assets/imgs/logos/logoFull.svg";
import { Link, useHistory } from "react-router-dom";
import { registerDoctor } from "../../../services/index";
import {
  Card,
  Img,
  ImgContainer,
  SideSide,
  Background,
  ContentContainer,
  Select,
} from "./components/style";
import "../../../components/loader/loader.css";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

const CadastroMedico = () => {
  const [animationData, setAnimationData] = useState(false);

  const [States, setStates] = useState(0);

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((res) => res.json())
      .then((states) => {
        states.sort(function (a, b) {
          return a.sigla < b.sigla ? -1 : a.sigla > b.sigla ? 1 : 0;
        });
        setStates(Array.from(states));
      });
  }, []);

  const isEmpty = (value) => {
    if (
      value.name === "" ||
      value.email === "" ||
      value.phone === "" ||
      value.crm === "" ||
      value.uf === "" ||
      value.town === "" ||
      value.password === "" ||
      value.password_confirmation === ""
    ) {
      setTitle("Preencha todos os campos");
      handleClickOpen();
      return false;
    } else return true;
  };

  const isEqual = (password, password_confirmation) => {
    if (password === password_confirmation) return true;
    else {
      setTitle("As senhas devem ser iguais");
      handleClickOpen();
      return false;
    }
  };

  const { value, onChangeHandler } = useForm({
    name: "",
    email: "",
    phone: "",
    crm: "",
    birthday: "",
    uf: "",
    town: "",
    password: "",
    password_confirmation: "",
  });

  const history = useHistory();

  const [open, setOpen] = React.useState(false);

  const [title, setTitle] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSuccess = () => {
    handleClose();
    history.push("/login/medico");
  };

  return (
    <Background>
      <MainContainer>
        <ImgContainer as={Link} to="/">
          <Img src={Logo} />
        </ImgContainer>
        <ContentContainer>
          <Card>
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                if (
                  isEmpty(value) &&
                  isEqual(value.password, value.password_confirmation)
                ) {
                  setAnimationData(true);
                  registerDoctor({ doctor: value }, (response) => {
                    if (response.status >= 200 && response.status <= 299) {
                      setAnimationData(false);
                      setTitle(
                        "Cadastrado com Sucesso! Por favor confirme seu email e espere a confirmação do administrador."
                      );
                      handleClickOpen();
                    } else {
                      if (response.data.errors.length > 1) {
                        let errs = "";
                        for (let i = 0; i < response.data.errors.length; i++) {
                          errs += `\n ${response.data.errors[i]}`;
                        }
                        setTitle(errs);
                        handleClickOpen();
                      } else {
                        setTitle(response.data.errors);
                        handleClickOpen();
                      }
                      setAnimationData(false);
                    }
                  });
                }
              }}
            >
              <FormField
                label={"Nome:"}
                name={"name"}
                value={value.name}
                onChange={onChangeHandler}
              />
              <FormField
                label={"E-mail:"}
                name={"email"}
                type={"email"}
                value={value.email}
                onChange={onChangeHandler}
              />
              <FormField
                type={"date"}
                name={"birthday"}
                value={value.birthday}
                onChange={onChangeHandler}
              />
              <FormField
                label={"Telefone:"}
                name={"phone"}
                value={value.phone}
                onChange={onChangeHandler}
              />
              <FormField
                label={"CRM:"}
                name={"crm"}
                value={value.crm}
                minLength={8}
                maxLength={11}
                onChange={onChangeHandler}
              />

              <SideSide>
                <Select
                  value={value.uf}
                  name={"uf"}
                  id="states"
                  onChange={onChangeHandler}
                >
                  {States === 0 ? (
                    <></>
                  ) : (
                      States.map((eachState) => (
                        <option value={eachState.id} key={eachState.id}>{eachState.sigla}</option>
                      ))
                    )}
                </Select>
                <FormField
                  label={"Cidade:"}
                  name={"town"}
                  value={value.town}
                  onChange={onChangeHandler}
                />
              </SideSide>
              <FormField
                label={"Senha:"}
                name={"password"}
                type={"password"}
                value={value.password}
                onChange={onChangeHandler}
                minLength={6}
                maxLength={71}
              />
              <FormField
                label={"Confirmar Senha:"}
                name={"password_confirmation"}
                type={"password"}
                onChange={onChangeHandler}
                value={value.password_confirmation}
                minLength={6}
                maxLength={71}
              />
              <ButtonPage type={"submit"}>Cadastrar</ButtonPage>
              {animationData ? <div className="loader"></div> : <div></div>}
            </form>
          </Card>
        </ContentContainer>
      </MainContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogActions>
          {title === "Cadastrado com Sucesso! Por favor confirme seu email e espere a confirmação do administrador." ? (
            <Button onClick={handleSuccess} color="primary" autoFocus>
              OK
            </Button>
          ) : (
              <Button onClick={handleClose} color="primary" autoFocus>
                OK
              </Button>
            )}
        </DialogActions>
      </Dialog>
    </Background>
  );
};

export default CadastroMedico;
