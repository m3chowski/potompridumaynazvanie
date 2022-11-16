import { configureStore } from "@reduxjs/toolkit";
import navigation from "./slices/navigationSlice";
import products from "./slices/productsSlice";

export const store = configureStore({
  reducer: { navigation, products },
});
