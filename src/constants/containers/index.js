import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
`;

export const ContentContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `};
  ${({ borderRadius }) => css`
    border-radius: ${borderRadius};
  `};
  @media only screen and (max-width: 960px) {
    width: 100%
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  justify-content: space-around;
`;

export const ListCardContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100%;
`;

export const ListCardContainerStriped = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100%;

  >div:nth-child(even)>div{
    background-color: #f4f4f4;
  }
`;

export const AlignContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

   ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `};
`;

export const AlignContentHistory = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
`;

export const MakeSideContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.5rem;
  
  @media only screen and (max-width: 960px) {
    padding: 0.25rem;
}  
`;

export const LineContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
`;

export const Card = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  width: 750px;
  height: 545px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 640px) {
    width: 90%;
  }
`;