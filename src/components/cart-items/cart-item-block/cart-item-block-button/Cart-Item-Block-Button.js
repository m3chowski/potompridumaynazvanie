import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  increasedCartCount,
  reduceCartCount,
  removeItem,
} from "../../../../store/slices/cartSlice";

export const CartItemBlockButton = ({ id, count }) => {
  console.log(count);
  const dispatch = useDispatch();
  const onClickAddToCart = () => {
    dispatch(increasedCartCount({ id }));
  };

  const onClickReduceCartCount = () => {
    dispatch(reduceCartCount({ id }));
  };

  const onClickDeleteItem = () => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <ButtonGroup variant="contained" sx={{ height: "60px", width: "81px" }}>
        <Button
          onClick={count <= 1 ? onClickDeleteItem : onClickReduceCartCount}
        >
          -
        </Button>
        <Button onClick={onClickAddToCart}>+</Button>
      </ButtonGroup>
    </>
  );
};

export const CartItemDeleteButton = ({ id }) => {
  const dispatch = useDispatch();
  const onClickDeleteItem = () => {
    dispatch(removeItem(id));
  };
  return (
    <>
      {" "}
      <Button variant="contained" sx={{ width: "60px", height: "60px" }}>
        <DeleteIcon onClick={onClickDeleteItem} />
      </Button>
    </>
  );
};
