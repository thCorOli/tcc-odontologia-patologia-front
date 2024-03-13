import React, {useState} from "react";
import Layout from "../../../components/layout/index";
import ButtonPage from "../../../components/button/index";
import FormField from "../../../components/formfield/index";
import useForm from "../../../hooks/useForm/index";
import "../../../constants/colors.css";
import "./components/form.css";
import {
  Text,
  TextContainer,
  Input,
  WrapperFormField,
} from "./components/style";
import {
  AlignContent
} from "../../../constants/containers/index";
import "../../../components/loader/loader.css";
import {
  hasEmptyFields
} from "../../../services/general/security";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

const Laudo = () => {

  const [animationData, setAnimationData] = useState(false);

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(false);

  const { value, onChangeHandler, filterText, cpfMask, clearForm } = useForm({
    name: "",
    registro: "",
    macroscopia:"",
    diagnostico:"",
    nota:"",
    localLesao:"",
    procedimento: "",
    material:"",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSuccess = () => {
    clearForm();
  };

  return (
    <Layout titlePage="Laudo">
      <AlignContent
      backgroundColor={"var(--white)"}
      borderRadius={"2%"}
      style={{padding:"2%" , width: "25%", borderRadius:"2%" }}>
        <form autoComplete="off" className="form">
          <FormField
            label={"Nome do paciente:"}
            name={"name"}
            value={value.name}
            onChange={onChangeHandler}
          />

          <FormField
            label={"Registro:"}
            name={"registro"}
            value={value.registro}
            onChange={onChangeHandler}
          />
            <FormField
              label={"Tipo do material:"}
              name={"material"}
              value={value.material}
              maxLength={5}
              minLength={5}
              onChange={onChangeHandler}
            />
          
          <div style={{ width: "100%" }}>
            <FormField
              label={"Tipo de procedimento:"}
              name={"procedimento"}
              value={value.procedimento}
              type={"text"}
              onChange={onChangeHandler}
              
            />

            <FormField
              label={"Local da lesão:"}
              name={"localLesao"}
              value={value.localLesao}
              maxLength={5}
              minLength={5}
              onChange={onChangeHandler}
            />

            <FormField
              label={"Macroscopia:"}
              name={"macroscopia"}
              value={value.macroscopia}
              onChange={onChangeHandler}
            />
            <FormField
              label={"Diagnostico:"}
              name={"diagnostico"}
              value={value.diagnostico}
              onChange={onChangeHandler}
            />
            <FormField
              label={"Nota:"}
              name={"nota"}
              type={"textarea"}
              value={value.nota}
              onChange={onChangeHandler}
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
            Gerar Laudo
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

export default Laudo;