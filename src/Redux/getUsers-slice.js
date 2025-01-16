import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await axios.get("http://localhost:1337/api/user-infos");
  const data = await response.data.data;
  return data;
});

export const PostUser = createAsyncThunk("users/postUser", async (formData) => {
  const response = await axios.post("http://localhost:1337/api/user-infos", formData);
  return response.data;
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
      console.log('send succed')
    },
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
export const { sendUsers } = usersSlice.actions;
export default usersSlice.reducer;
