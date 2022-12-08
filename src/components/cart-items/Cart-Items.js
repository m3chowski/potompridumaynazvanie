import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { CartItemBlock } from "./cart-item-block";
import "./cart-items.css";

export const CartItems = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="cart-items">
      {cartItems.map((el, index) => (
        <CartItemBlock key={index} {...el} />
      ))}
      <div className="order-button">
        <Link to="/cart/order">
          <Button variant="contained">Go to order</Button>
        </Link>
        <h4>Total price: {totalPrice.toFixed(2)} USD </h4>
      </div>
    </div>
  );
};
