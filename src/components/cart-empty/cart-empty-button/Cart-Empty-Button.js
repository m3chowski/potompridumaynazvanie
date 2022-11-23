import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const CartEmptyButton = () => {
  return (
    <>
      <Link to={"/products"}>
        <Button>Go to shopping</Button>
      </Link>{" "}
    </>
  );
};
