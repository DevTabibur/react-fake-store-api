// @ts-nocheck
import React from "react";
import "./SingleProduct.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactModal from "../ReactModal/ReactModal";


const SingleProduct = (props) => {
  
  return (
    <div data-aos="flip-left" className="col-md-4 mb-4">
      <div className="card border">
        <img
          className="w-50 m-auto my-2"
          src={props.product.image}
          alt="product__img"
        />
        <h3 className="mt-2">{props.product.title.slice(0, 10)}</h3>
        <div className="buttons d-flex justify-content-around my-2">
          <button  onClick={props.setCartCount} className="btn btn-primary">Add to cart</button>
          <button className="btn btn-danger">Delete</button>
          <ReactModal product={props.product}></ReactModal>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
