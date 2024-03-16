import React from "react";
import bars from "../assets/images/bars.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useFilterContext } from "../context/FilterContext";

const SearchBar = ({ categoryData }) => {
  const {
    filters: { text, category },
    updateFilterValue,
  } = useFilterContext();

  const handleCategoryClick = (selectedCategory) => {
    updateFilterValue({ target: { name: "category", value: selectedCategory } });
  };

  return (
    <div className="row align-items-center justify-content-between">
      <div className="col-2 col-lg-1">
        <img src={bars} alt="" className="img-fluid" />
      </div>
      <div className="col-2 me-auto d-none d-lg-block" >
        <div className="dropdown px-1">
          <button
            className="btn btn-dark dropdown-toggle text-uppercase"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{width:"200px"}}
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

      <div className="col-10 col-lg-7">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search this blog"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            name="text"
            value={text}
            onChange={updateFilterValue}
          />
          <button className="btn" type="button" id="button-addon2" onClick={()=>{updateFilterValue}}>
          <FaMagnifyingGlass />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

