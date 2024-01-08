import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import "../../constants/colors.css";
import { logout } from "../../services/general/auth/acess";
import ReactTooltip from "react-tooltip";
import PatientIcon from "../../assets/imgs/incosSideMenus/patientIcon.png"
import FormIcon from "../../assets/imgs/incosSideMenus/formIcon.png";
import ExamsIcon from "../../assets/imgs/incosSideMenus/examsIcon.png";
import HistoryIcon from "../../assets/imgs/incosSideMenus/historyIcon.png";
import ExitIcon from "../../assets/imgs/incosSideMenus/exitIcon.png";
import LogoIcon from "../../assets/imgs/logos/Logo.png";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const SideMenuUser = styled.div`
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
  background-color: ${props => props.backgroundColor};
  filter: grayscale(100%) ;
  transition: 0.5s;

  @media only screen and (max-width: 640px) {
    height: 100%;
  }

  &:hover {
    filter: grayscale(0%);
    background-color:${props => props.backgroundColor || "var(--ligth-purple)"};
  }

  &:focus {
    filter: grayscale(0%);
    background-color:"var(--ligth-purple)";
  }

  &:hover img {
    filter: hue-rotate(0deg);
    height: 55%; 
    transition: 0.5s;
  }
 
`;

const ItensSideLogo = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  max-width: 100%;
  height: 50%;
  transition: filter 0.5s ease, height 0.5s ease;

  @media only screen and (max-width: 640px) {
    height: 25px;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;


const SideMenu = () => {
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
    <SideMenuUser>
      <ReactTooltip place="right" type="dark" effect="solid" />
      <ItensSideLogo >
        <Logo  src={LogoIcon}/>
      </ItensSideLogo>
      <ItensSideMenu as={Link}  data-tip="Formulários" to="/dentista/formulários">
        <Img  src={FormIcon} />
      </ItensSideMenu>
      <ItensSideMenu as={Link}  data-tip="Histórico de submissão" to="/dentista/historico">
        <Img src={HistoryIcon}/>
      </ItensSideMenu>
      <ItensSideMenu data-tip="Meus Pacientes" as={Link} to="/dentista/meusPacientes">
        <Img src={PatientIcon} />
      </ItensSideMenu>

      <ItensSideMenu 
      backgroundColor ="var(--recuse)"
      hoverColor = "var(--recuse)"
      onClick={handleClickOpen} 
      data-tip="Sair">
        <Img src={ExitIcon}/>
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
    </SideMenuUser>
  );
};

export default SideMenu;
