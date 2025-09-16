import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(state.value);
      console.log(action.payload);
    },
  },
});
export const { addToCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
