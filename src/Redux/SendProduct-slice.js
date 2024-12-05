import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetProduct = createAsyncThunk(
  "products/GetProduct",
  async (data) => {
    try {
      // const response = await fetch('http://localhost:1337/api/product?populate=*', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(data),
      // });
      // return await response.json();
      const response = await axios.post("http://localhost:1337/api/product", {
        data,
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
