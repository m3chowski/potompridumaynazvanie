import React from "react";
import { useSelector } from "react-redux";
import { CartItemBlock } from "./cart-item-block";

export const CartItems = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div>
      {cartItems.id}
      <CartItemBlock />
    </div>
  );
};
