import { configureStore } from "@reduxjs/toolkit";
import AddProduct from "./Product-Slice";
import UsersSlice from "./getUsers-slice";
import IfUser from "./User-slice"
import SelectedProduct from "./Selected-Products"

export const store = configureStore({
  reducer: {
    addProduct: AddProduct,
    users: UsersSlice,
    ifUser:IfUser,
    SelectedProd: SelectedProduct,
  },
});
