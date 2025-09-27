import { createSlice } from "@reduxjs/toolkit";

const quickViewSlice = createSlice({
  name: "quickView",
  initialState: {
    item: null,
  },
  reducers: {
    setQuickViewItem: (state, action) => {
      state.item = action.payload;
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

export const { setQuickViewItem, increment, decrement } = quickViewSlice.actions;

export default quickViewSlice.reducer;
