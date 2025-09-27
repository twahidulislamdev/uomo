import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./features/addToCartSlice";
import quickViewSlice from "./features/quickViewSlice"; 

export const store = configureStore({
  reducer: {
    addtocart: addToCartSlice,
    quickView: quickViewSlice,
  },
});