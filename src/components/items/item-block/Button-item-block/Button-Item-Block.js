import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  increasedCartCount,
  reduceCartCount,
} from "../../../../store/slices/cartSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const ButtonItemBlock = ({ obj }) => {
  const { id, title, priceWithDiscount, images } = obj;
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const findItem = (id) => cartItems.find((obj) => obj.id === id);
  const res = findItem(id);

  const onClickAddToCart = () => {
    const item = {
      id,
      title,
      images,
      priceWithDiscount,
    };
    dispatch(increasedCartCount(item));
  };

  const onClickReduceCartCount = () => {
    dispatch(reduceCartCount({ id }));
  };

  return (
    <>
      {res && res.count ? (
        <ButtonGroup className="item-block-add-reduce">
          <Button onClick={() => onClickReduceCartCount()}>-</Button>
          <Button>{res.count}</Button>
          <Button onClick={() => onClickAddToCart()}>+</Button>
        </ButtonGroup>
      ) : (
        <Button variant="outlined" onClick={() => onClickAddToCart()}>
          <AddShoppingCartIcon />
        </Button>
      )}
    </>
  );
};
