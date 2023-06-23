import styled, { css } from "styled-components";

const Background = styled.div`
  height: 100vh;
  padding: 10% 0;
  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `};
`;

export default Background;
