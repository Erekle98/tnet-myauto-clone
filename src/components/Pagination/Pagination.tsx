import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-[32px] h-[32px] flex items-center justify-center rounded-[6px] text-[14px] font-[600] transition-colors ${
            currentPage === i
              ? "bg-black800 text-white"
              : "text-black600 hover:bg-gray100"
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className='w-full flex items-center justify-center gap-[4px] bg-white p-[4px] rounded-[8px] py-[8px]'>
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className='w-[32px] h-[32px] flex items-center justify-center text-black600 hover:bg-gray100 rounded-[6px] disabled:opacity-50 disabled:hover:bg-transparent'
      >
        <ChevronsLeft size={16} />
      </button>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='w-[32px] h-[32px] flex items-center justify-center text-black600 hover:bg-gray100 rounded-[6px] disabled:opacity-50 disabled:hover:bg-transparent'
      >
        <ChevronLeft size={16} />
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='w-[32px] h-[32px] flex items-center justify-center text-black600 hover:bg-gray100 rounded-[6px] disabled:opacity-50 disabled:hover:bg-transparent'
      >
        <ChevronRight size={16} />
      </button>
      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className='w-[32px] h-[32px] flex items-center justify-center text-black600 hover:bg-gray100 rounded-[6px] disabled:opacity-50 disabled:hover:bg-transparent'
      >
        <ChevronsRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
