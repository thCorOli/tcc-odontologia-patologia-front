import React, { useState } from "react";
import Background from "../../components/background";
import ButtonPage from "../../components/button/index";
import FormField from "../../components/formfield/index";
import LogoFull from "../../assets/imgs/icon_provisorio.png";
import "../../constants/colors.css";
import useForm from "../../hooks/useForm/index";
import { Panel, Logo, ContentContainer,LinkLogo,ResendEmail } from "../../components/formInfoUsuario/index.js";
import { Link, useHistory } from "react-router-dom";
import {Text} from "../../components/texts"
import "../../components/loader/loader.css";
import "./components/modalLogin.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import {hasEmptyFields,hasSqlStrings} from '../../services/general/security'
import { login } from "../../services/patient";

const Login = () => {

  const [modal, setModal] = useState(false);

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

  const handleCloseModal = () => {
    setModal(false);
  }

  const handleOpenModal = () => {
    setModal(true);
  }
  
const  ResendEmailF = (email,resp) => {
  if (resp.status >= 200 && resp.status <= 299) {
    setTitle("Email reenviado com sucesso!");
    handleClickOpen();
    setAnimationData(false);
  } else {
    setAnimationData(false);
    setTitle(`${resp.data.errors[0]},${resp.data.errors[1]}`);
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
            <form  onSubmit={(e) => {
              e.preventDefault();
                setAnimationData(true);
                console.log("Email ja confirmado"); 
              }
            }>
              <FormField
              label={"Email"}
              onChange={onChangeHandler}
              name={"emailToResend"}
              value={value.emailToResend}
              type={"email"}
              />
              <ButtonPage type={"submit"}>
                Enviar
            </ButtonPage>
              </form>
      </div>
          
      </Modal>
        <ContentContainer
          backgroundColor={"var(--white)"}
          borderRadius={"10px"}
          style={{ padding: "30px 0"}}
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
              alignItems: "center",
              marginBottom: "10px",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              if(!hasEmptyFields(value)){
                login({ patient: value },(response)=>{
                  if(response.status >= 200 && response.status <= 299){
                    setTitle("Logado com sucesso!");
                    handleClickOpen();
                    history.push("/cistoPatologico")
                  }  
                  else{
                    setAnimationData(false);
                    setTitle(`${response.data.errors[0]},${response.data.errors[1]}`);
                    handleClickOpen();
                  }
                });
              } else {
                setTitle("Preencha os campos!");
                handleClickOpen();
              }
            }
          }
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
            
            <ResendEmail as={Link} to="/forgot">
                Esqueci minha senha
            </ResendEmail>
            <ResendEmail onClick={handleOpenModal}>Reenviar Email</ResendEmail>
            {animationData === true ? (
              <div className="loader"></div>
            ) : (
                <div></div>
              )}
               
            <ButtonPage style={{ marginBottom: "2%" }} type={"submit"}>
              Entrar
            </ButtonPage>
          
            <ButtonPage
              as={Link}
              to="/cadastro"
              style={{
                backgroundColor: "var(--black)",
                color: "var(--gray)",
              }}
            >
              Cadastrar
            </ButtonPage>
            
          </form>
        
          
        </ContentContainer>
        
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
