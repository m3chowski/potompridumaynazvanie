import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { CartItemBlock } from "./cart-item-block";
import "./cart-items.css";

export const CartItems = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div className="cart-items">
      {cartItems.map((el, index) => (
        <CartItemBlock key={index} {...el} />
      ))}
      <div className="order-button">
        <Link to="/cart/order">
          <Button variant="contained">Order</Button>
        </Link>
      </div>
    </div>
  );
};
