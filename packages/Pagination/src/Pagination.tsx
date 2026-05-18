import React from 'react';
import Input from '@blaze-react/input';
import { buildClassNames } from '@blaze-react/utils';
import usePagination from './hooks/usePagination';

const DEFAULT_OPTIONS = {
  previous: <span>&lsaquo;</span>,
  next: <span>&rsaquo;</span>,
  displayText: 'Results per page',
};

interface PaginationProps {
  options?: {
    previous: string | JSX.Element;
    next: string | JSX.Element;
    displayText: string;
  };
  totalItems: number;
  currentPage: number;
  visiblePages: number;
  itemsPerPage?: number;
  onPageChange: (args: { pageNumber: number; itemsPerPage: number; offset: number }) => void;
  showItemsPerPageInput?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  options = DEFAULT_OPTIONS,
  totalItems,
  currentPage,
  onPageChange,
  visiblePages,
  itemsPerPage,
  showItemsPerPageInput = true,
}) => {
  const { page, handlePageChange, calculatePages, handleOnItemsPerPage, isNextDisabled, isPrevDisabled } =
    usePagination({
      totalItems,
      currentPage,
      visiblePages,
      onPageChange,
      defaultItemsPerPage: itemsPerPage,
    });

  const pages = !totalItems ? null : calculatePages();

  if (pages && pages.length <= 1) return null;

  const getItemClassName = (number: number) => `pagination__item ${number === page ? 'pagination__item--active' : ''}`;

  const nextclassnames = buildClassNames('pagination__item pagination__item--icon', {
    ['pagination__item--disabled']: isNextDisabled,
  });

  const prevclassnames = buildClassNames('pagination__item pagination__item--icon', {
    ['pagination__item--disabled']: isPrevDisabled,
  });

  const itemsCount = itemsPerPage ?? 10;
  const start = (page - 1) * itemsCount + 1;
  const end = Math.min(page * itemsCount, totalItems);

  return (
    <div className="pagination" data-testid="pagination">
      {itemsPerPage && pages && (
        <div className="pagination__rows" data-testid="items-perpage">
          <span>{options.displayText} </span>
          {showItemsPerPageInput && (
            <Input
              min="1"
              className="pagination__input"
              value={itemsCount.toString()}
              onChange={({ value }) => value && handleOnItemsPerPage(parseInt(value))}
              type="number"
            />
          )}
          <span>
            {' '}
            {start}-{end} of {totalItems}
          </span>
        </div>
      )}
      <ul className="pagination">
        <li className={prevclassnames} onClick={() => handlePageChange(page - 1)}>
          {options.previous}
        </li>
        {pages &&
          pages.map((pageNumber: number, index: number) => (
            <React.Fragment key={`page-${pageNumber}-${index}`}>
              {pageNumber < 0 ? (
                <span key={`dots-${index}`}>...</span>
              ) : (
                <li className={getItemClassName(pageNumber)} onClick={() => handlePageChange(pageNumber)}>
                  {pageNumber}
                </li>
              )}
            </React.Fragment>
          ))}
        <li className={nextclassnames} onClick={() => handlePageChange(page + 1)}>
          {options.next}
        </li>
      </ul>
    </div>
  );
};

Pagination.defaultProps = {
  visiblePages: 10,
  currentPage: 1,
  showItemsPerPageInput: true,
};

export default Pagination;
