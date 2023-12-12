import React from 'react';
import Input from '@blaze-react/input';
import usePagination from './hooks/usePagination';

const DEFAULT_OPTIONS = {
  previous: <span>&lsaquo;</span>,
  next: <span>&rsaquo;</span>,
  displayText: 'Displaying',
  rowText: 'rows per page'
}
interface PaginationProps {
  options?: {
    previous: string | JSX.Element,
    next: string | JSX.Element
    displayText: string,
    rowText: string
  }
  totalItems: number;
  currentPage: number;
  visiblePages: number;
  itemsPerPage?: number;
  onPageChange: (
    { pageNumber, itemsPerPage, offset }: { pageNumber: number, itemsPerPage: number, offset: number }
  ) => void;
}

const Pagination: React.FC<PaginationProps> = (
  {
    options = DEFAULT_OPTIONS,
    totalItems,
    currentPage,
    onPageChange,
    visiblePages,
    itemsPerPage
  }) => {

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

  const pages = !totalItems ? null : calculatePages();

  return (
    <div className="pagination">
      {itemsPerPage && pages && <div className="pagination__rows" data-testid="items-perpage">
        <span> {options.displayText}</span>
        <Input
          min="1"
          className="pagination__input"
          value={itemsPerPage.toString()}
          onChange={({ value }) => value && handleOnItemsPerPage(parseInt(value))}
          type="number"

        />
        <span> {options.rowText}</span>
      </div>}
      <ul className="pagination">
        <li className="pagination__item pagination__item--icon"
          onClick={() => handlePageChange(page - 1)}
        >
          {options.previous}
        </li>
        {pages && pages.map((pageNumber: number) => (
          <>
            {pageNumber < 0 ? <span key="dots">...</span> : (
              <li
                className={getItemClassName(pageNumber)}
                key={pageNumber}
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
          {options.next}
        </li>
      </ul>
    </div>
  );
};

Pagination.defaultProps = {
  visiblePages: 10,
  currentPage: 1
};

export default Pagination;
