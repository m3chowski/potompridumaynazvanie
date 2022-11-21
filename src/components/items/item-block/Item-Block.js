import React from "react";
import { Link } from "react-router-dom";
import { ButtonItemBlock } from "./Button-item-block";

import "./item-block.css";

export const ItemBlock = ({ discountPercentage, id, title, images, price }) => {
  const priceWithDiscount = (
    price -
    (price / 100) * discountPercentage
  ).toFixed(2);

  return (
    <div>
      <Link to={`/products/${id}`}>
        <div className="item-block">
          <img src={images[0]} />
          <h4>{title}</h4>
        </div>
      </Link>
      <div className="item-block-price">
        <div className="item-block-price-bg">
          <p>{price} USD</p>
          <span>{priceWithDiscount} USD</span>
        </div>
        <ButtonItemBlock obj={{ id, title, priceWithDiscount, images }} />
      </div>
    </div>
  );
};
