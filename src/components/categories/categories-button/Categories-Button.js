import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const CategoriesButton = ({ title, category }) => {
  return (
    <div className="categories-button">
      <Link to={`/products/category/${title}`}>
        <Button
          variant={category == title ? "contained" : "text"}
          sx={{ width: "200px" }}
        >
          {title}
        </Button>
      </Link>
    </div>
  );
};
