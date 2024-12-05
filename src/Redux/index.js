import { configureStore } from "@reduxjs/toolkit";
import AddProduct from "./Product-Slice";
import UsersSlice from "./getUsers-slice";
export const store = configureStore({
  reducer: {
    addProduct: AddProduct,
    users:UsersSlice,
  },
});
