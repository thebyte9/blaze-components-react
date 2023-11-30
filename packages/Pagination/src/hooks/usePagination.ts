import { useState, useEffect } from 'react';

type PaginationHookProps = {
  totalPages: number,
  currentPage: number,
  visiblePages: number,
  defaultItemsPerPage?: number;
  onPageChange: ({ pageNumber, itemsPerPage, offset }: { pageNumber: number, itemsPerPage: number, offset: number }) => void
}

type PaginationReturnType = {
  page: number,
  itemsPerPage: number,
  calculatePages: () => number[],
  handlePageChange: (pageNumber: number) => void,
  handleOnItemsPerPage: (itemsNumber: number) => void,

}

const DEFAULT_ITEMS_PER_PAGE = 10;

const usePagination = ({
  totalPages,
  currentPage,
  visiblePages,
  onPageChange,
  defaultItemsPerPage
}: PaginationHookProps): PaginationReturnType => {
  const [page, setPage] = useState<number>(currentPage);
  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);


  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    defaultItemsPerPage && setItemsPerPage(defaultItemsPerPage);
  }, [defaultItemsPerPage]);

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
    onPageChange({ pageNumber, itemsPerPage, offset: (currentPage - 1) * itemsPerPage });
  };

  const handleOnItemsPerPage = (itemsNumber: number) => {
    setItemsPerPage(itemsNumber);
    onPageChange({ pageNumber: page, itemsPerPage: itemsNumber, offset: (currentPage - 1) * itemsPerPage });
  }

  const calculatePages = () => {
    const pages: number[] = [];
    const halfVisiblePages = Math.floor(visiblePages / 2);

    if (totalPages <= visiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage = Math.max(1, page - halfVisiblePages);
      let endPage = Math.min(totalPages, startPage + visiblePages - 1);

      if (startPage === 1) {
        endPage = visiblePages;
      } else if (endPage === totalPages) {
        startPage = totalPages - visiblePages + 1;
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (startPage > 1) {
        pages.unshift(-1);
        pages.unshift(1);
      }

      if (endPage < totalPages) {
        pages.push(-2);
        pages.push(totalPages);
      }
    }

    return pages;
  };


  return { page, handlePageChange, calculatePages, itemsPerPage, handleOnItemsPerPage };
};

export default usePagination;