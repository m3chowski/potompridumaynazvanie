import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";

import "./cart-button.css";

export const CartButton = () => {
  const totalPrice = 52302.02;
  return (
    <div className="cart-button">
      <Button variant="contained">
        <ShoppingCartIcon />
        <span>{totalPrice} usd</span>
      </Button>
    </div>
  );
};
