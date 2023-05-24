import React, { useState } from "react";
import ButtonPage from "../../../../components/button/index";
import FormField from "../../../../components/formfield/index";
import LogoFull from "../../../../assets/imgs/logos/logoFull.svg";
import "../../../../constants/colors.css";
import useForm from "../../../../hooks/useForm/index";
import styled, { css } from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { adminLogin } from "../../../../services/index";
import { LoginPanel, LogoFullLogin } from "./components/index";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const Background = styled.div`
  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `};
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width: 900px) {
    overflow: auto;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `};
  ${({ borderRadius }) => css`
    border-radius: ${borderRadius};
  `};
`;

const LinkLogo = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
`;

const Login = () => {
  const [animationData, setAnimationData] = useState(false);
  const { value, onChangeHandler } = useForm({
    email: "",
    password: "",
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

  return (
    <Background backgroundColor={"var(--background)"}>
      <LoginPanel>
        <ContentContainer
          backgroundColor={"var(--white)"}
          borderRadius={"10px"}
          style={{ padding: "30px 0" }}
        >
          <LinkLogo as={Link} to="/">
            <LogoFullLogin src={LogoFull}></LogoFullLogin>
          </LinkLogo>
          <form
            style={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              marginBottom: "10px",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              if (value.name === "" || value.password === "") {
                setTitle("Campos vazios!");
                handleClickOpen();
              } else {
                setAnimationData(true);
                adminLogin({ admin: value }, (response) => {
                  if (response.status >= 200 && response.status <= 300) {
                    history.push("/home/admin");
                  }
                  else {
                    setAnimationData(false);
                    setTitle("Erro: Usuário e/ou senha inválidos.");
                    handleClickOpen();
                  }
                });
              }
            }}
          >
            <FormField
              label={"E-mail"}
              onChange={onChangeHandler}
              name={"email"}
              value={value.email}
            />
            <FormField
              label={"Senha"}
              onChange={onChangeHandler}
              name={"password"}
              value={value.password}
              type={"password"}
            />
            <Link
              style={{
                alignSelf: "flex-start",
                margin: "-35px 0 45px 0",
                textDecoration: "none",
                color: "var(--black)",
                fontFamily: "Roboto Condensed",
              }}
              to="/forgot"
            >
              Esqueci minha senha
            </Link>
            <ButtonPage style={{ marginBottom: "20px" }} type={"submit"}>
              Entrar
            </ButtonPage>
            {animationData ? <div className="loader"></div> : <div></div>}
          </form>
        </ContentContainer>
      </LoginPanel>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Background>
  );
};

export default Login;
