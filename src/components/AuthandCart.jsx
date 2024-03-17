import React from "react";
import { useFilterContext } from "../context/FilterContext";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
const AuthandCart = ({ categoryData }) => {
  const {
    filters: { text, category },
    updateFilterValue,
    sorting 
  } = useFilterContext();

  const handleCategoryClick = (selectedCategory) => {
    updateFilterValue({
      target: { name: "category", value: selectedCategory },
    });
  };
  return (
    <div className="d-flex align-items-center justify-content-between  mb-3 mb-md-0">
      <div className="flex-md-fill d-none d-lg-block">
        <div className="dropdown bg-light rounded text-center " id="sort-price">
          <a
            className="btn  dropdown-toggle border-0 bg-light m-auto text-dark"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            // onClick={sorting}
            // aria-disabled
          >
           Sort
          </a>

          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#allProduct"  onClick={sorting}>
                Price(lowest)
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#allProduct"  onClick={sorting}>
                Price(highest)
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#allProduct"  onClick={sorting}>
               Sort(A-Z)
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#allProduct"  onClick={sorting}>
               Sort(Z-A)
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-md-fill d-block d-lg-none">
        <div className="dropdown px-1">
          <button
            className="btn btn-dark dropdown-toggle text-uppercase "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ width: "150px" }}
          >
            {category || "All Category"}
          </button>
          <ul className="dropdown-menu p-1">
            {categoryData.map((val, index) => (
              <button
                key={index}
                type="button"
                className={val === category ? "active" : ""}
                onClick={() => handleCategoryClick(val)}
                id="categroy_btn"
              >
                <a href="#allProduct" className="text-dark">
                  {val}
                </a>
              </button>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-md-fill text-light d-flex justify-content-center align-item-center mt-1">
        <span className="pe-2 fs-2">
          <FaShoppingCart />
        </span>
       
        <span className="px-2 fs-2">
          <FaUserCircle />
        </span>

      </div>
    </div>
  );
};

export default AuthandCart;
