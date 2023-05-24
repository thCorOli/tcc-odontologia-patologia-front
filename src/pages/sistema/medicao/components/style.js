import styled from "styled-components";
import "../../../../constants/colors.css";

export const Card = styled.div`
  width: 50%;
  height: 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  @media screen and (max-width: 640px) {
    margin-bottom: 5px;
  }
`;

export const FormFieldContainer = styled.div`
  padding-left: 10px;
  display: flex;
  width: 80%;
  flex-direction: column;
  @media screen and (max-width: 640px) {
    padding-left: 2px;
  }
`;

export const Padding = styled.div`
  padding-left: 20px;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 0px;
`;

export const ButtonContainer = styled.div`
  width: 50%;
`;

export const SizeInput = styled.div`
  width: 30%;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const SideBySide = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 25px;
  @media screen and (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Links = styled.a`
  text-decoration: none;
  display: block;
  color: var(--black);
  :hover {
    background-color: var(--gray);
  }
`;

export const BackToTop = styled.div`
  background-color: #38322e;
  border-radius: 65px;
  bottom: 14px;
  box-shadow: 2px 3px 19px -2px rgba(0, 0, 0, .75);
  color: #d9a000;
  cursor: pointer;
  height: 40px;
  position: fixed;
  right: 22px;
  width: 40px;
  z-index: 3;
  &:after {
    content: '▲';
    display: flex;
    justify-content: center;
    padding-left: 1px;
    padding-top: 10px;
}
`;