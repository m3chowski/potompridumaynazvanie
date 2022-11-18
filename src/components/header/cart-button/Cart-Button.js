import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import "./cart-button.css";

export const CartButton = () => {
  const { totalPrice } = useSelector((state) => state.cart);
  return (
    <div className="cart-button">
      <Button variant="contained">
        <ShoppingCartIcon />
        <span>{totalPrice.toFixed(2)} USD</span>
      </Button>
    </div>
  );
};
