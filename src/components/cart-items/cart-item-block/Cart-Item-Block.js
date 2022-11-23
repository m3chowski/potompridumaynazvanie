import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import {
  CartItemBlockButton,
  CartItemDeleteButton,
} from "./cart-item-block-button/Cart-Item-Block-Button";

import "./cart-item-block.css";

export const CartItemBlock = (obj) => {
  const { priceWithDiscount, count, id, images, title } = obj;

  return (
    <div className="cart-item-block">
      <div>
        <img src={images[0]} />
      </div>
      <div>
        <h3>{title}</h3>
      </div>
      <div className="cart-item-block-button">
        <CartItemBlockButton id={id} count={count} />
        <h3>{(priceWithDiscount * count).toFixed(2)} USD.</h3>
        <h5>Count: {count}</h5>
        <CartItemDeleteButton id={id} />
      </div>
    </div>
  );
};
