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
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 py-6">
     <button
  disabled={currentPage === 1} 
  onClick={() => onPageChange(currentPage - 1)}
  className={`flex items-center gap-1 px-3 py-1.5 border border-white rounded-md text-sm text-white 
    ${currentPage === 1 
      ? 'bg-[#2A274F] opacity-50 cursor-not-allowed' 
      : 'bg-[#13102E] hover:bg-[#2A274F]'
    }`}
>
  <ChevronLeft size={16} />
  Back
</button>


      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1.5 border border-white bg-[#13102E]  rounded-md text-sm font-medium  ${
            page === currentPage
              ? "bg-[#13102E] text-white"
              : "text-white hover:	bg-[#2A274F]"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
  disabled={currentPage === totalPages}
  onClick={() => onPageChange(currentPage + 1)}
  className={`flex items-center gap-1 px-3 py-1.5 border border-white rounded-md text-sm text-white 
    ${currentPage === totalPages 
      ? 'bg-[#2A274F] opacity-50 cursor-not-allowed' 
      : 'bg-[#13102E] hover:bg-[#2A274F]'
    }`}
>
  Next
  <ChevronRight size={16} />
</button>

    </div>
  );
};

export default Pagination;
