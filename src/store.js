import { configureStore } from "@reduxjs/toolkit";
import  addToCartSlice  from "./features/addToCartSlice";


export const store = configureStore({
  reducer: {
   addtocart: addToCartSlice,
  },
});
