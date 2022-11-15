import React, { useEffect, useState } from "react";
import { getCategories } from "../../utility/api";
import { CategoriesButton } from "./categories-button";

import "./categories.css";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories({ setCategories });
  }, []);

  return (
    <div className="categories">
      {categories.map((el, index) => (
        <CategoriesButton title={el} key={index} />
      ))}
      {/* <CategoriesButton /> */}
    </div>
  );
};
