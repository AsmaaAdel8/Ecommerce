import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {dotenv} from 'dotenv';
// require("dotenv").config();

export const GetUsers = createAsyncThunk(
  "users/getUsers",
  async ({ Lemail, navigate  }) => {
    // const uRl= process.env.REACT_APP_URL_API;
    // console.log(process.env);
    //https://ecommerce-weld-one-59.vercel.app/api/users
    const response = await axios.get(`http://localhost:3000/users`);
    const users = Array.isArray(response.data) ? response.data : [];
    // console.log(Lemail)
    const userData = users.find(
      (user) => user.email.trim().toLowerCase() === Lemail.trim().toLowerCase()
    ); // Find the user by email
    console.log(userData);
    if (userData) {
      if (userData.Admin) {
        navigate("/");
        alert("Login Successfull");
        document.getElementById('shop').style.display="block";
        return "showAdminDashboard";
      } else {
        navigate("/");
        alert("Login Successfull");
        document.getElementById('shop').style.display="block";
        return "showUserDashboard";
      }
    } else {
      alert("User not found !!");
      navigate("/Register");
    }
  }
);

export const PostUser = createAsyncThunk("users/postUser", async (formData) => {
  // const uRl= process.env.REACT_APP_URL_API;
  const response = await axios.post(`http://localhost:3000/users`, formData);
  return response;
});

const usersSlice = createSlice({
  name: "Users",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    sendUsers: (state, action) => {
      state.items.push(action.payload);
      console.log("send succed");
    },
    LogOut: (state) => {
      return {
        ...state,
        items: null, // Clear user data on logout
      };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload; // Set items directly
      })
      .addCase(GetUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(PostUser.fulfilled, (state, action) => {
        state.items.push(action.payload); // Add the new user to the items array
      })
      .addCase(PostUser.rejected, (state, action) => {
        state.error = action.error.message; // Capture any error messages
      });
  },
});
export const { sendUsers , LogOut} = usersSlice.actions;
export default usersSlice.reducer;
