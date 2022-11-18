import { configureStore } from "@reduxjs/toolkit";
import navigation from "./slices/navigationSlice";
import products from "./slices/productsSlice";
import cart from "./slices/cartSlice";

export const store = configureStore({
  reducer: { cart, navigation, products },
});
