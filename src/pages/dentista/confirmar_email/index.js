import React, { useEffect } from "react";
import { MainContainer } from "../../../constants/containers/index";
import styled from "styled-components";
import "../../constants/colors.css";
import Logo from "../../assets/imgs/logos/logoFull.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

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

const ConfirmarEmail = (props) => {
  const search = props.location.search;
  const params = new URLSearchParams(search);
  const token = params.get("token");
  const [confirmingEmail, setConfirmingEmail] = useState(true);

  useEffect(() => {
    fetch(
      `https://club4care.com.br/api/patients/${token}/confirm_email`
    )
      .then((res) => res.json())
      .then((data) => {
        setConfirmingEmail(false);
      })
      .catch((err) => console.log(err));
  });
  

  return (
    <Background>
      <MainContainer>
        <ImageContainer as={Link} to="/">
          <LogoReducted src={Logo} />
        </ImageContainer>
        <SideSide>
          <div className="confirm">
            {confirmingEmail ? (
              <Text>Estamos confirmando seu email aguarde um momento.</Text>
            ) : (
              <Text>Email Confirmado. Pode logar normalmente.</Text>
            )}
          </div>
        </SideSide>
      </MainContainer>
    </Background>
  );
};

export default ConfirmarEmail;
