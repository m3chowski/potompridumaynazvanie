import React from "react";
import { CartItems } from "../../components/cart-items";
import "./cart-page.css";

export const CartPage = () => {
  return (
    <div className="cart-page">
      <CartItems />
    </div>
  );
};
