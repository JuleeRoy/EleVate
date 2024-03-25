import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Product = ({ id, title, image, category, price }) => {
  const navigate = useNavigate();

  const handleCart = (e) => {
    e.stopPropagation();
    console.log("handleCart called");
    navigate("/cart");
  };

  return (
    <div className="col-md-3 border bg-light text-center">
    <NavLink
      className="border"
      to={`/single/${id}`}
      style={{ width: "", height: "", background: "white" }}
    >
      <div
        className=" p-2 d-flex justify-content-center align-items-center m-auto"
        style={{ width: "", height: "300px" }}
        key={id}
      >
        <img src={image} className="img-fluid w-100" alt="..." />
      </div>
      <div className="img-content mt-2">
        <p className="py-0 my-0 text-dark fw-bold text-uppercase">{category}</p>
        <span className="fw-semibold pe-5 mb-1">Price</span>
        <span className="ps-5 mb-1">{price}$</span>
      </div>
      {/* Pass event to handleCart */}
      
    </NavLink>
      <button className="btn btn-warning mb-3 w-100" onClick={(e) => handleCart(e)}>
        Add To Cart
      </button>

    </div>
    
  );
};

export default Product;
