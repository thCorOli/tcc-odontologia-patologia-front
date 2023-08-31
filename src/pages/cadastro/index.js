import React, { useState } from "react";
import ButtonPage from "../../components/button/index";
import { MainContainer } from "../../constants/containers/index";
import FormField from "../../components/formfield/index";
import useForm from "../../hooks/useForm/index";
import "../../constants/colors.css";
import "./components/form.css";
import {
  Background,
  ContentContainer,
  LinkLogo,
  Text,
  TextContainer,
  Input,
  WrapperFormField,
  Linked
} from "./components/style";
import { useHistory, Link } from "react-router-dom";
import "../../components/loader/loader.css";
import InputMask from 'react-input-mask';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import LogoFull from "../../assets/imgs/icon_provisorio.png";
import { register } from "../../services/patient";
import { hasEmptyFields,isCpfValid,isDateValid,isEqual } from "../../services/general/security";

const Cadastro = () => {
  const { value, onChangeHandler } = useForm({
    name: "",
    email: "",
    birthday: "",
    cpf: "",
    password: "",
    password_confirmation: "",
  });

  const history = useHistory();


const performValidation = (user) => {
  console.log(user)
  if(hasEmptyFields(user))
    return 'isEmpty'
  if(!isCpfValid(user.cpf))
    return 'CpfInvalid'
  if(!isDateValid(user.birthday))
    return 'DateInvalid'
  if(!isEqual(user.password,user.password_confirmation))
    return'NotEqual'
  return "valid"
}

  const [animationData, setAnimationData] = useState(false);

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
    history.push("/");
  };

  return (
    <Background backgroundColor={"var(--background)"}>
      
      <MainContainer>
        <LinkLogo as={Link} to="/">
          
          </LinkLogo>
          <ContentContainer
          backgroundColor={"var(--white)"}
          borderRadius={"10px"}
          style={{ padding: "30px 0" }}
        >
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
             switch (performValidation(value)) {
              case "valid":
                value.birthday = value.birthday.split('/').reverse().join('-');
                setAnimationData(true);
                register({ patient: value }, (response) => {
                  if (response.status >= 200 && response.status <= 299) {
                    setTitle("Confirme o seu email para finalizar o cadastro!");
                    handleClickOpen();
                  } else {
                    setTitle(response.data.errors);
                    handleClickOpen();
                    setAnimationData(false);
                  }
                });
                break;
              case "isEmpty":
                setTitle("Preencha todos os campos");
                handleClickOpen();
                break;
              case "CpfInvalid":
                setTitle("CPF Inválido!");
                handleClickOpen();
                break;
              case "DateInvalid":
                setTitle("Data Inválida!");
                handleClickOpen();
                break;
              case "NotEqual":
                setTitle("Senhas divergentes!");
                handleClickOpen();
                break;
              default:
                setTitle("Erro inesperado");
                handleClickOpen();
                break;
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
            <TextContainer>
              <Text>Data de Nascimento:</Text>
            </TextContainer>
            <WrapperFormField>

            <InputMask mask="99/99/9999" value={value.birthday} onChange={onChangeHandler} name={"birthday"}>
            {(inputProps) => <Input {...inputProps} type="tel" disableUnderline />}
            </InputMask>
            </ WrapperFormField>
            <div style={{ width: "100%" }}>
              <FormField
                label={"CPF:"}
                name={"cpf"}
                value={value.cpf}
                maxLength={11}
                minLength={11}
                type={"text"}
                onChange={onChangeHandler}
                pattern={"[0-9]*"}
                alert={"Somente números"}
              />
            </div>
            <FormField
              label={"Senha:"}
              name={"password"}
              type={"password"}
              value={value.password}
              onChange={onChangeHandler}
              minLength={6}
            />
            <FormField
              label={"Confirmar Senha:"}
              name={"password_confirmation"}
              type={"password"}
              onChange={onChangeHandler}
              value={value.password_confirmation}
              minLength={6}
            />
            {animationData === true ? (
              <div className="loader"></div>
            ) : (
              <div></div>
            )}
            <ButtonPage>Cadastrar</ButtonPage>
            <Linked
              as={Link}
              to="/"
              style={{margin:'5% 0 0 0',textalign:'center'}}
            >
              Já é Cadastrado?
            </Linked>
          </form>
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
          {title === "Confirme o seu email para finalizar o cadastro!" ? (
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

export default Cadastro;
