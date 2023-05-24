import styled, { css } from "styled-components";

const Background = styled.div`
  height: 100vh;
  padding-top: 50px;
  overflow: hidden;
  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `};
`;

export default Background;
