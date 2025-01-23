import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const uRl= process.env.REACT_APP_URL_API;
// send new product to rest api 
export const GetProduct = createAsyncThunk(
  "products/GetProduct",
  async (attributes) => {
    try {
      const response = await axios
        .post(`http://localhost:3000/products`, {
          attributes,
        })
        .then((response) => {
          console.log("Success:", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);
// http://localhost:3000/users