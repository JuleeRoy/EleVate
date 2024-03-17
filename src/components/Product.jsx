import React from "react";
import { NavLink } from "react-router-dom";
const Product = ({ id, title, image ,category,price }) => {
  const words = title.split(" "); // Split the string into an array of words
  const lastTwoWords = words.slice(-3).join(" "); // Get the last two words and join them back into a string
  // console.log(lastTwoWords);
  return (
    <NavLink
      className="col-md-3 border"
      to={`/single/${id}`}
      style={{ width: "220px", height: "",background:"white" }}
    >

      <div
        className=" p-2 d-flex justify-content-center  align-items-center"
        style={{ width: "210px", height: "300px" }}
        key={id}
      >
        <img src={image} className="img-fluid w-100" alt="..." />
      </div>
      <div className="img-content">
        <p className="py-0 my-0 text-dark fw-bold text-uppercase">{category}</p>
        <span className="fw-semibold pe-5 mb-1">Price</span>
        <span className="ps-5 mb-1">{price}$</span>
      </div>
    </NavLink>
  );
};

export default Product;
