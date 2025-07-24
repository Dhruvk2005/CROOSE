import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  // Show limited page numbers for better UX
  const getVisiblePages = () => {
    const visiblePages = [];
    const maxVisible = 5;
    
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);
    
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    
    for (let i = start; i <= end; i++) {
      visiblePages.push(i);
    }
    
    return visiblePages;
  };

  return (
    <div className="flex justify-center items-center gap-2 py-6">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`flex items-center gap-1 px-3 py-1.5 border rounded-md text-sm ${
          currentPage === 1
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        <ChevronLeft size={16} />
        Previous
      </button>

      {/* Show first page and ellipsis if needed */}
      {getVisiblePages()[0] > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`px-3 py-1.5 border rounded-md text-sm ${
              1 === currentPage
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            1
          </button>
          {getVisiblePages()[0] > 2 && <span className="px-2">...</span>}
        </>
      )}

      {/* Visible page numbers */}
      {getVisiblePages().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1.5 border rounded-md text-sm ${
            page === currentPage
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
        >
          {page}
        </button>
      ))}

      {/* Show last page and ellipsis if needed */}
      {getVisiblePages()[getVisiblePages().length - 1] < totalPages && (
        <>
          {getVisiblePages()[getVisiblePages().length - 1] < totalPages - 1 && (
            <span className="px-2">...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className={`px-3 py-1.5 border rounded-md text-sm ${
              totalPages === currentPage
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`flex items-center gap-1 px-3 py-1.5 border rounded-md text-sm ${
          currentPage === totalPages
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        Next
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;