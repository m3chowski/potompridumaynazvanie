import React from "react";
import { useSelector } from "react-redux";
import "./order-items.css";

export const OrderItems = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div>
      {cartItems.map(({ title, price }, index) => (
        <div key={index}>{title}</div>
      ))}
    </div>
  );
};
