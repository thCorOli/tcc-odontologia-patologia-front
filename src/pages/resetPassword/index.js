import React from "react";
import ButtonPage from "../../components/button/index";
import FormField from "../../components/formfield/index";
import LogoFull from "../../assets/imgs/logos/logoFull.svg";
import "../../constants/colors.css";
import styled, { css } from "styled-components";
import useForm from "../../hooks/useForm/index";
import { ResetPasswordRequest } from "../../services/reset";
import { useHistory, Link } from "react-router-dom";
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
`;

const ContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  top: 20%;
  padding: 45px 0;
  flex: 1;
  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `};
  ${({ borderRadius }) => css`
    border-radius: ${borderRadius};
  `};
`;

export const LogoFullForm = styled.img`
  width: 80%;
  margin-bottom: 45px;
  object-fit: contain;
`;

const LinkLogo = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
`;

const ResetPassword = () => {
  const history = useHistory();
  const { value, onChangeHandler } = useForm({
    email: "",
  });

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
      <ContentContainer
        backgroundColor={"var(--white)"}
        borderRadius={"10px 10px 0px 0px"}
      >
        <LinkLogo as={Link} to="/">
          <LogoFullForm src={LogoFull}></LogoFullForm>
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
            if (value.email === "") {
              setTitle("Campos vazios!");
              handleClickOpen();
            } else {
              ResetPasswordRequest({ email: value.email }, (resp) => {
                history.push("/login");
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
          <ButtonPage style={{ backgroundColor: "var(--secundary-blue)" }}>
            Enviar
          </ButtonPage>
        </form>
      </ContentContainer>
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

export default ResetPassword;
