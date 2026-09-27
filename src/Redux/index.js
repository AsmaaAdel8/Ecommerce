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
// http://localhost:3000/users
// npx json-server --watch db-products.json --port 3001
// npx json-server db-users.json  
// to sart json server on port 3000