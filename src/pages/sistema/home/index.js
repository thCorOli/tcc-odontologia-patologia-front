import React from "react";
import Layout from "../../../components/layout/index";
import { Text, TextCard } from "../../../components/texts/index";
import { Card, Img, TextContainer } from "./components/index";
import Hands from "../../../assets/imgs/incosSideMenus/Group.svg";
import SemAcesso from "../semAcesso/index";
import {Redirect} from "react-router-dom";

const HomePaciente = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  
  if (user) {
    if(user.allowed){
      return (
        <Layout titlePage="Home">
          <Card>
            <Img src={Hands} />
            <TextContainer>
              <Text>Bem-vindo</Text>
              <TextCard>
                Bem-vindo a sua área exclusiva do clube! Esse é o sistema do Clube4Care, desenvolvido para realizar as suas medições, verificar medicações e acompanhar sua evolução junto ao seu médico.
              </TextCard>
            </TextContainer>
          </Card>
        </Layout>
      );
    }else {
      return <Redirect to="/formularioIdentificacao"/>
    }
  } else {
    return <SemAcesso />;
  }
};
export default HomePaciente;
