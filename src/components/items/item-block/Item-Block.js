import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./item-block.css";

export const ItemBlock = ({ id, title, images, price }) => {
  // console.log(images);
  return (
    <Link to={`/products/${id}`}>
      <div className="item-block">
        <div className="item-block-img">
          <img src={images[0]} />
        </div>
        <h4>{title}</h4>
        <div className="item-block-price">
          <p>{price} USD</p>
          <Button variant="outlined">Buy</Button>
        </div>
      </div>
    </Link>
  );
};
