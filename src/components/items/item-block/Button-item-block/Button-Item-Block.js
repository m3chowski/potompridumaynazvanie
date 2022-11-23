import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  increasedCartCount,
  reduceCartCount,
  removeItem,
} from "../../../../store/slices/cartSlice";

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

  const onClickDeleteItem = () => {
    dispatch(removeItem(id));
  };

  return (
    <>
      {res && res.count ? (
        <ButtonGroup className="item-block-add-reduce">
          <Button
            onClick={
              res.count <= 1 ? onClickDeleteItem : onClickReduceCartCount
            }
          >
            -
          </Button>
          <Button>{res.count}</Button>
          <Button onClick={onClickAddToCart}>+</Button>
        </ButtonGroup>
      ) : (
        <Button variant="outlined" onClick={() => onClickAddToCart()}>
          <AddShoppingCartIcon />
        </Button>
      )}
    </>
  );
};
