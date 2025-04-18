import React from "react";
import ProductCard from "./ProductCard";

const Product = (props) => {
  const productList = [
    { id: 1, name: "Mobile", price: 100000 },
    { id: 2, name: "Laptop", price: 150000 },
    { id: 3, name: "Tab", price: 50000 },
  ];
  return (
    <div>
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          cartFunction={props.cartFunction}
        />
      ))}
    </div>
  );
};

export default Product;
