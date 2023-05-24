import React from "react";
import Layout from "../../../../components/layout/index";
import { Card, Img, TitleCard, CardContainer } from "./components/index";
import Medic from "../../../../assets/imgs/incosSideMenus/medico 1.svg";
import PDF from "../../../../assets/imgs/incosSideMenus/exportar 1.svg";
import { Link } from "react-router-dom";
import SemAcesso from "../../semAcesso/index";

const HomeAdmin = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));

  if (admin) {
    return (
      <Layout titlePage="Home">
        <CardContainer>
          <Link to="/admin/confirmMedic" style={{ textDecoration: "none" }}>
            <Card>
              <Img src={Medic} />
              <TitleCard width={"60%"}>Cadastro Medico</TitleCard>
            </Card>
          </Link>
          <Link to="/admin/exportar" style={{ textDecoration: "none" }}>
            <Card>
              <Img src={PDF} />
              <TitleCard width={"60%"}>Exportar PDF</TitleCard>
            </Card>
          </Link>
        </CardContainer>
      </Layout>
    );
  } else return <SemAcesso />;
};
export default HomeAdmin;
