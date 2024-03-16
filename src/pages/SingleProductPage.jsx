import React, { useEffect } from "react";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import {
  Header,
  Loader,
  Logo,
  PageNavigation,
  SingleProductImage,
  Star,
} from "../components";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

const SingleProductPage = () => {
  const { id } = useParams();
  console.log(id);
  const DATA = useProductContext();
  const { isSingleLoading, singleProduct, getSingleProduct } = DATA;
  console.log(singleProduct);

  const { title, price, rating, image, category, description } = singleProduct;
  //   const{rate ,count}=rating
  const API = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    getSingleProduct(API);
  }, []);

  if (isSingleLoading) {
    return <Loader />;
  } else {
    return (
      <div className="container-fluid">
        <Header />
        <h1 className='text-center mt-3 fw-bold' style={{color:"#f26522"}}>Eflyer</h1>
        <PageNavigation title={title} category={category} />
        <div className="container bg-light rounded mt-3">
          <div className="row">
            <div className="col-md-6 col-lg-7 p-4 mt-3">
              <SingleProductImage img={image} />
            </div>
            <div className="col-md-6  col-lg-5 border p-4">
              <h3 className="fw-semi-bold">{title}</h3>
              <h4>
                {price}
                <span className="ps-1 fs-5">$</span>
                <span className="pe-3 fs-6">M.R.P</span>
              </h4>
              <div className="ratings border-bottom py-2">
                <Star singleProduct={singleProduct} />
              </div>
              <div className="mt-2 text-capitalize border-bottom pb-2 mb-3">
                {description}
              </div>
              <div className="product-data-warranty">
                <div className="product-warranty-data d-none d-md-block">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Free Delivery</p>
                </div>

                <div className="product-warranty-data d-none d-md-block">
                  <TbReplace className="warranty-icon" />
                  <p>30 Days Replacement</p>
                </div>

                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Fastest Delivered </p>
                </div>

                <div className="product-warranty-data">
                  <MdSecurity className="warranty-icon" />
                  <p>2 Year Warranty </p>
                </div>
              </div>
              <div className="add-to-cart">
                <button className="btn  rounded-pill text-light w-100" style={{background:"#f26522"}}>Add to Cart</button>
              </div>
              <div className="add-to-cart mt-2">
                <button className="btn  rounded-pill text-light w-100" style={{background:"gold"}}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleProductPage;
