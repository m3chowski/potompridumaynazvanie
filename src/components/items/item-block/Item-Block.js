import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increasedCartCount } from "../../../store/slices/cartSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import "./item-block.css";

export const ItemBlock = ({ discountPercentage, id, title, images, price }) => {
  const dispatch = useDispatch();
  const priceWithDiscount = (
    price -
    (price / 100) * discountPercentage
  ).toFixed(2);

  const onClickAddToCart = () => {
    const item = {
      id,
      title,
      images,
      priceWithDiscount,
    };
    dispatch(increasedCartCount(item));
  };

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
        <Button variant="outlined" onClick={() => onClickAddToCart()}>
          <AddShoppingCartIcon />
        </Button>
      </div>
    </div>
  );
};
