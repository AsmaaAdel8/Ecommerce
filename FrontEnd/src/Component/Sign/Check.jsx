import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetUserData = async () => {
  try {
    const user = await axios
      .get("http://localhost:1337/api/user-infos")
      .then((res) => res.data);
    if (user) {
      return user;
    }
  } catch (error) {
    console.error(error);
  }
};
export const CreateUser = createAsyncThunk(
  "users/createUser",
  async (UserData, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:1337/api/user-infos", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: UserData.username,
          email: UserData.email,
          password: UserData.password,
          confirmPas: UserData.confirmPas,
          Admin: UserData.Admin,
        }),
      });
      if (!response.ok) {
        // If the response is not ok, throw an error
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }
      return await response.json(); // Return the response data
    } catch (error) {
      // Handle network errors or other errors
      return rejectWithValue(error.message);
    }
  }
);
export const DeleteUserData = async () => {
  await axios.delete("http://localhost:1337/api/user-infos");
};
export const SetNewProduct = async (formData) => {
  //::products.products/7
  try {
    const res = await axios.post(
      "http://localhost:1337/api/product?populate=*",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (res.status === 200) {
      console.log("send data is ok");
    }
  } catch (error) {
    console.error(error);
  }
};
export const DeleteProduct = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:3000/products/${id}`);
    if (res.status === 200) {
      console.log("product was deleted successfully");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const GetProductData = async () => {
  try {
    const res = await axios.get("http://localhost:3000/products");
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
};
