import React, { Fragment, FunctionComponent, useState } from 'react';

interface IPaginationProps {
  totalPages: Number;
  currentPage: Number | any;
  paginationPagesPerSide: Number | any;
  handleOnPageChange: (...args: any[]) => void;
  query?: string;
  pageParameterName?: string;
}

const Pagination: FunctionComponent<IPaginationProps> = ({ 
  totalPages,
  handleOnPageChange,
  currentPage,
  paginationPagesPerSide,
}): JSX.Element => {
  const getPaginationNumbers = () => {
    const { nextPages, prevPages } = getPagesPerSide();
    let numbers: Number[] = [];
    for (let number: any = prevPages; number <= nextPages; number++) {
      numbers.push(number);
    }
    return numbers;
  };

  const getPagesPerSide = () => {
    let prevPages: Number = currentPage - paginationPagesPerSide;
    let nextPages: Number = currentPage + paginationPagesPerSide;
    if (prevPages <= 0) prevPages = 1;
    if (nextPages > totalPages) nextPages = totalPages;
    return { nextPages, prevPages };
  };

  const handleGoToPage = ({ target: { value } }) =>
    !!parseInt(value) && handleOnPageChange(parseInt(value));
  const nextPage = () =>
    currentPage < totalPages && handleOnPageChange(currentPage + 1);
  const prevPage = () => currentPage > 1 && handleOnPageChange(currentPage - 1);
  const getItemClassName = (number) =>
    `pagination__item ${
      number === currentPage ? "pagination__item--active" : ""
    }`;

  const currentNumbers: Number[] = getPaginationNumbers();

  return (
    <div className="pagination">
      <div>
        <span>Displaying</span>
        <input
          min="1"
          className="pagination__input"
          type="number"
          placeholder="Go to"
          value="4"
          onChange={handleGoToPage}
        />
        <span> rows per page</span>
      </div>
      <ul className="pagination">
      <li className="pagination__item pagination__item--icon" onClick={prevPage}>
        &lsaquo;
      </li>
      {currentNumbers.map((number) => (
        <li
          key={`${number}`}
          className={getItemClassName(number)}
          onClick={() => {
            handleOnPageChange(number);
          }}
        >
          {number}
        </li>
      ))}
      <li>...</li>
      <li className="pagination__item" onClick={() => {
            handleOnPageChange(totalPages);
          }}>
        {totalPages}
      </li>
      <li className="pagination__item pagination__item--icon" onClick={nextPage}>
        &rsaquo;
      </li>
      </ul>
    </div>
  );
};

Pagination.defaultProps = {
  currentPage: 1,
  paginationPagesPerSide: 5,
  pageParameterName: "page"
};

export default Pagination;
