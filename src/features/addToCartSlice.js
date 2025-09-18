import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let allData = state.value.find(
        (item) => item.title === action.payload.title
      );
      if (allData) {
        allData.quantity += 1;
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
      }
    },
    increment: (state, action) => {
      state.value.map((item) => {
        if (item.title === action.payload.title) {
          item.quantity += 1;
        }
      });
    },
    decrement: (state, action) => {
      state.value.map((item) => {
        if (item.title === action.payload.title) {
          item.quantity -= 1;
        }
      });
    },
  },
});
export const { addToCart, increment, decrement } = addToCartSlice.actions;
export default addToCartSlice.reducer;
