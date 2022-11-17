import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  loading: true,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (params) => {
    const { pathname } = params;
    const { data } = await axios.get(`https://dummyjson.com${pathname}`);
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
    },
  },
});

export default productsSlice.reducer;
