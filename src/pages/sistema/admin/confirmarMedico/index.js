/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/index";
import SemAcesso from "../../semAcesso/index";
import styled from "styled-components";
import "../../../../constants/colors.css";
import { listConfirmMedic, confirmMedic } from "../../../../services/index";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Checked from "../../../../assets/imgs/buttons/checked.svg";
import Negated from "../../../../assets/imgs/buttons/x-symbol.svg";

const SvgButton = styled.img`
  width: 80%;
  object-fit: contain;
`;

const MedicTableRow = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const MedicTable = styled.div`
  width: 60%;
  height: auto;
  background-color: var(--white);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${MedicTableRow}:nth-child(even) {
    background: var(--background);
  }
`;

const MedicName = styled.h3`
  font-family: "Roboto Condensed";
  font-size: 2rem;
  font-weight: bold;
  line-height: 50px;
  color: (--black);
  width: 30%;
  overflow: hidden;
`;

const MedicCRM = styled.h3`
  font-family: "Roboto Condensed";
  font-size: 2rem;
  font-weight: bold;
  line-height: 50px;
  color: (--black);
  width: 30%;
  overflow: hidden;
`;

const MedicButtons = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ConfirmButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: var(--confirm);
  border: none;
  border-radius: 10px;
  color: var(--white);
  font-size: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const RecuseButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: var(--recuse);
  border: none;
  border-radius: 10px;
  color: var(--white);
  font-size: 2.5rem;
`;

const ConfirmMedic = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));

  const [open, setOpen] = React.useState(false);

  const [title, setTitle] = React.useState(false);

  const [Doctors, setDoctors] = React.useState(0);

  const [animationData, setAnimationData] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const acceptMedic = (e) => {
    if (e.currentTarget.tagName === "BUTTON") {
      confirmMedic(e.currentTarget.value)
        .then((response) => {
          console.log(response)
          if (response) {
            setTitle("Médico cadastrado com sucesso");
            handleClickOpen();
          } else {
            setTitle("Erro ao cadastrar Médico");
            handleClickOpen();
          }
        })
        .catch((error) => {
          setTitle("Erro ao cadastrar Médico");
          handleClickOpen();
        });
    }
  };

  useEffect(() => {
    listConfirmMedic().then((response) => {
      setDoctors(Array.from(response.doctors));
    });
  }, []);


  if (admin) {
    return (
      <Layout titlePage="Confirmar Médico">
        {Doctors === 0 ? (
          <div style={{ width: "40vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div className="loader"></div>
            <MedicName>Carregando</MedicName>
          </div>
        ) : Doctors.length === 0 ? (
          <MedicName style={{ textAlign: "center" }}>Vazio</MedicName>
        ) : (
          <MedicTable>
            <MedicTableRow>
              <MedicName style={{ textAlign: "center" }}>NOME</MedicName>
              <MedicCRM style={{ textAlign: "center" }}>CRM</MedicCRM>
              <MedicButtons />
            </MedicTableRow>
            {Doctors.map((doctor) => (
              <MedicTableRow key={doctor.id}>
                <MedicName>{doctor.name}</MedicName>
                <MedicCRM>{doctor.crm}</MedicCRM>
                <MedicButtons>
                  <ConfirmButton value={doctor.id} onClick={acceptMedic}>
                    <SvgButton value={doctor.id} src={Checked} />
                  </ConfirmButton>
                  <RecuseButton value={doctor.id}>
                    <SvgButton src={Negated} />
                  </RecuseButton>
                </MedicButtons>
              </MedicTableRow>
            ))}
          </MedicTable>
        )}
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
  } else return <SemAcesso />;
};

export default ConfirmMedic;
