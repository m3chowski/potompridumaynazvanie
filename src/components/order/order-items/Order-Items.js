import React from "react";
import { useSelector } from "react-redux";
import { OrderItem } from "./order-item";
import "./order-items.css";

export const OrderItems = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { totalPrice } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div className="order-items-main">
      <div className="order-items">
        {cartItems.map((el, index) => (
          <OrderItem {...el} key={index} />
        ))}
      </div>
      <p>Total: {totalPrice} USD. </p>
    </div>
  );
};
