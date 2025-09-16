import { configureStore } from "@reduxjs/toolkit";
import addToCart from "./features/addToCartSlice";

export const store = configureStore({
  reducer: {
    cart: addToCart,
  },
});
