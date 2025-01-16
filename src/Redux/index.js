import { configureStore } from "@reduxjs/toolkit";
import AddProduct from "./Product-Slice";
import UsersSlice from "./getUsers-slice";
import IfUser from "./User-slice"

export const store = configureStore({
  reducer: {
    addProduct: AddProduct,
    users: UsersSlice,
    ifUser:IfUser,
  },
});
