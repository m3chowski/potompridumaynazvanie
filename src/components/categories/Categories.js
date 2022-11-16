import React, { useEffect, useState } from "react";
import { getCategories } from "../../utility/api";
import { useParams } from "react-router-dom";
import { CategoriesButton } from "./categories-button";
import { useDispatch } from "react-redux";
import { setCategory } from "../../store/slices/navigationSlice";

import "./categories.css";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { category } = useParams();
  const dispatch = useDispatch();
  dispatch(setCategory(category));
  useEffect(() => {
    getCategories({ setCategories });
  }, []);

  return (
    <div className="categories">
      {categories.map((el, index) => (
        <CategoriesButton title={el} key={index} category={category} />
      ))}
    </div>
  );
};
