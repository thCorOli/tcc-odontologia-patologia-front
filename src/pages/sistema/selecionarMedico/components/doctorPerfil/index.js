/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { getDoctorById } from "../../../../../services/index";
import { Text } from "../../../../../components/texts/index";
import ButtonPage from "../../../../../components/button/index";
import { useHistory } from "react-router-dom";
import { AlignContent } from "../../../../../constants/containers/index";
import { RemoveDoctor } from "../../../../../services/index";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import styled from "styled-components";

const ContainerButton = styled.div`
  width: 40%;
  margin-top: 40px;
`;

const DoctorPerfil = (props) => {
  const [Doctor, setDoctor] = useState([]);
  const user = props.user;
  const setUser = props.setUser;
  const a = props.mounted;
  const id = user.patient.doctor_id;
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState(false);
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    a.current = true;
    getDoctorById(id, (response) => {
      if (a.current) setDoctor(response.data.user);
    });
    return () => {
      a.current = false;
    };
  }, [id, a]);

  const deleteDoctor = () => {
    RemoveDoctor((response) => {
      if (response.status >= 200 && response.status <= 299) {
          
          let token = JSON.parse(localStorage.getItem("user")).token
          localStorage.setItem("user", JSON.stringify({token: token, patient: response.data.patient}));  
          setUser(response.data);
          handleClose();
  } else {
    setTitle(response.data.errors);
    handleClickOpen();
  }
});
};

return (
<React.Fragment>
  <AlignContent>
    <Text>Informações do seu médico:</Text>
    <Text>Nome: {Doctor.name}</Text>
    <Text>Email: {Doctor.email}</Text>
    <Text>Data de Nascimento: {Doctor.birthday}</Text>
    <Text>CRM: {Doctor.crm}</Text>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Deseja se desvincular deste médico?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Tem certeza que deseja se desvincular desse médico.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Não
        </Button>
        <Button onClick={deleteDoctor} color="primary" autoFocus>
          Sim
        </Button>
      </DialogActions>
    </Dialog>
  </AlignContent>
  <ContainerButton>
    <ButtonPage onClick={handleClickOpen}>Desvincular</ButtonPage>
  </ContainerButton>
</React.Fragment>
);
};

export default DoctorPerfil;
