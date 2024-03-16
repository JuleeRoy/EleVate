import React from "react";
import { NavLink } from "react-router-dom";

const PageNavigation = ({ title, category }) => {
  return (
    <div className="container mt-5 d-flex flex-wrap text-capitalize">
      <NavLink to="/" className="px-1 text-dark fw-bold">
        Home
      </NavLink>
      <p className="px-1 m-0 mt-1 fw-bold" style={{fontSize:"small"}}>
        {" "}
        <span className="px-1 m-0" style={{color:"#f26522"}}>|</span> {category}
      </p>
      <p className=" d-none d-md-block text-wrap mt-1 fw-bold" style={{fontSize:"small"}}>
        {" "}
        <span className="px-1" style={{color:"#f26522"}} >|</span> {title}
      </p>
    </div>
  );
};

export default PageNavigation;
