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
  width: 50%;
  height: 20%;
  margin-bottom: 2px;
  @media screen and (max-width: 640px) {
    width: 60%;
    font-size: 0.75em;
  }
`;
const ContentAccordion = styled.div`
  padding: 2% 5%;
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

const ContentHistory = (props) => {
  const vector = props.History;
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 8;
  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const currentHistories = vector.slice(firstIndex, lastIndex);
  const itemsCeil = Math.ceil(vector.length / postPerPage);

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
          {currentHistories.map((eachHistory) => (
            <SizeAccordion key={eachHistory.id}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontFamily: "Roboto Condensed",
                      fontSize: "1.5em",
                    }}
                  >
                    {BdToDate(eachHistory.created_at)}
                    
                  </Typography>
                </AccordionSummary>
                <ContentAccordion>
                  {eachHistory.form_measurement.map((eachMeasurement)=>(
                    <EachElement key={eachMeasurement.id}>
                      <TextCard>{eachMeasurement.name}: {eachMeasurement.value} {eachMeasurement.unit}</TextCard>
                      <TextCard>Data do Exame: {BdToDateElements(eachMeasurement.date)}</TextCard>
                    </EachElement>
                  ))}     
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



export default ContentHistory;
