import React, { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      onPageChange(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onPageChange(currentPage - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className="pagination">
      {/* Arrow Left */}
      <button
        className={`arrow ${currentPage === 1 ? "disabled " : ""}`}
        onClick={handlePrev}>
        <IoIosArrowDropleftCircle />
      </button>

      {/* Dots */}
      <div className="pageNumbers">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <span
              key={page}
              className={`page ${currentPage === page ? "active" : ""}`}
              onClick={() => handlePageClick(page)}>
              {currentPage === page ? page : "•"}
            </span>
          )
        )}
      </div>

      {/* Arrow Right */}
      <button
        className={`arrow ${currentPage === totalPages ? "disabled" : ""}`}
        onClick={handleNext}>
        <IoIosArrowDroprightCircle />
      </button>
    </div>
  );
};

export default Pagination;
