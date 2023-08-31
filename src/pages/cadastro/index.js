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

  const validateCpf = (cpf) => {
    if (typeof cpf !== "string") return false;
    cpf = cpf.replace(/[\s.-]*/gim, "");
    if (
      !cpf ||
      cpf.length !== 11 ||
      cpf === "00000000000" ||
      cpf === "11111111111" ||
      cpf === "22222222222" ||
      cpf === "33333333333" ||
      cpf === "44444444444" ||
      cpf === "55555555555" ||
      cpf === "66666666666" ||
      cpf === "77777777777" ||
      cpf === "88888888888" ||
      cpf === "99999999999"
    ) {
      setTitle("Digite um CPF válido!");
      handleClickOpen();
      return false;
    }
    var soma = 0;
    var resto;
    for (var i = 1; i <= 9; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) {
      setTitle("Digite um CPF válido!");
      handleClickOpen();
      return false;
    }
    soma = 0;
    for (let i = 1; i <= 10; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) {
      setTitle("Digite um CPF válido!");
      handleClickOpen();
      return false;
    }
    return true;
  };

  const isEqual = (password, password_confirmation) => {
    if (password === password_confirmation) return true;
    else {
      setTitle("Senhas não coincidem!");
      handleClickOpen();
      return false;
    }
  };

  const isEmpty = (value) => {
    if (
      value.name === "" ||
      value.email === "" ||
      value.birthday === "" ||
      value.cpf === "" ||
      value.password === "" ||
      value.password_confirmation === ""
    ) {
      setTitle("Preencha todos os campos!");
      handleClickOpen();
      return false;
    } else return true;
  };

  const isDateValid = (date) => {
    let today = new Date();
    let fildDate = new Date(date.split('/').reverse());
    if(date === ""){
      setTitle("Preencha o campo da data");
      return false
    }
    
    if(fildDate.getTime() >= today.getTime()){
      setTitle("Digite uma Data Valida!");
      handleClickOpen();
      return false;
    }
    value.birthday = date.split('/').reverse().join('-');
    return true;
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
              if (
                isEmpty(value) &&
                isEqual(value.password, value.password_confirmation) &&
                validateCpf(value.cpf) &&
                isDateValid(value.birthday)
              ) {
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
