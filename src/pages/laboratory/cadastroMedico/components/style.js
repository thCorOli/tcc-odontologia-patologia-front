import styled from "styled-components";

export const Card = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  width: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2%;
`;

export const Background = styled.div`
  background-color: var(--gray);
  padding-top: 5vh;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  width: 500px;
  height: 100%;
`;

export const SideSide = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Select = styled.select`
  font-family: "Roboto Condensed";
  border-radius: 10px;
  border: none;
  width: 30%;
  height: 50px;
  font-size: 1.25em;
  font-weight: bold;
  line-height: 42px;
  text-align: center;
  margin-right: 57px;
  padding: 10px;
  background-color: var(--gray);
`;
