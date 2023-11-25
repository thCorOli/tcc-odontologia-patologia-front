import styled, { css } from "styled-components";

const Background = styled.div`
  height: 100vh;
  overflow: hidden;
  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `};
`;

export default Background;
