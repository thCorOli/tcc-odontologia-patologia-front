import React, { useState, useEffect } from "react";
import { login } from "../../../services/patient";
import {hasEmptyFields, hasSqlStrings} from '../../../services/general/security';
import { Link, useHistory } from "react-router-dom";

import useForm from "../../../hooks/useForm/index";
import Background from "../../../components/background";
import ButtonPage from "../../../components/button/index";
import FormField from "../../../components/formfield/index";
import LogoFull from "../../../assets/imgs/icon_provisorio.png";
import { Text } from "../../../components/texts";
import { Panel, Logo, ContentContainer, LinkLogo, LinksOtherPages, TextWithLink, CentralizedLinks } from "../../../components/formInfoUsuario/index.js";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

const Login = () => {
  const [modal, setModal] = useState(false);
  const [animationData, setAnimationData] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

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

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleOpenModal = () => {
    setModal(true);
  };

  const LinksOtherPagesF = (email, resp) => {
    if (resp.status >= 200 && resp.status <= 299) {
      setTitle("Email reenviado com sucesso!");
      handleClickOpen();
      setAnimationData(false);
    } else {
      setAnimationData(false);
      setTitle(`${resp.data.errors[0]}, ${resp.data.errors[1]}`);
      handleClickOpen();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hasEmptyFields(value) && !hasSqlStrings(value)) {
      login({ patient: value }, (response) => {
        if (response.status >= 200 && response.status <= 299) {
          setTitle("Logado com sucesso!");
          handleClickOpen();
          history.push("/cistoPatologico");
        } else {
          setAnimationData(false);
          setTitle("Erro ao efetuar login. Verifique suas credenciais.");
          handleClickOpen();
        }
      });
    } else {
      setTitle("Preencha os campos!");
      handleClickOpen();
    }
  };

  return (
    <Background backgroundColor={"var(--background)"}>
      <Panel>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={modal}
          onClose={handleCloseModal}
          closeAfterTransition
          className={"modalLogin"}
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <div className="backModal">
            <Text>Digite Seu email:</Text>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setAnimationData(true);
              }}
            >
              <FormField
                label={"Email"}
                onChange={onChangeHandler}
                name={"emailToResend"}
                value={value.emailToResend}
                type={"email"}
              />
              <ButtonPage type={"submit"}>Enviar</ButtonPage>
            </form>
          </div>
        </Modal>
        <ContentContainer
          backgroundColor={"var(--white)"}
          borderRadius={"2%"}
          style={{ padding: "10px 0" }}
          className={shouldAnimate ? 'animate' : ''}
        >
          <LinkLogo as={Link} to="/">
            <Logo src={LogoFull}></Logo>
          </LinkLogo>
          <form
            style={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center"
            }}
            onSubmit={handleSubmit}
          >
            <FormField
              label={"E-mail"}
              onChange={onChangeHandler}
              name={"email"}
              type={"email"}
              value={value.email}
            />
            <FormField
              label={"Senha"}
              onChange={onChangeHandler}
              name={"password"}
              value={value.password}
              type={"password"}
            />
            <LinksOtherPages as={Link} to="/forgot">
              Esqueci minha senha
            </LinksOtherPages>
            <LinksOtherPages onClick={handleOpenModal}>Reenviar Email</LinksOtherPages>
            {animationData === true ? (
              <div className="loader"></div>
            ) : (
                <div></div>
              )}
            <ButtonPage
              style={{ marginBottom: "2%" }}
              color="var(--medium-purple)"
              backgroundColor="var(--white)"
              hoverColor="var(--white)"
              hoverBackGround="var(--medium-purple)"
            >
              Entrar
            </ButtonPage>
            <ButtonPage
              as={Link}
              to="/cadastro"
              style={{ marginBottom: "2%" }}
              color="var(--medium-purple)"
              hoverColor="var(--white)"
              hoverBackGround="var(--medium-purple)"
            >
              Cadastrar
            </ButtonPage>
          </form>
        </ContentContainer>
        <CentralizedLinks className={shouldAnimate ? 'animate' : ''}>
          <TextWithLink>É um laboratório? Para mudar de sessão </TextWithLink>
          <LinksOtherPages as={Link} to="/loginLaboratio" style={{ margin: "0 0.5%" }} >clique aqui</LinksOtherPages>
        </CentralizedLinks>
      </Panel>
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
