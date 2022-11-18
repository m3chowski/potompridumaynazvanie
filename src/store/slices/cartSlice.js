import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const findProduct = (state, payload) =>
  state.cartItems.find((obj) => obj.id === payload.id);

const changeTotalPrice = (state) =>
  (state.totalPrice = state.cartItems.reduce((sum, obj) => {
    return obj.priceWithDiscount * obj.count + sum;
  }, 0));
console.log(findProduct);

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
