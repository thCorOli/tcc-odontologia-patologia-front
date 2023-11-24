import React from "react";
import { MainContainer } from "../../../constants/containers/index";
import "../../../constants/colors.css";
import IMG404 from "../../../assets/imgs/404/404.svg";
import Logo from "../../../assets/imgs/icon_provisorio.png";

import { Link } from "react-router-dom";
import styled from "styled-components";

const H1404 = styled.h1`
  font-size: 25em;
  text-align: center;
  font-family: "Roboto Condensed";
  color: var(--primary-blue);
  line-height: 337px;
`;

const Background = styled.div`
  background-color: var(--gray);
  padding-top: 5vh;
  height: 100vh;
`;
const Text = styled.p`
  color: var(--primary-blue);
  font-size: 2.5em;
  text-align: center;
  font-family: "Roboto Condensed";
  font-weight: bold;
`;

const Img404 = styled.img`
  width: 90%;
  height: 490px;
  margin-right: 180px;
`;

const SideSide = styled.div`
  display: flex;
  justify-content: center;
`;

const LogoReducted = styled.img`
  width: 400px;
  height: 102.98px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 135px;
`;

const Pagina404 = () => {
  return (
    <Background>
      <MainContainer>
        <ImageContainer as={Link} to="/">
          <LogoReducted src={Logo} />
        </ImageContainer>
        <SideSide>
          <Img404 src={IMG404} />
          <div>
            <H1404>404</H1404>
            <Text>Página não encontrada</Text>
          </div>
        </SideSide>
      </MainContainer>
    </Background>
  );
};

export default Pagina404;
