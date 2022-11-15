import React from "react";
import { Button } from "@mui/material";

export const CategoriesButton = ({ title }) => {
  const activeCategory = "laptops";
  return (
    <div className="categories-button">
      <Button
        variant={activeCategory == title ? "contained" : "text"}
        onClick={() => console.log(title)}
        sx={{ width: "200px" }}
      >
        {title}
      </Button>
    </div>
  );
};
