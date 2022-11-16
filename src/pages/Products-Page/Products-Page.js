import React from "react";
import { Categories } from "../../components/categories";
import { Items } from "../../components/items";

import "./product-page.css";

export const ProductPage = () => {
  return (
    <div className="product-page">
      <Categories />
      <Items />
    </div>
  );
};
