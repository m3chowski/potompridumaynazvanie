import React from "react";
import { useSelector } from "react-redux";
import { CartEmpty } from "../../components/cart-empty/Cart-Empty";
import { CartItems } from "../../components/cart-items";
import "./cart-page.css";

export const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="cart-page">
      {cartItems.length ? <CartItems /> : <CartEmpty />}{" "}
    </div>
  );
};
