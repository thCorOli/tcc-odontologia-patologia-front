import React, { useState, useEffect } from "react";
import ButtonPage from "../../../components/button/index";
import { MainContainer } from "../../../constants/containers/index";
import FormField from "../../../components/formfield/index";
import useForm from "../../../hooks/useForm/index";
import "../../../constants/colors.css";
import "./components/form.css";
import {
  ContentContainer,
  LinkLogo,
  Text,
  TextContainer,
  Input,
  WrapperFormField,
  Linked
} from "./components/style";
import {LinksOtherPages, TextWithLink, CentralizedLinks } from "../../../components/formInfoUsuario/index.js";
import Background from "../../../components/background";
import { useHistory, Link } from "react-router-dom";
import "../../../components/loader/loader.css";
import InputMask from 'react-input-mask';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import LogoFull from "../../../assets/imgs/logos/LogoFull-semFundo.png";
import { register } from "../../../services/dentista";
import { hasEmptyFields,isCpfValid,isDateValid,isEqual } from "../../../services/general/security";

const Cadastro = () => {
  const { value, onChangeHandler, filterText, cpfMask  } = useForm({
    name: "",
    email: "",
    birthday: "",
    cpf: "",
    password: "",
    password_confirmation: "",
  });

  const history = useHistory();
  
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);


const performValidation = (user) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (performValidation(value)) {
     case "valid":
       value.birthday = value.birthday.split('/').reverse().join('-');
       setAnimationData(true);
       register({ dentist: value }, (response) => {
         if (response.status >= 200 && response.status <= 299) {
           setTitle("Confirme o seu email para finalizar o cadastro!");
           handleClickOpen();
         } else {
           setTitle(response.data.errors);
           handleClickOpen();
           setAnimationData(false);
          }
        if(response.status >= 500){
          setTitle(`Erro ${ response.status }:Erro Interno de Servidor` );
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
  }

  return (
    <Background overflow={"auto"}>
      <MainContainer>
        <LinkLogo as={Link} to="/" className={shouldAnimate ? 'animate' : ''}>
          <img src={LogoFull}></img>
          </LinkLogo>
          <ContentContainer
          backgroundColor={"var(--white)"}
          borderRadius={"10px"}
          className={shouldAnimate ? 'animate' : ''}
        >
          <form
            autoComplete="off"
            className="form"
            onSubmit={handleSubmit}
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
                value={cpfMask(value.cpf)}
                maxLength={14}
                minLength={14}
                type={"text"}
                onChange={(e) => filterText("cpf", e.target.value)}
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
              autoComplete="off"
            />
            <FormField
              label={"Confirmar Senha:"}
              name={"password_confirmation"}
              type={"password"}
              onChange={onChangeHandler}
              value={value.password_confirmation}
              minLength={6}
              autoComplete="off"
            />
            {animationData === true ? (
              <div className="loader"></div>
            ) : (
              <div></div>
            )}
            <ButtonPage
            color="var(--medium-purple)" 
            hoverColor="var(--white)" 
            hoverBackGround="var(--medium-purple)" 
            >Cadastrar</ButtonPage>
          </form>
        </ContentContainer>
        <CentralizedLinks className={shouldAnimate ? 'animate' : ''} style={{marginBottom: "2%"}}>
          <TextWithLink>Já possui cadastro?</TextWithLink>
          <LinksOtherPages as={Link} to="/login" style={{ margin: "0 0.5%" }} >Clique aqui para acessar.</LinksOtherPages>
        </CentralizedLinks>
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
