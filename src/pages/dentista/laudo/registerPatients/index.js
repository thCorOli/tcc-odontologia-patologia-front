import React, { useState } from "react";
import Layout from "../../../../../components/layout/index";
import ButtonPage from "../../../../../components/button/index";
import FormField from "../../../../../components/formfield/index";
import useForm from "../../../../../hooks/useForm/index";
import "../../../../../constants/colors.css";
import "./components/form.css";
import {
  Text,
  TextContainer,
  Input,
  WrapperFormField,
} from "./components/style";
import {
  AlignContent
} from "../../../../../constants/containers/index";
import "../../../../../components/loader/loader.css";
import InputMask from "react-input-mask";
import { registerPatient } from "../../../../../services/dentista";
import {
  hasEmptyFields,
  isCpfValid,
  isDateValid,
} from "../../../../../services/general/security";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";


const RegisterPatient = () => {

  const { value, onChangeHandler, filterText, cpfMask, clearForm } = useForm({
    name: "",
    email: "",
    birthday: "",
    cpf: "",
    prontuario: "",
  });

  const performValidation = (user) => {
    if (hasEmptyFields(user)) return "isEmpty";
   // if (!isCpfValid(user.cpf)) return "CpfInvalid";
    if (!isDateValid(user.birthday)) return "DateInvalid";
    console.log(user)
    return "valid";
  };

  const [animationData, setAnimationData] = useState(false);

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSuccess = () => {
    clearForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (performValidation(value)) {
      case "valid":
        registerPatient({ patient: value }, (response) => {
          if (response.status >= 200 && response.status <= 299) {
            setTitle("Paciente cadastrado com sucesso!");
            handleClickOpen();
            handleSuccess();
          } else {
            const errorMessage = response.data.errors.join("\n"); 
            setTitle(errorMessage);
            handleClickOpen();
            console.log(response)
            setAnimationData(false);
          }
          if (response.status >= 500) {
            setTitle(`Erro ${response.status}:Erro Interno de Servidor`);
            handleClickOpen();
            setAnimationData(false);
          }
        });
        break;
      case "isEmpty":
        setTitle("Preencha todos os campos");
        handleClickOpen();
        break;
        /*
      case "CpfInvalid":
        setTitle("CPF Inválido!");
        handleClickOpen();
        break;*/
      case "DateInvalid":
        setTitle("Data Inválida!");
        handleClickOpen();
        break;
      default:
        setTitle("Erro inesperado");
        handleClickOpen();
        break;
    }
  };

  return (
    <Layout titlePage="Cadastrar Paciente">
      <AlignContent
        backgroundColor={"var(--white)"}
        borderRadius={"2%"}
        style={{padding:"2%" , width: "25%", borderRadius:"2%" }}>
        <form autoComplete="off" className="form" onSubmit={handleSubmit}>
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
              label={"Prontuário:"}
              name={"prontuario"}
              value={value.prontuario}
              maxLength={5}
              minLength={5}
              onChange={onChangeHandler}
              alert={"Somente números"}
            />
          <TextContainer>
            <Text>Data de Nascimento:</Text>
          </TextContainer>
          <WrapperFormField>
            <InputMask
              mask="99/99/9999"
              value={value.birthday}
              onChange={onChangeHandler}
              name={"birthday"}
            >
              {(inputProps) => (
                <Input {...inputProps} type="tel" disableUnderline />
              )}
            </InputMask>
          </WrapperFormField>
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
          {animationData === true ? (
            <div className="loader"></div>
          ) : (
            <div></div>
          )}
          <ButtonPage
            color="var(--medium-purple)"
            hoverColor="var(--white)"
            hoverBackGround="var(--medium-purple)"
          >
            Cadastrar Paciente
          </ButtonPage>
        </form>
      </AlignContent>
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
    </Layout>
  );
};

export default RegisterPatient;
