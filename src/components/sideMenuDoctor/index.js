import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import Icon from "../../assets/imgs/logos/logo.svg";
import Pills from "../../assets/imgs/incosSideMenus/comprimidos 1.svg";
import Group4 from "../../assets/imgs/incosSideMenus/Group 4.svg";
import Pressao from "../../assets/imgs/incosSideMenus/pressao-sanguinea 1.svg";
import Graphic from "../../assets/imgs/incosSideMenus/lucros 1.svg";
import "../../constants/colors.css";
import { logout } from "../../services/index";
import ReactTooltip from "react-tooltip";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const SideMenuMedic = styled.div`
  width: 110px;
  height: 100vh;
  background-color: var(--white);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  top: 0;
  left: 0;

  @media only screen and (max-width: 640px) {
    width: 100%;
    height: 10%;
    position: fixed;
    top: auto;
    bottom: 0;
    flex-direction: row;
    z-index: 10;
  }
`;

const ItensSideMenu = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex: 1 1;

  @media only screen and (max-width: 640px) {
    height: 100%;
  }
`;

const Logo = styled.img`
  width: 40px;
  height: 50px;
`;

const Img = styled.img`
  width: 40px;
  height: 50px;
  filter: grayscale(100%);
  transition: 0.5s;
  &:focus {
    filter: grayscale(0%);
  }
  &:hover {
    filter: grayscale(0%);
    transition: 0.5s;
  }
  @media only screen and (max-width: 640px) {
    height: 25px;
  }
`;

const SideMenuDoctor = () => {
  const [open, setOpen] = React.useState(false);

  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logoutPatient = () => {
    logout();
    history.push("/");
  };

  return (
    <SideMenuMedic>
      <ReactTooltip place="right" type="dark" effect="solid" />
      <ItensSideMenu as={Link} to="/homeMedic" style={{ flex: 0.5 }}>
        <Logo src={Icon} />
      </ItensSideMenu>
      <ItensSideMenu as={Link} to="/acompanhamento" data-tip="Histórico Medição">
        <Img src={Pressao} />
      </ItensSideMenu>
      <ItensSideMenu as={Link} to="/acompanhamentoMedicacao" data-tip="Histórico Medicação">
        <Img src={Pills} />
      </ItensSideMenu>
      <ItensSideMenu data-tip="Gráfico Paciente" as={Link} to="/graficoDoctor">
        <Img src={Graphic} />
      </ItensSideMenu>
      <ItensSideMenu onClick={handleClickOpen} data-tip="Sair" style={{ flex: 0.5 }}>
        <Img src={Group4} />
      </ItensSideMenu>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Gostaria de sair do sistema?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Caso tenha certeza que queira sair do sitema clique em "Sim".
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Não
          </Button>
          <Button onClick={logoutPatient} color="primary" autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </SideMenuMedic>
  );
};

export default SideMenuDoctor;
