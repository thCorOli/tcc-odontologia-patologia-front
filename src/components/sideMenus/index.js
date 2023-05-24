import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import Icon from "../../assets/imgs/logos/logo.svg";
import Pills from "../../assets/imgs/incosSideMenus/comprimidos 1.svg";
import Group4 from "../../assets/imgs/incosSideMenus/Group 4.svg";
import Medico from "../../assets/imgs/incosSideMenus/medico 1.svg";
import Relatorio from "../../assets/imgs/incosSideMenus/pasta 1.svg";
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
      <ItensSideMenu as={Link} to="/home/patient">
        <Logo src={Icon} />
      </ItensSideMenu>
      <ItensSideMenu as={Link} to="/user/medicao" data-tip="Exames e Medidas">
        <Img src={Pressao} />
      </ItensSideMenu>
      <ItensSideMenu as={Link} to="/user/medicacao" data-tip="Medicação">
        <Img src={Pills} />
      </ItensSideMenu>
      <ItensSideMenu
        data-tip="Selecionar Médico"
        as={Link}
        to={"/user/selecionarMedico"}
      >
        <Img src={Medico} />
      </ItensSideMenu>
      <ItensSideMenu data-tip="Histórico Médico" as={Link} to="/user/historico">
        <Img src={Relatorio} />
      </ItensSideMenu>
      <ItensSideMenu data-tip="Gráfico" as={Link} to="/user/grafico">
        <Img src={Graphic} />
      </ItensSideMenu>
      <ItensSideMenu onClick={handleClickOpen} data-tip="Sair">
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
    </SideMenuUser>
  );
};

export default SideMenu;
