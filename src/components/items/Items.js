import React, { useEffect } from "react";
import { fetchProducts } from "../../store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { ItemBlock } from "./item-block";
import { useLocation } from "react-router-dom";
import "./items.css";

export const Items = () => {
  const { products } = useSelector((state) => state.products.products);
  const { loading } = useSelector((state) => state.products);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts({ pathname }));
  }, [pathname]);
  console.log(products, loading);

  return (
    <div className="items">
      {products ? products.map((el) => <ItemBlock />) : "loading..."}
    </div>
  );
};
