import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let allData = state.value.find(
        (item) => item.title === action.payload.title && item.size === action.payload.size
      );
      if (allData) {
        allData.quantity += action.payload.quantity || 1; // Add payload quantity to existing item
      } else {
        state.value.push({ ...action.payload, quantity: action.payload.quantity || 1 }); // Use payload quantity for new item
      }
    },
    increment: (state, action) => {
      state.value.map((item) => {
        if (item.title === action.payload.title && item.size === action.payload.size) {
          item.quantity += 1;
        }
      });
    },
    decrement: (state, action) => {
      state.value.map((item) => {
        if (item.title === action.payload.title && item.size === action.payload.size) {
          item.quantity -= 1;
        }
      });
    },
    remove: (state, action) => {
      state.value = state.value.filter(
        (item) => !(item.title === action.payload.title && item.size === action.payload.size)
      );
    },
  },
});

export const { addToCart, increment, decrement, remove } = addToCartSlice.actions;
export default addToCartSlice.reducer;