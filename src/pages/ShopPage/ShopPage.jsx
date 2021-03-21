import React from "react";
import Product from "../../components/Product/Product.components";

const items = ["baked", "cakes", "cookies", "brownie", "cupcakes"];
const products = items.map((item) => {
  return <Product product={item}></Product>;
});

function ShopPage() {
  return products;
}

export default ShopPage;
