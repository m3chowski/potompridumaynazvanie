import React from "react";
import "./order-item.css";

export const OrderItem = (obj) => {
  //   console.log(obj);
  const { count, priceWithDiscount, title, images } = obj;
  return (
    <div className="order-item">
      <img src={images[0]} />
      <span>{title}</span>
      <span>Count: {count}</span>
      <span>Total price: {priceWithDiscount} USD</span>
    </div>
  );
};
