import styled from "styled-components";

export const LoginPanel = styled.div`
  width: 50%;
  height: 80vh;
  margin: 0 auto 45px auto;

  @media screen and (max-width: 960px) {
    width: 80%;
    height: 70vh;
  }
  @media screen and (max-width: 640px) {
    width: 90%;
    height: 80vh;
  }
`;

export const LogoFullLogin = styled.img`
  width: 80%;
  margin-bottom: 45px;
  object-fit: contain;
`;
