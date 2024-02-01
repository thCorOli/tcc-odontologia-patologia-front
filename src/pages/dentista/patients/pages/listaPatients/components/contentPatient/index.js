import React, { useState } from "react";
import {
  ListCardContainer,
  AlignContent,
} from "../../../../../../../constants/containers/index";
import { TextCard } from "../../../../../../../components/texts/index"; 
import "../../../../../../../constants/colors.css";
import Pagination from "../../../../../../../components/pagination/index";



const ContentPatient= (props) => {
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
      <ListCardContainer id="listaPaciente">
        <AlignContent>
          {currentHistories.map((eachPacient) => (
            <div key={eachPacient.id}>
              <p>eachPacient.name</p>
              <p>eachPacient.birthday</p>
            </div>
          ))}
        </AlignContent>
      </ListCardContainer>
      <Pagination
        size={itemsCeil}
        postPerPage={postPerPage}
        arrowfunction={arrowClick}
        onItemClick={paginationClick}
        href="#listaPaciente"
      />
    </React.Fragment>
  );
};



export default ContentPatient;
