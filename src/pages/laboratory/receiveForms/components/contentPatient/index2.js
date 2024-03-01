import React, { useState } from "react";
import {
  ListCardContainer,
  AlignContent,
} from "../../../../../constants/containers/index";
import { TextCard } from "../../../../../components/texts";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../../../../constants/colors.css";
import Pagination from "../../../../../components/pagination/index";

const Card = styled.div`
    background-color: var(--white);
    width: 25%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    text-decoration: none;
    border-radius: 2%;
    padding-left: 1%;
`;

const ContentPatients = (props) => {
  const { patients, isSearching, searchTerm  } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 8;
  const itemsCeil = Math.ceil(patients?.length / postPerPage) || 1;

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
      <ListCardContainer id="listaPacientes">
        <AlignContent>
          {patients && patients.map((eachPatient) => {
            console.log("AQUI BUGA",eachPatient)
            return (
              <Card as={Link} to={`/laboratorio/recebidos/detalhesPaciente/${eachPatient.id}`} key={eachPatient.id}>
                <TextCard>Nome: {eachPatient.details ? eachPatient.details.name : 'Detalhes indisponíveis'}</TextCard>
                <TextCard>CPF: {eachPatient.details ? eachPatient.details.cpf : 'Detalhes indisponíveis'}</TextCard>
              </Card>
            );
          })}
        </AlignContent>
      </ListCardContainer>
      <Pagination
        size={itemsCeil}
        postPerPage={postPerPage}
        arrowfunction={arrowClick}
        onItemClick={paginationClick}
        href="#listaPacientes"
      />
    </React.Fragment>
  );
  
}

export default ContentPatients;
