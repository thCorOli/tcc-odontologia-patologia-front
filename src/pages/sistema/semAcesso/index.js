import React from "react";
import LogoFull from "../../../assets/imgs/logos/logoFull.svg";
import { MainContainer } from "../../../constants/containers/index";
import { Text } from "../../../components/texts/index";
import "../../../constants/colors.css";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.img`
  width: 50%;
  height: 50%;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Centralized = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin: 25px 0;
`;

const Background = styled.div`
  padding-top: 15vh;
  background-color: var(--gray);
  height: 85vh;
`;

const SemAcesso = () => {
  const history = useHistory();

  const TimeOut = () => {
    setTimeout(() => {
      history.push("/");
    }, 5000);
  };
  return (
    <Background onLoad={TimeOut}>
      <MainContainer>
        <LogoContainer>
          <Logo src={LogoFull} />
        </LogoContainer>
        <Centralized>
          <Text>
            Erro ao acessar a página.
            <br /> Por favor logue no sistema para acessar o conteúdo oferecido
            pelo Club4Care.
          </Text>
        </Centralized>

        {/* <Button as={Link} to="/">
          Ir para a página inicial
        </Button> */}
      </MainContainer>
    </Background>
  );
};
export default SemAcesso;
