import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { logout } from "../../services/general/auth/acess";
import { useHistory } from "react-router-dom";
import "../../constants/colors.css";
import ReactTooltip from "react-tooltip";

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
  flex: 1 1;
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
`;

const SideMenuAdmin = () => {
  const history = useHistory();

  const logoutAdmin = () => {
    logout();
    history.push("/");
  };
  
  return (
    <SideMenuUser>
      <ReactTooltip place="right" type="dark" effect="solid" />
      <ItensSideMenu as={Link} to="/home/admin" style={{ flex: 0.5 }}>
        <Logo  />
      </ItensSideMenu>
      <ItensSideMenu data-tip="Medico" as={Link} to={"/admin/confirmMedic"}>
        <Img  />
      </ItensSideMenu>
      <ItensSideMenu data-tip="Exportar" as={Link} to={"/admin/exportar"}>
        <Img />
      </ItensSideMenu>
      <ItensSideMenu onClick={logoutAdmin} data-tip="Sair" style={{ flex: 0.5 }}>
        <Img  />
      </ItensSideMenu>
    </SideMenuUser>
  );
};

export default SideMenuAdmin;
