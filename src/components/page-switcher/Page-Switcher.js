import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import "./page-switcher.css";

export const PageSwitcher = () => {
  const pageNumber = [0, 1, 2, 3];
  const { total, skip, limit } = useSelector(
    (state) => state.products.products
  );
  const { pathname } = useLocation();

  return (
    <div className="s">
      {pathname == "/products" && (
        <ButtonGroup>
          {pageNumber.map((el, index) => (
            <Link to={`?limit=30&skip=${el * 30}`} key={index}>
              <Button
                variant={skip / 30 === index ? "outlined" : "containted"}
                color="primary"
              >
                {el + 1}
              </Button>
            </Link>
          ))}
        </ButtonGroup>
      )}
    </div>
  );
};
