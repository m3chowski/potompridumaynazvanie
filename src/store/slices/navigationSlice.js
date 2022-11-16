import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [""],
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
  },
});
export const { setCategory } = navigationSlice.actions;
export default navigationSlice.reducer;
