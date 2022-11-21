import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import "./cart-button.css";

export const CartButton = () => {
  const { totalPrice } = useSelector((state) => state.cart);
  return (
    <Link to="/cart">
      <div className="cart-button">
        <Button variant="contained">
          <ShoppingCartIcon />
          <span>{totalPrice.toFixed(2)} USD</span>
        </Button>
      </div>
    </Link>
  );
};
