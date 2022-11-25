import React, { useEffect } from "react";
import { fetchProducts } from "../../store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { ItemBlock } from "./item-block";
import { useLocation } from "react-router-dom";
import { PageSwitcher } from "../../components/page-switcher";
import "./items.css";

export const Items = () => {
  const { search } = useLocation();
  const { products } = useSelector((state) => state.products.products);
  const { loading } = useSelector((state) => state.products);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts({ pathname, search }));
  }, [pathname, search]);

  return (
    <div className="items-main">
      <div className="items">
        {!loading
          ? products.map((el, index) => <ItemBlock key={index} {...el} />)
          : "loading..."}
      </div>
      <PageSwitcher />
    </div>
  );
};
