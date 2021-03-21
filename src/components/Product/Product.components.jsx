import React from "react";
import ProductList from "../ProductList/ProductList.components";
import "./Product.styles.css";

function Product(props) {
  return (
    <div>
      <div className="type">{props.product.toUpperCase()}</div>
      <ProductList product={props.product}></ProductList>
    </div>
  );
}

export default Product;
