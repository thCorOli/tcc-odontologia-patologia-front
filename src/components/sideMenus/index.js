import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import "../../constants/colors.css";
import { logout } from "../../services/general/auth";
import ReactTooltip from "react-tooltip";
import PatientIcon from "../../assets/imgs/incosSideMenus/patientIcon.png"
import FormIcon from "../../assets/imgs/incosSideMenus/formIcon.png";
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
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 110px;
  height: 100vh;
  transition: width 0.3s ease;
  z-index: 1;

  @media screen and (max-width: 640px) {
    width: ${({ open }) => (open ? "100%" : "0px")}
  }
`;

const MenuToggle = styled.div`
  cursor: pointer;
  padding: 20px;
`;

const ItensSideMenu = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => props.backgroundColor};
  filter: grayscale(100%);
  transition: 0.5s;

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


const SideMenu = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const [openSideMenu, setOpenSideMenu] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logoutPatient = () => {
    setOpen(false);
    logout();
    localStorage.removeItem("user");
    history.push("/");
  };

  const handleToggleMenu = () => {
    setOpenSideMenu(!openSideMenu);
  };

  const handleMenuClick = () => {
    setOpenSideMenu(false); // Fechar o menu ao clicar em um item
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpenSideMenu(false); // Fechar o menu ao clicar fora dele
    }
  };

  return (
    <React.Fragment>
      <MenuToggle onClick={handleToggleMenu}>☰</MenuToggle>
      <SideMenuUser open={openSideMenu} onClick={handleBackgroundClick}>
        <ReactTooltip place="right" type="dark" effect="solid" />
        <ItensSideLogo >
          <Img src={LogoIcon}/>
        </ItensSideLogo>
        <ItensSideMenu as={Link} data-tip="Formulários" to="/dentista/formulários" onClick={handleMenuClick}>
          <Img src={FormIcon} />
        </ItensSideMenu>
        <ItensSideMenu as={Link} data-tip="Laudo Médico" to="/dentista/laudo" onClick={handleMenuClick}>
          <Img src={HistoryIcon}/>
        </ItensSideMenu>
        <ItensSideMenu data-tip="Meus Pacientes" as={Link} to="/dentista/meusPacientes" onClick={handleMenuClick}>
          <Img src={PatientIcon} />
        </ItensSideMenu>

        <ItensSideMenu 
          backgroundColor ="var(--recuse)"
          hoverColor = "var(--recuse)"
          onClick={handleClickOpen} 
          data-tip="Sair"
        >
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
    </React.Fragment>
  );
};

export default SideMenu;
