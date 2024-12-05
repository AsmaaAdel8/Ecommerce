import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetUsers = createAsyncThunk("products/addProduct", async () => {
  const response = await axios.get(
    "http://localhost:1337/api/user-infos"
  );
  const data = await response.data.data;
  return data;
});

const usersSlice = createSlice({
  name: "Users",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.push(action.payload);
      })
      .addCase(GetUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
