import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProduct } from "../../utility/api";
import { ButtonItemBlock } from "../items/item-block/Button-item-block/Button-Item-Block";

import "./item-info.css";

export const ItemInfo = () => {
  const { pathname } = useLocation();
  const [item, setItem] = useState(false);
  useEffect(() => {
    getProduct(pathname, setItem);
  }, []);
  const {
    brand,
    category,
    description,
    discountPercentage,
    id,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
  } = item;
  const priceWithDiscount = (
    price -
    (price / 100) * discountPercentage
  ).toFixed(2);

  console.log(item);

  return item ? (
    <div className="item-info">
      <div>
        <img src={images[0]} alt="s" />
      </div>
      <div className="item-info-text">
        <h2>{brand}</h2>
        <h4>{title}</h4>
        <span>{description}</span>
        <p>Old price: {price} USD</p>
        <p>New price: {priceWithDiscount} USD</p>
        <p>Stock: {stock}</p>
        <ButtonItemBlock obj={{ id, title, priceWithDiscount, images }} />
      </div>
      <div></div>
    </div>
  ) : (
    <span>loading...</span>
  );
};
