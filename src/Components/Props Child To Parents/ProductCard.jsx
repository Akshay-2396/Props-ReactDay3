import React from "react";

const ProductCard = (props) => {
  const handleCart = () => {
    const detail = {
      id: props.id,
      name: props.name,
      price: props.price,
    };
    props.cartFunction(detail);
  };
  return (
    <div>
      <h4>{props.id}</h4>
      <h4>{props.name}</h4>
      <h4>{props.price}</h4>
      <button onClick={handleCart}>Add To Cart</button>
    </div>
  );
};

export default ProductCard;
