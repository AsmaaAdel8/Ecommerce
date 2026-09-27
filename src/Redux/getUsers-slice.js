import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetUsers = createAsyncThunk(
  "users/getUsers",
  async ({ Lemail, navigate }) => {
    //https://ecommerce-weld-one-59.vercel.app/api/users
    const response = await axios.get(`http://localhost:3000/users`);
    const users = Array.isArray(response.data) ? response.data : [];
    // console.log(Lemail)
    const userData = users.find(
      (user) => user.email.trim().toLowerCase() === Lemail.trim().toLowerCase(),
    ); // Find the user by email
    if (userData) {
      if (userData.Admin) {
        navigate("/");
        alert("Login Successfull");
        document.getElementById("shop").style.display = "block";
        return "showAdminDashboard";
      } else {
        navigate("/");
        alert("Login Successfull");
        document.getElementById("shop").style.display = "block";
        return "showUserDashboard";
      };
    } else {
      alert("User not found !!");
      navigate("/Register");
    }
    return userData;
  },
);

export const PostUser = createAsyncThunk("users/postUser", async (formData) => {
  const response = await axios.post(`http://localhost:3000/users`, formData);
  // localStorage.setItem("users", JSON.stringify(formData))
  return response;
});

const usersSlice = createSlice({
  name: "Users",
  initialState: {
    currentUser: JSON.parse(localStorage.getItem("user")),
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
      state.currentUser = null;
      state.items = [];
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(GetUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
       state.currentUser = action.payload; // Store current logged-in user
        state.error = null;
      })
      .addCase(GetUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(PostUser.fulfilled, (state, action) => {
       state.status = "succeeded";
        state.currentUser = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(PostUser.rejected, (state, action) => {
        state.error = action.error.message; // Capture any error messages
      });
  },
});
export const { sendUsers, LogOut } = usersSlice.actions;
export default usersSlice.reducer;
