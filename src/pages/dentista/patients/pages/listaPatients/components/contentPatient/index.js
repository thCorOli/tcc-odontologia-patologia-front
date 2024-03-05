import React, { useState } from "react";
import {
  ListCardContainer,
  AlignContent,
} from "../../../../../../../constants/containers/index";
import "../../../../../../../constants/colors.css";
import Pagination from "../../../../../../../components/pagination/index";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TextCard } from "../../../../../../../components/texts/index";


const ContentPatient= (props) => {
  const { Patients } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 8;
  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const currentPatients = Patients.slice(firstIndex, lastIndex);
  const itemsCeil = Math.ceil(Patients.length / postPerPage);


  const Card = styled.div`
    background-color: var(--white);
    width: 200%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    text-decoration: none;
    border-radius: 2%;
    padding-left: 5%;
`;

  const paginationClick = (pg) => {
    setCurrentPage(pg);
  };

  const arrowClick = (dir) => {
    if (dir === "left" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (dir === "right" && currentPage <= itemsCeil - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <React.Fragment>
    <ListCardContainer id="listPatients">
      <AlignContent>
        { Patients.map((eachPatient) => {
          return (
              <Card as={Link} to={`/dentista/detalhesPaciente/${eachPatient.id}`} key={eachPatient.id}>
                  <TextCard>Nome: {eachPatient.name}</TextCard>
                  <TextCard>Prontuário: {eachPatient.prontuario}</TextCard>
                  <TextCard>CPF: {eachPatient.cpf}</TextCard>
              </Card>
        )})}
      </AlignContent>
    </ListCardContainer>
    <Pagination
      size={itemsCeil}
      postPerPage={postPerPage}
      arrowfunction={arrowClick}
      onItemClick={paginationClick}
      href="#listPatients"
    />
  </React.Fragment>
  );
};



export default ContentPatient;