import React from "react";
import { useFilterContext } from "../context/FilterContext";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
const AuthandCart = ({categoryData}) => {
  const {
    filters: { text, category },
    updateFilterValue,
  } = useFilterContext();

  const handleCategoryClick = (selectedCategory) => {
    updateFilterValue({ target: { name: "category", value: selectedCategory } });
  };
  return (
    <div className="d-flex align-items-center justify-content-between  mb-3 mb-md-0">
      <div className="flex-md-fill d-none d-lg-block">
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            English
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                English
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
            style={{width:"150px"}}
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
                {val}
              </button>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-md-fill text-light d-flex justify-content-center align-item-center mt-1">
         <span className="pe-2">
         <FaShoppingCart />
         </span>
         <span className="d-none d-lg-block px-2" >CART</span>
         <span className="px-2"><FaUserCircle /></span>
        <span className=" d-none d-lg-block px-2">LOGIN</span>
      </div>

     
    </div>
  );
};

export default AuthandCart;
