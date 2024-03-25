import React, { useState } from 'react';
import Product from './Product';

const itemsPerPage = 4;

const ProductPagination = ({ filter_products }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(filter_products.length / itemsPerPage);

  // Calculate start and end indexes of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data array to get the items for the current page
  const currentItems = filter_products.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='container-fluid mt-3'>
      {/* Render items for the current page */}
      {currentItems.length > 0 ? (
        <div className="row  justify-content-between">
          {currentItems.map((item, index) => (
            <Product key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div className="text-center">No products found.</div>
      )}

      {/* Render pagination controls */}
      <div className='container mt-4 d-flex justify-content-center gap-2'>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
            id='pagination-btn'
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductPagination;
