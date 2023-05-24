import React, { useState } from "react";
import Arrow from "../../assets/imgs/arrows/leftArrow";
import "./style.css";
import RightArrow from "../../assets/imgs/arrows/rigthArrow";

const Pagination = (props) => {
  const LengthList = props.size;
  const pageNumbers = [];
  const [inicialBegin, setInicialBegin] = useState(0);
  const [inicialEnd, setInicialEnd] = useState(3);

  for (let i = 1; i <= LengthList; i++) {
    pageNumbers.push(i);
  }

  const setArrow = (dir) => {
    if (dir === "left" && inicialBegin >= 1) {
      let newBegin = inicialBegin - 1;
      let newEnd = newBegin + 3;

      setInicialBegin(newBegin);
      setInicialEnd(newEnd);
    } else if (
      dir === "right" &&
      inicialEnd < pageNumbers[pageNumbers.length - 1]
    ) {
      let newBegin = inicialBegin + 1;
      let newEnd = newBegin + 3;

      setInicialBegin(newBegin);
      setInicialEnd(newEnd);
    }
  };
  return (
    <div className="pagination">
      <div
        onClick={() => {
          props.arrowfunction("left");
          setArrow("left");
        }}
        className="arrows"
      >
        <Arrow />
      </div>
      <ul>
        {inicialBegin < pageNumbers[pageNumbers.length - 8] ? (
          <>
            {pageNumbers.slice(inicialBegin, inicialEnd).map((page) => (
              <li key={page}>
                <a
                  onClick={() => {
                    props.onItemClick(page);
                    setInicialBegin(page - 1);
                    setInicialEnd(page + 2);
                  }}
                  href={props.href}
                >
                  {page}
                </a>
              </li>
            ))}

            <li>
              <p className="dots">...</p>
            </li>

            {pageNumbers.slice(-3, pageNumbers.length).map((page) => (
              <li key={page}>
                <a
                  onClick={() => {
                    props.onItemClick(page);
                  }}
                  href={props.href}
                >
                  {page}
                </a>
              </li>
            ))}
          </>
        ) : (
          pageNumbers.slice(-6, pageNumbers.length).map((page) => (
            <li key={page}>
              <a
                onClick={() => {
                  props.onItemClick(page);
                }}
                href={props.href}
              >
                {page}
              </a>
            </li>
          ))
        )}
      </ul>
      <div
        onClick={() => {
          props.arrowfunction("right");
          setArrow("right");
        }}
        className="arrows"
      >
        <RightArrow />
      </div>
    </div>
  );
};
export default Pagination;
