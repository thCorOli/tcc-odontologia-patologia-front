import React, { useState } from "react";
import {
  ListCardContainer,
  AlignContent,
} from "../../../../../constants/containers/index";
import { TextCard } from "../../../../../components/texts";
import { Accordion, AccordionSummary, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styled from "styled-components";
import "../../../../../constants/colors.css";
import Pagination from "../../../../../components/pagination/index";

const SizeAccordion = styled.div`
  width: 400px;
  height: 20%;
  margin-bottom: 3%;
  @media screen and (max-width: 640px) {
    width: 60%;
    font-size: 0.75em;
  }
`;
const ContentAccordion = styled.div`
  padding: 2% 5%;
  
`;

const AlignTitleAccordion = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column
`;

const EachElement = styled.div`
  border-bottom: 2px solid gray;
`;

const BdToDate = (dateBD) => {
  const date = new Date(dateBD);
  return date.toLocaleString();
};

const BdToDateElements = (dateElement) => {
  const date = new Date(dateElement);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const fullDate = day + "/" + month + "/" + year;
  return fullDate;
}

const ContentPatients = (props) => {
  const vector = props.Patients;
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 8;
  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const currentHistories = vector.form_measurement.slice(firstIndex, lastIndex);
  const itemsCeil = Math.ceil(vector.form_measurement.length / postPerPage);

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
          {currentHistories.map((eachMeasurement) => (
            <SizeAccordion key={eachMeasurement.id}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <AlignTitleAccordion>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        fontFamily: "Roboto Condensed",
                        fontSize: "1.5em",
                        width:"50%"
                      }}
                    >
                      {eachMeasurement.name}<br/>
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "1.5em",
                        width:"100%"
                      }}
                    >
                      {BdToDate(eachMeasurement.date)}
                    </Typography>
                  </AlignTitleAccordion>
                </AccordionSummary>
                <ContentAccordion>
                  <EachElement key={eachMeasurement.id}>
                    <TextCard>{eachMeasurement.value}</TextCard>
                  </EachElement>
                </ContentAccordion>
              </Accordion>
            </SizeAccordion>
          ))}
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