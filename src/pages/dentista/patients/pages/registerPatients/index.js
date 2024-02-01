import React, { useState } from "react";
import Layout from "../../../../../components/layout/index";
import ButtonPage from "../../../../../components/button/index";
import { MainContainer } from "../../../../../constants/containers/index";
import FormField from "../../../../../components/formfield/index";
import useForm from "../../../../../hooks/useForm/index";
import "../../../../../constants/colors.css";
import "./components/form.css";
import {
  ContentContainer,
  Text,
  TextContainer,
  Input,
  WrapperFormField,
} from "./components/style";
import "../../../../../components/loader/loader.css";
import InputMask from 'react-input-mask';
import { registerPatient } from "../../../../../services/dentista";
import { hasEmptyFields,isCpfValid,isDateValid } from "../../../../../services/general/security";

const RegisterPatient = () => {

    const [shouldAnimate, setShouldAnimate] = useState(false);

    const { value, onChangeHandler, filterText, cpfMask, clearForm  } = useForm({
        name: "",
        email: "",
        birthday: "",
        cpf: "",
      });

    const performValidation = (user) => {
        if(hasEmptyFields(user))
          return 'isEmpty'
        if(!isCpfValid(user.cpf))
          return 'CpfInvalid'
        if(!isDateValid(user.birthday))
          return 'DateInvalid'
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
        clearForm();
    };
      
    const handleSubmit = (e) => {
        e.preventDefault();
        switch (performValidation(value)) {
         case "valid":
           value.birthday = value.birthday.split('/').reverse().join('-');
           setAnimationData(true);
           registerPatient({ patient: value }, (response) => {
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
         default:
           setTitle("Erro inesperado");
           handleClickOpen();
           break;
        }
    }

    return(
        <Layout titlePage="Cadastrar Paciente">
            <MainContainer>
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
      </MainContainer>
    </Layout>
    )
}

export default RegisterPatient;