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
    width: 200%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    text-decoration: none;
    border-radius: 2%;
    padding-left: 5%;
`;

const ContentPatients = (props) => {
  const { Patients, isSearching, searchTerm  } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 8;
  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const itemsCeil = Math.ceil(Patients.length/ postPerPage);

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
      <ListCardContainer id="seuhistorico">
        <AlignContent>
          { Patients.map((eachMeasurement) => {
           const isMatch = eachMeasurement.name.toLowerCase().includes(searchTerm.toLowerCase());
            return (
                <Card as={Link} to={`/laboratorio/recebidos/detalhesPaciente/${eachMeasurement.id}`} isSearching={isSearching} isMatch={isMatch} key={eachMeasurement.id}>
                    <TextCard>Nome: {eachMeasurement.name}</TextCard>
                    <TextCard>CPF: {eachMeasurement.cpf}</TextCard>
                </Card>
          )})}
        </AlignContent>
      </ListCardContainer>
      <Pagination
        size={itemsCeil}
        postPerPage={postPerPage}
        arrowfunction={arrowClick}
        onItemClick={paginationClick}
        href="#seuhistorico"
      />
    </React.Fragment>
  );
};

export default ContentPatients;

