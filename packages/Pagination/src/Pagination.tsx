import React, { FunctionComponent, useEffect, useState } from 'react';

interface IPaginationProps {
  totalPages: number;
  activePage: number;
  paginationPagesPerSide: number;
  defaultRowsPerPage: number;
  handleOnPageChange: ({ rowsPerPage, currentPage }: { rowsPerPage: number, currentPage: number }) => void;
}

const Pagination: FunctionComponent<IPaginationProps> = ({
  totalPages,
  handleOnPageChange,
  activePage,
  paginationPagesPerSide,
  defaultRowsPerPage
}): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(activePage)
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage)

  useEffect(() => {
    handleOnPageChange({ currentPage, rowsPerPage })
  }, [currentPage, handleOnPageChange, rowsPerPage])

  const getPaginationNumbers = () => {
    const { nextPages, prevPages } = getPagesPerSide();
    const numbers: number[] = [];
    for (let number = prevPages; number <= nextPages; number++) {
      numbers.push(number);
    }
    return numbers;
  };

  const getPagesPerSide = () => {
    let prevPages: number = currentPage - paginationPagesPerSide;
    let nextPages: number = currentPage + paginationPagesPerSide;
    if (prevPages <= 0) prevPages = 1;
    if (nextPages > totalPages) nextPages = totalPages;
    return { nextPages, prevPages };
  };

  const handleRowsPerPage = ({ target: { value } }) => {
    const totalRows = parseInt(value) || 0;
    setRowsPerPage(totalRows);
  }

  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  const getItemClassName = (number: number) =>
    `pagination__item ${number === currentPage ? "pagination__item--active" : ""
    }`;

  const currentNumbers: number[] = getPaginationNumbers();

  return (
    <div className="pagination">
      <div>
        <span>Displaying</span>
        <input
          min="0"
          className="pagination__input"
          type="number"
          placeholder="Go to"
          value={rowsPerPage}
          onChange={handleRowsPerPage}
        />
        <span>rows per page</span>
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
              setCurrentPage(number);
            }}
          >
            {number}
          </li>
        ))}
        <li>...</li>
        <li className="pagination__item" onClick={() => {
          setCurrentPage(totalPages);
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
  activePage: 1,
  paginationPagesPerSide: 5,
  defaultRowsPerPage: 10
};

export default Pagination;
