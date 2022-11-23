import React from "react";
import { CartEmptyButton } from "./cart-empty-button/Cart-Empty-Button";
import "./cart-empty.css";

export const CartEmpty = () => {
  return (
    <div className="cart-empty">
      <span>Cart is empty</span>
      <CartEmptyButton />
    </div>
  );
};
