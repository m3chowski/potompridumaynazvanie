import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [
    {
      count: 3,
      id: 1,
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
      priceWithDiscount: "477.85",
      title: "iPhone 9",
    },
  ],
  totalPrice: 0,
};

const findProduct = (state, payload) =>
  state.cartItems.find((obj) => obj.id === payload.id);

const changeTotalPrice = (state) =>
  (state.totalPrice = state.cartItems.reduce((sum, obj) => {
    return obj.priceWithDiscount * obj.count + sum;
  }, 0));

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increasedCartCount(state, { payload }) {
      const res = findProduct(state, payload);
      res ? res.count++ : state.cartItems.push({ ...payload, count: 1 });
      changeTotalPrice(state);
    },

    reduceCartCount(state, { payload }) {
      const res = findProduct(state, payload);
      res.count--;
      changeTotalPrice(state);
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (obj) => obj.id !== action.payload
      );
      changeTotalPrice(state);
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export const { increasedCartCount, reduceCartCount, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
