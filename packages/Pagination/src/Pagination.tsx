import React, { FunctionComponent, useEffect, useState } from 'react';

interface IPaginationProps {
  totalPages: number;
  activePage: number;
  paginationPagesPerSide: number;
  defaultItemsPerPage: number;
  handleOnPageChange: ({ itemsPerPage, currentPage }: { itemsPerPage: number, currentPage: number }) => void;
}

const Pagination: FunctionComponent<IPaginationProps> = ({
  totalPages,
  handleOnPageChange,
  activePage,
  paginationPagesPerSide,
  defaultItemsPerPage
}): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(activePage)
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage)

  useEffect(() => {
    handleOnPageChange({ currentPage, itemsPerPage })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, itemsPerPage])

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
    setItemsPerPage(totalRows);
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
          className="pagination__input"
          placeholder={itemsPerPage.toString()}
          onChange={handleRowsPerPage}
        />
        <span>rows per page</span>
      </div>
      <ul className="pagination">
        {currentPage !== 1 && <li className="pagination__item pagination__item--icon" onClick={prevPage}>
          &lsaquo;
        </li>}
        {currentPage - 2 >= paginationPagesPerSide && <>
          <li className="pagination__item" onClick={() => {
            setCurrentPage(1);
          }}>
            1
          </li>
          <li>...</li>

        </>}
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
        {totalPages - currentPage >= paginationPagesPerSide && <>
          <li>...</li>
          <li className="pagination__item" onClick={() => {
            setCurrentPage(totalPages);
          }}>
            {totalPages}
          </li>
        </>}
        {currentPage !== totalPages && <li className="pagination__item pagination__item--icon" onClick={nextPage}>
          &rsaquo;
        </li>}
      </ul>
    </div>
  );
};

Pagination.defaultProps = {
  activePage: 1,
  paginationPagesPerSide: 5,
  defaultItemsPerPage: 5
};

export default Pagination;
