import React from 'react';
import Input from '@blaze-react/input';
import usePagination from './hooks/usePagination';

interface PaginationProps {
  totalItems: number;
  currentPage: number;
  visiblePages: number;
  itemsPerPage?: number;
  onPageChange: ({ pageNumber, itemsPerPage, offset }: { pageNumber: number, itemsPerPage: number, offset: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, currentPage, onPageChange, visiblePages, itemsPerPage }) => {

  const { page, handlePageChange, calculatePages, handleOnItemsPerPage } = usePagination({
    totalItems,
    currentPage,
    visiblePages,
    onPageChange,
    defaultItemsPerPage: itemsPerPage
  });

  const getItemClassName = (number: number) =>
    `pagination__item ${number === page ? "pagination__item--active" : ""
    }`;

  const pages = calculatePages();

  return (
    <div className="pagination">
      {itemsPerPage && <div className="pagination__rows">
        <span>Displaying</span>
        <Input
          min="1"
          className="pagination__input"
          value={itemsPerPage.toString()}
          onChange={({ value }) => value && handleOnItemsPerPage(parseInt(value))}
          type="number"

        />
        <span>rows per page</span>
      </div>}
      <ul className="pagination">
        <li className="pagination__item pagination__item--icon"
          onClick={() => handlePageChange(page - 1)}
        >
          &lsaquo;
        </li>
        {pages.map((pageNumber: number, index: number) => (
          <>
            {pageNumber < 0 ? <span key={index}>...</span> : (
              <li
                className={getItemClassName(pageNumber)}
                key={index}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </li>
            )}
          </>
        ))}
        <li
          className="pagination__item pagination__item--icon"
          onClick={() => handlePageChange(page + 1)}
        >
          &rsaquo;
        </li>
      </ul>
    </div>
  );
};

Pagination.defaultProps = {
  visiblePages: 10,
  currentPage: 1,
};

export default Pagination;
