import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./category-reset.css";

export const CategoryReset = () => {
  return (
    <div>
      <Link to={"/products"}>
        <Button
          variant={"contained"}
          color={"secondary"}
          sx={{ width: "200px" }}
        >
          Reset filter
        </Button>
      </Link>
    </div>
  );
};
