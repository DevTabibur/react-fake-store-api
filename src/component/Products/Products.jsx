import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = (props) => {
  const {setCartCount} = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // console.log(products);
  return (
    <div>
    <div className="container mt-5">
    <div className="row">
      {products.map((pd) => (
        <SingleProduct key={pd.id} product={pd}  setCartCount={setCartCount}/>
      ))}
      </div>
    </div>
    </div>
  );
};

export default Products;
