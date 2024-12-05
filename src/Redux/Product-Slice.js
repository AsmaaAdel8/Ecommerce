import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addProduct = createAsyncThunk("products/addProduct", async () => {
  const response = await axios.get(
    "http://localhost:1337/api/product?populate=*"
  );
  const data = await response.data.data;
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
