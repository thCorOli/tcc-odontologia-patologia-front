import styled, { css } from "styled-components";
import "../../constants/colors.css"

const Background = styled.div`
  height: 100vh;
  overflow: ${({ overflow }) => overflow || 'hidden'};
  background-color: ${({ backgroundColor }) => backgroundColor || "var(--background)"};
`;

export default Background;
