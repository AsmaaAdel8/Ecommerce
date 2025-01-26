import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const uRl= process.env.REACT_APP_URL_API;
// console.log(uRl);
//https://ecommerce-weld-one-59.vercel.app/api/products
export const addProduct = createAsyncThunk("products/addProduct", async () => {
  const response = await axios.get(`https://ecommerce-weld-one-59.vercel.app/api/products`);
  // const data = await response;
  // console.log(response.data)
  return response.data;
});

// filter data from api
export const Filer = createAsyncThunk("filteredData", async (category) => {
  const response = await axios.get(`https://ecommerce-weld-one-59.vercel.app/api/products`);
  const products = response.data;
  // console.log(products);
  const filteredProducts = products.filter(
    (product) => product.attributes.Catigory === category
    // console.log(`Comparing product category: ${product.attributes.Catigory} with ${category}`);
  );
  // console.log(filteredProducts);
  return filteredProducts;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    // sendProduct: (state, action) => {
    //   state.items.push(action.payload);
    //   // console.log('send succed')
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items=[];
        state.items.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(Filer.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items=[];
        state.items.push(action.payload);
      })
      .addCase(Filer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { sendProduct } = productSlice.actions;
export default productSlice.reducer;
